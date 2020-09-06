import React, {useState, useEffect} from 'react';
import {getProducts} from './helper/CoreApiCalls';
import ImageHelper from './helper/ImageHelper';
import Base from './Base';

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

    return ( <Base title="Baljeet T-shirt Store" description="Welcome to T-shirt Store!" >
        <h1>Home Component</h1>
            {products.map((product, index)=>{
                return ( 
                <div key={index} >
                <h1 >{product.name}</h1>
                    <ImageHelper product={product}/>
                </div>
                )
            })}
    </Base>
     );
}
 
export default Home;