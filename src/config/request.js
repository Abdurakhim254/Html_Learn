import  axios from 'axios';


const request = axios.create({baseURL:import.meta.env.VITE_BASE_URL})


request.interceptors.request.use(config => {
    config.headers['Authorization'] ='Bearer wdwdew4d8ewd4ew8d7dew878ew7ew8e7ewe8' 
    return config
})



request.interceptors.response.use((res)=>{
    if(res.status=401){}

    return res
})




export {request}