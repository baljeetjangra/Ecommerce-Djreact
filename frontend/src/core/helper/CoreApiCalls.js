import {API} from '../../backend';


export const get_products = () =>{
    return fetch(`{API}/product`, {method:'GET'})
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err));
}