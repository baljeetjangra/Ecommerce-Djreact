import {API} from '../../backend';
import {cartEmpty} from '../../core/helper/CartHelper';

export const signup = (user) => {
    return fetch(`${API}user/`,{
        method: "POST",
        headers:{
            Accept:"application/json",
            "content-type":"application/json",
        },
        body: JSON.stringify(user),
    })
    .then(res => {
        return res.json();
    }
    )
    .catch(err => console.log(err));
}

export const signin = (user) => {
    const formData = new FormData()

    for(const name in user){
        formData.append(name, user[name])
    }
 
    return fetch(`${API}user/login/`,{
        method: "POST",
        body: FormData,
    })
    .then(res => {
        return res.json();
    }
    )
    .catch(err => console.log(err));
}