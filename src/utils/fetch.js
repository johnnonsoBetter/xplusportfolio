import axios from 'axios'


const publicFetch = axios.create({
    baseURL: process.env.NODE_ENV === 'development'? 'http://localhost:3001/' : window.location.host === 'localhost:3000' ? 'http://localhost:3001/' : 'https://xplusportfoliob.herokuapp.com/'
})



export { publicFetch };