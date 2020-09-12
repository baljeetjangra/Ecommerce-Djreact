import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import {cartEmpty} from './helper/CartHelper';
import {createOrder} from './helper/OrderHelper';
import {isAuthenticated, signout} from '../auth/helper/index';
import { getmeToken, processPayment } from './helper/PaymentHelper';

const PaymentB = ({
    products,
    reload =undefined,
    setReload = f => f,
}) => {

    const [info, setInfo] = useState({
        loading:false,
        success:false,
        clientToken:null,
        error:"",
        instance:{}
    })

    const userId = isAuthenticated() && isAuthenticated().user.id
    const token = isAuthenticated() && isAuthenticated().token

    const getToken = (userId, token) => {
        getmeToken(userId,token)
        .then((info) => {
            if (info.error) {
                setInfo({
                    ...info,
                    error:info.error,
                });
                signout(()=>{
                    return <Redirect to="signin" />
                })
            } else {
                const clientToken = info.clientToken
                setInfo({clientToken})
            }
        })

    }

    return ( 
        <div>
            <h1>Payment</h1>
        </div>
     );
}
 
export default PaymentB;