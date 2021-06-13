import React,{useState,useEffect} from 'react';
import {Link,useHistory} from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import {CheckoutProduct} from "../../components";
import {useStateValue} from "../../context/state-context";
import {getBasketTotal} from "../../reducer";
import axios from "../../utils/axios";
import {db} from "../../firebase";
import "./Payment.css";

function Payment() {
  const history = useHistory();
  const [{user,basket},dispatch]=useStateValue();
  const stripe =useStripe();
  const elements =useElements();
  
  const [succeeded,setSucceeded] =useState(false);
  const [processing,setProcessing] =useState("");
  const [error,setError] =useState(null);
  const [disabled,setDisabled] =useState(true);
  const [clientSecret,setClientSecret] =useState(true);


  useEffect(()=>{
      //generate the special stripe secret which allows us to charge a customer
      const getClientSecret =async()=>{
        const response = await axios({
          method:"POST",
          //Stripe expects the total in a currencies subunits
          url:`/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret);
      }
      getClientSecret();
  },[basket]);

  // console.log("Client Secret ",clientSecret);


  const handleSubmit =async(e)=>{
    //do all fancy stripe stuff...
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
      //paymentIntent = payment confirmation

      db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket:basket,
          amount:paymentIntent.amount,
          created:paymentIntent.created
        })

      setSucceeded(true);
      setError(null);
      setProcessing(false);
      dispatch({
        type:"EMPTY_BASKET"
      });
      history.replace("/orders");
    });
  }
  const handleChange =e=>{
    //Listen for changes in the CardElement
    //and display any errors as the customer types their card details

    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout (<Link to="/checkout">{basket && basket.length} items</Link>)</h1>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery address</h3>
            </div>
            <div className="payment__address">
                <p>{user && user.email}</p>
                <p>123 React Lane</p>
                <p>Los Angeles, CA</p>
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
                {basket.map(item=>(
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
                  <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className="payment__price-container">
                          <CurrencyFormat
                            renderText={(value)=>(
                              <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandsSeparator={true}
                            prefix={"$"}
                          />
                          <button disabled={processing || disabled ||succeeded}>
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                          </button>
                    </div>
                    {/* Errors */}
                    {error && <div>{error}</div>}
                  </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Payment;
