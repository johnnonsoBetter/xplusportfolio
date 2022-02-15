
import { Box, CircularProgress } from '@mui/material';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../../context/AuthContext';
import { FetchContext } from '../../../../context/FetchContext';




export default function SuggestionContainer () {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    return (
        <Box width="100%"> 
           <Box my={3} mx={2} >
               
           </Box>

           
        </Box>
    )
}