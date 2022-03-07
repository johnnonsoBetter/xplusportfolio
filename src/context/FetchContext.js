import axios from 'axios'
import React, { createContext, useContext, useState} from 'react'
import {AuthContext} from './AuthContext'
const FetchContext = createContext()

const {Provider} = FetchContext

const FetchProvider = ({children}) => {
    
    const authAxios = axios.create({
        baseURL: process.env.NODE_ENV === 'development'? 'http://localhost:3001' : 'https://xplusportfoliob.herokuapp.com'
    })

    const {isAuthenticated, setAuthState, setSomethingWentWrong} = useContext(AuthContext)

    authAxios.interceptors.request.use(
        
        config => {
          
        const userHeaders =  JSON.stringify(

            {   
                'access-token': `${localStorage.getItem('token')}`,
                'client': `${localStorage.getItem('client')}`,
                'uid': `${localStorage.getItem('uid')}`
            
            }
        )
        
        
        if(!isAuthenticated()){
            setAuthState({})
            window.location.href = '/login'
        }

          config.headers = JSON.parse(userHeaders)
          return config;
        },
        error => {
          return Promise.reject(error);
        }
    ); 


    authAxios.interceptors.response.use(
        res => {
            
            
          return res;
        },
        error => {
          
            if(error.response.status === 401){
               
                setAuthState({})

                window.location.href = '/login'
               
            }
            

        

         
          return Promise.reject(error);
        }
    ); 
    
    return (
        <Provider 
            value={{
                authAxios,
                
            }}

        >
            {children}
        </Provider>
    )

}

export {FetchContext, FetchProvider}