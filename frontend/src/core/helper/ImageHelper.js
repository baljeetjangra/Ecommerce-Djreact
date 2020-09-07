import React from 'react';

const ImageHelper = ({product}) => {
    const Imageurl = product ? product.image : `https://www.pexels.com/photo/assorted-t-shirts-2294342/`

    return ( 
        <div className="rounded border border-success p-1" >
            <img 
            src={Imageurl}
            style={{maxHeight:'100%', maxWidth:'100%'}}
            className=" rounded"
            alt=''
            />
        </div>
     );
}
 
export default ImageHelper;