import React, {useEffect, useState} from 'react'
import "./Payment.css"
import { Link, useNavigate } from 'react-router-dom'
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { useStateValue } from '../Stateprovider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from "../axios"
import { db } from '../firebase';

function Payment() {
  let navigate=useNavigate()
  const [{ basket, user }, dispatch] = useStateValue();
  let stripe=useStripe()
  let Elements=useElements()
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
let handelchange=(e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  }
  const getBasketTotal = (basket) =>
basket?.reduce((accomulator, item) => item.price +accomulator , 0);
useEffect(() => {
  // generate the special stripe secret which allows us to charge a customer
  const getClientSecret = async () => {
    const response = await axios({
      method: 'post',
      // Stripe expects the total in a currencies subunits
      url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
    });
    setClientSecret(response.data.clientSecret);
  }
getClientSecret();
  ;},[basket])
  console.log(clientSecret)

  let handelsubmit= async(e) => {
    e.preventDefault()
    setProcessing(true)
    const payload = await stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: Elements.getElement(CardElement),
      },
    })
    .then(({ paymentIntent }) => {
      db.collection('users').doc(user?.uid).collection("orders").doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      })
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      dispatch({
        type: 'EMPTY_BASKET',
      });
      navigate('/orders');
    })

  }
  
  return (
    <div className='payment'>
         <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Chicago, IL</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form  onSubmit={handelsubmit}>
            <CardElement onChange={handelchange}/>
            <div className="payment__priceContainer">
            <CurrencyFormat
        renderText={(value) => <h3>Order Total:{value}</h3>}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
       <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
            </div>
            
                {error && <div>{error}</div>}
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment