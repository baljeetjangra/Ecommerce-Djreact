import React, { useState } from 'react';
import ImageHelper from './helper/ImageHelper';
import {Redirect} from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/CartHelper';
import { isAuthenticated } from '../auth/helper';

// to do : handle this authentication from backend



const Card = ({
    product,
    addtoCart=true,
    removeFromCart=false,
    reload = undefined,
    setReload = f => f
    }) => {
       const productTitle = product ? product.name : "T-shirt"
       const productDescription = product ? product.description : "A T-Shirt For Everyone!"
       const productPrice = product ? product.price : " "

       const [redirect, setRedirect] = useState(false)

       const addToCart = () => {
        if(isAuthenticated()){
          addItemToCart(product,()=>setRedirect(true))
          console.log("add to cart");
        } else{
           console.log("Login Please!");
        }
       };

       const getAredirect = redirect =>{
         if(redirect){
          return  <Redirect to='/cart' />
       }
      }

      const showAddToCart = (addToCart) =>{
        return (
          addtoCart && (
          <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
        )
        )
      };

      const showRemoveFromCart = (removeFromCart) =>{
        return ( removeFromCart && (
          <button
                onClick={()=>{
                  removeItemFromCart(product.id)
                  console.log("product removed");
                  setReload(!reload)
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
          </button>
        )
        )
      };

    return (
      <div className="card   border border-info ">
        <div className="card-header lead">{productTitle}</div>
        <div className="card-body">
          {getAredirect(redirect)}
         <ImageHelper product={product} />
          <p className="lead font-weight-normal text-wrap">
            {productDescription}
          </p>
    <p className="btn btn-success rounded  btn-sm px-4">$ {productPrice}</p>
          <div className="row">
            <div className="col-12">
             {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card