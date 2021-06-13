import React,{useEffect} from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import {Header, Home,Checkout,Login,Payment,Orders} from "./components";
import {auth} from "./firebase";
import {useStateValue} from "./context/state-context";
import "./App.css";

const stripePromise =loadStripe('pk_live_51HToPQLq0OoZ8PXs58lRt0KxiU7XppGBITKUnqsWPRzHZlRHtY6rJ8uyUypm8iws7mIpHyWQJ4itB3iUKV5MDU8G00lkn57KH5');

function App() {
  const [{user},dispatch] =useStateValue();

  useEffect(()=>{
    //will only run once when the app component loads....
    auth.onAuthStateChanged((authUser)=>{

      if(authUser){
        // the user just logged in / the user was logged in
        dispatch({
          type:"SET_USER",
          user:authUser
        });
      }else{
        //the user is logout
        dispatch({
          type:"SET_USER",
          user:null
        });
      }
    })
  },[]);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/orders">
          <Header/>
          <Orders/>
        </Route>
        <Route path="/checkout" exact>
            <Header/>
            <Checkout/>
        </Route>
        <Route path="/payment">
          <Header/>
          <Elements stripe={stripePromise}>
            <Payment/>
          </Elements>
        </Route>
        <Route path="/" exact>
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
