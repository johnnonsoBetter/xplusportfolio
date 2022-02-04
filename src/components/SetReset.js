import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import ConfirmAccount from './ConfirmAccount';
import UpdatePassword from './UpdatePassword';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { publicFetch } from '../utils/fetch';
import { AuthContext } from '../context/AuthContext';

export default function SetReset () {


    const location = useLocation()
    const parsed = queryString.parse(location.search);
    const {confirmation_token, redirect_url, reset_password_token} = parsed
    const [redirect, setRedirect] = useState(false)
    const {setAuthState} = useContext(AuthContext)
   

    useEffect(() => {
        publicFetch.get(`api/v1/auth/password/edit?redirect_url=${redirect_url}&reset_password_token=${reset_password_token}`).then(response => {
            const token = response.headers['access-token']
            const expiry = response.headers['expiry']
            const client = response.headers['client']
            const uid = response.headers['uid']
            const userInfo = response.data['data']

            console.log("we have finally made it to workd")
       
         //window.location.href = '/update_password'
         setAuthState({token, expiresAt: expiry, userInfo, client, uid})
        }).catch(err => {
            console.log(err)
        })
    }, [])
    
  
    
  
    return (
      <>
        {
          redirect_url ?
          <Box>
              {redirect ? <Redirect to='/update_password' />  :
                <CircularProgress />
              }
          </Box> :
          confirmation_token ?
          <ConfirmAccount /> :
          <Redirect to='/login'  />
        }
      </>
    )
  }