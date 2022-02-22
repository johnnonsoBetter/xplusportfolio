
import { Box, CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../context/AuthContext';
import { FetchContext } from '../../../../context/FetchContext';




export default function SuggestionContainer () {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {


        authAxios.get('/api/v1/suggestions').then(res => {
            console.log(res)
            console.log("this is the main suggestion that i would really like to add ", res)
        }).catch(err => {
            console.log(err)
        })


        return () => {
            setSomethingWentWrong(false)
        }
    }, [])

    return (
        <Box width="100%"> 
           <Box my={3} mx={2} >
               
           </Box>

           
        </Box>
    )
}