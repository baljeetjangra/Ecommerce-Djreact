const { API } = require("../../backend");

export const createOrder = (userId, token, orderData) => {
    const formData = new FormData

    for(const name in formData){
        formData.append(name, formData[name])
    }
    return fetch(`${API}order/add/${userId}/${token}/`,
    {
        method: 'POST',
        body:formData
        
    })
    .then(response => {
        return response.json()
    })
    .catch(err=> console.log(err))
}