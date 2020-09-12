const { API } = require("../../backend");

export const getmeToken = (userId, token) =>{
    return fetch(`${API}payment/gettoken/${userId}/${token}/`,
    {
        method:"GET",
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

export const processPayment = (userId, token, paymentInfo) => {
    const formData = new FormData();

    for(const name in paymentInfo){
        formData.append(name, formData[name])
    }

    return fetch(`${API}payment/process/${userId}/${token}/`,{
        method:"POST",
        body:formData
    })
    .then(res => res.json())
    .catch(err=>console.log(err))

}