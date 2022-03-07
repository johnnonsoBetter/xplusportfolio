import axios from 'axios'


const publicFetch = axios.create({
    baseURL: process.env.NODE_ENV === 'development'? 'http://localhost:3001' : 'http://localhost:3001'
})



export { publicFetch };