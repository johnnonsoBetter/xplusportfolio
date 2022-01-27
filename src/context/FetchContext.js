import axios from 'axios'
import React, { createContext, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {AuthContext} from './AuthContext'
const FetchContext = createContext()

const {Provider} = FetchContext

const FetchProvider = ({children}) => {
    
    const authAxios = axios.create({
        baseURL: process.env.NODE_ENV === 'development'? 'http://localhost:3001' : 'https://peoplesfavouriteb.herokuapp.com/'
    })

    const {isAuthenticated, setAuthState} = useContext(AuthContext)

    const history = useHistory()


    


    
    

   

    authAxios.interceptors.request.use(
        config => {
    
        const userHeaders =  JSON.stringify(

            {   
                'access-token': `${localStorage.getItem('token')}`,
                'client': `${localStorage.getItem('client')}`,
                'uid': `${localStorage.getItem('uid')}`
            
            }
        )

        // if(!isAuthenticated()){
        //     // history.push('#login')
        //     window.location.href = '/sign_up'
        // }

            

          config.headers = JSON.parse(userHeaders)
          return config;
        },
        error => {
          return Promise.reject(error);
        }
    ); 


    authAxios.interceptors.response.use(
        res => {
            
    
            console.log("this has returned the response")
         
          return res;
        },
        error => {
          
            if(error.response.status === 401){
               
                setAuthState({})
                window.location.href = '/login'
               console.log("rejected")
            }

         
          return Promise.reject(error);
        }
    ); 
    
    return (
        <Provider 
            value={{
                authAxios
            }}

        >
            {children}
        </Provider>
    )

}

export {FetchContext, FetchProvider}