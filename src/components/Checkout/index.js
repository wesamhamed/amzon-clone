import React from 'react';
import {Subtotal,CheckoutProduct} from "../../components";
import {useStateValue} from "../../context/state-context";
import "./Checkout.css";

function Checkout() {
  const [{basket,user},dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad"
         src="https://images-na.ssl-images-amazon.com/images/G/01/ape/static/fallback/US_CENTER_PROMO_BACKUP._CB1578606135_.jpg"
          alt="image ads" />
          <div>
            <h3>Hello, {user && user.email}</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {basket.map((item,index)=>(
              <CheckoutProduct
                key={item.id * Math.random()+index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
      </div>
      <div className="checkout__right">
          <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout;
