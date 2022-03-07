import axios from 'axios'


const publicFetch = axios.create({
    baseURL: process.env.NODE_ENV === 'development'? 'http://localhost:3001/' : 'https://xplusportfoliob.herokuapp.com/'
})



export { publicFetch };