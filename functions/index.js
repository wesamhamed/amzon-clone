const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HToPQLq0OoZ8PXsUw2dMIMqlFgxIWxcR35evKgt5aaP6Hh9PhFaabwmDNwaVoaMJRpzKOr3BHT9qW5qD2b1i1l400rrh1o1lL");

// API

// API config
const app = express();


//middlewares

app.use(cors());
app.use(express.json());

//API routes

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});
app.post("/payments/create", async(req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunit of the currency
        currency: "usd"
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
});

//listen command

exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/amzon-clone-46b1a/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });