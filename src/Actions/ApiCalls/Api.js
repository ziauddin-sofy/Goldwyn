const { default: axios } = require("axios")

export const GetAPIResponse = (url, payload) =>{
    axios.get(url,{
        method:'GET',
        headers:{},
        payload
    }).then(response =>response)
    .catch(error => error.response)
}
export const PostAPIResponse = (url, payload) =>{
    axios.get(url,{
        method:'POST',
        headers:{},
        payload
    }).then(response =>response)
    .catch(error => error.response)
}
export const PatchAPIResponse = (url, payload) =>{
    axios.get(url,{
        method:'PATCH',
        headers:{},
        payload
    }).then(response =>response)
    .catch(error => error.response)
}
export const DeleteAPIResponse = (url, payload) =>{
    axios.get(url,{
        method:'DELETE',
        headers:{},
        payload
    }).then(response =>response)
    .catch(error => error.response)
}






