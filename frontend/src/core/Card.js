import React from 'react';
import ImageHelper from './helper/ImageHelper';
import {Redirect} from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/CartHelper';

// to do : handle this authentication from backend
const isAuthenticated = true;



const Card = ({
    product,
    addToCart=true,
    removeFromCart=false
    }) => {
       const productTitle = product ? product.name : "T-shirt"
       const productDescription = product ? product.description : "A T-Shirt For Everyone!"
       const productPrice = product ? product.price : " "

       addToCart = () => {
        if(isAuthenticated){
          addItemToCart(product,()=>{})
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
          addToCart && (
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