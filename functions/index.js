const functions = require("firebase-functions");
//  http://localhost:5001/clone-2f003/us-central1/api (us-centerall-api)

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
"sk_test_4eC39HqLyjWDarjtT1zdp7dc"
);
//sk_test_51Kdd4zBtzzv713WZ28Hb6sBUKiF9U5TAwLMB5MkHHUYKJKZ9vIvsmJXJEANQlhkOfOn6oEq8vDC7yWQSIPRD0X4W001vxwQlUc
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
  
    console.log('Payment Request Recieved for this amount >>> ', total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: 'usd',
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
// - Listen command
exports.api = functions.https.onRequest(app);


// "		sk_test_4eC39HqLyjWDarjtT1zdp7dc"