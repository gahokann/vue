import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        accept: 'application/json'
    }
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

console.log(instance)

export default instance
