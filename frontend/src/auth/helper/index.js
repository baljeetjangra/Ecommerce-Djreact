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
    const formData = new FormData();

    for(const name in user){
        formData.append(name, user[name])
    }
    
    for(var key of formData.keys()){
        console.log("MYKEYS : ", key);
    }

    return fetch(`${API}user/login/`,{
        method: "POST",
        body: formData,
    })
    .then((res) => {
        console.log("Success", res);
        return res.json();
    })
    .catch(err => console.log(err));
}

export const authenticate = (data, next) => {
    if(typeof window !== undefined){
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
};

export const isAuthenticated = () => {
    if(typeof window == undefined){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'));
    }
    else {
        return false;
    }
};

export const signout = next => {
    const userId = isAuthenticated() && isAuthenticated().user.id;

    if(typeof window !== undefined){
        localStorage.removeItem('jwt');
        cartEmpty(()=>{})

        return fetch(`${API}user/logout/${userId}/`,{
            method:'GET',
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
              }
        })
        .then(res => {
            console.log('Logout Successfully');
            console.log(res);
            next();
        })
        .catch(err => console.log(err)
        )
    }
}