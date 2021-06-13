import React,{useState} from 'react';
import {Link,useHistory} from "react-router-dom";
import {auth} from "../../firebase";
import "./Login.css";

function Login() {
  const history =useHistory();
  const [email,setEmail] =useState("");
  const [password,setPassword]=useState("");
  const sigIn =(e)=>{
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email,password)
      .then((auth)=>{
          if(auth){
            history.push("/");
          }
      }).catch((error)=>{
        alert(error.message);
      })
   
    
  }
  const register =(e)=>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      //it successfully created a new user with email and password
      // console.log(auth);
      if(auth){
        history.push("/");
      }
    })
    .catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div className="login">
      <Link to="/">
        <img 
        className="login__logo"
        src="https://thumbs.dreamstime.com/b/amazon-logo-editorial-vector-illustration-market-136495269.jpg"
        alt="amazon logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <label htmlFor="email">E-mail</label>
          <input 
                  id="email" 
                  type="text"
                  name="email" 
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  />
          <label htmlFor="password">Password</label>
          <input 
                id="password" 
                type="password"
                name="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                />
          <button 
                className="login__sign-in-button"
                onClick={sigIn}
                >Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button 
            className="login__register-button"
            onClick={register}
            >Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;
