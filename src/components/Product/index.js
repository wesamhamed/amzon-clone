import React from 'react';
import {useStateValue} from "../../context/state-context";
import "./Product.css";

function Product({id,title,image,price,rating}) {
  const [{basket},dispatch] =useStateValue();
  const addToBasket =()=>{
    //dispatch the item into the data layout
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id,
        title,
        image,
        price,
        rating
      }
    })
  }
  return (
    <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {
              Array(rating).fill().map((_,i)=>(
                <p key={i}>⭐</p>
              ))
            }
          </div>
        </div>
        <img 
            src={image}
            alt="product image" />
        <button onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Product
