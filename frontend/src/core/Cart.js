import React, { useState, useEffect } from 'react';
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/CartHelper';
import PaymentB from './PaymentB';

const Cart = () => {
    const [reload, setReload] = useState(false)
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        return setProducts(loadCart())
    },[reload])

    const loadAllProducts = (products) => {
        return (
            <div className="">
                {products.map((product,index)=>{
                    return <Card 
                    key={index}
                    product={product}
                    removeFromCart={true}
                    addToCart={false}
                    reload={reload}
                    setReload={setReload}
                    />
                })}
            </div>
        )   
    }

    const loadCheckout = () => {
        return (
            <div className="">
                <h1>Cart</h1>
            </div>
        )   
    }

    return ( 
        <Base title="Cart Page" description="Welcome to Checkout">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6">
                        <h3> Products</h3>
                        {loadAllProducts(products)}
                    </div>
                    <div className="col-md-6">
                        {products.length > 0 ? 
                        <PaymentB products={products} setReload={setReload} />
                    :
                    <h3>Please Login or add something to cart</h3>
                    }
                    </div>
                </div>
            </div>
        </Base>
     );
}
 
export default Cart;