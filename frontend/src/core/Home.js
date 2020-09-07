import React, {useState, useEffect} from 'react';
import {getProducts} from './helper/CoreApiCalls';
import Base from './Base';
import Card from './Card';

const Home  = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = () =>{
        getProducts()
        .then((data) =>{
            if(data.error){
                setError(data.error);
                console.log(error);
            } else{
                setProducts(data);
            }
        });
    };

    useEffect(()=>{
        loadAllProducts();
    }, []);

    return ( 
    <Base title="Baljeet T-shirt Store" description="Welcome to T-shirt Store!" >
        <h1 className="text-center" >T-Shirts</h1>
        <div className="row">

            {products.map((product, index)=>{
                return ( 
                    <div key={index} className="col-4 mb-4" >
                    <Card product={product} />
                </div>
                )
            })}
        </div>
    </Base>
     );
}
 
export default Home;