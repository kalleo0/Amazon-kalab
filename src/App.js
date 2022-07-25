
import React, { useEffect } from 'react';
import './App.css';
import Nav from './A-Nav/Nav';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';
import Payment from './Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Payment/Orders';
const promise = loadStripe(
 ' pk_test_TYooMQauvdEDq54NiTphI7jx')
  function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
       <Router >
       <div className="App">
       <Routes>
       < Route path="/"element={<>
      <Nav/>
       <Home/>
     </>}
        />

< Route path="/orders"element={<>
      <Nav/>
       <Orders />
     </>}
        />
       < Route path="/Checkout" element={<>
    <Nav/>
       <Checkout/>
   </>}/>
    < Route path="/login" element={<Login/>}/> 
     

      < Route path="/Payment" element={<>
       <Elements stripe={promise}>
              <Payment />
            </Elements>
   </>}/>
   
        </Routes>
     </div>
    </Router>
  );
}

export default App;

