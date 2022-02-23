
import { Box, CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../../../../context/AuthContext';
import { FetchContext } from '../../../../context/FetchContext';
import Empty from '../../../shared/Empty';
import Suggestion from './Suggestion';




export default function SuggestionContainer () {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const {slug} = useParams()
    const [suggestions, setSuggestions] = useState([])


    useEffect(() => {

       
        authAxios.get(`/api/v1/users/${slug}/suggestions`).then(res => {
            setSuggestions(res.data)
            setLoading(false)
        }).catch(err => {
            setSomethingWentWrong(true)
        })


        return () => {
            setSomethingWentWrong(false)
            setLoading(true)
            setSuggestions([])
        }
    }, [])

    return (
        <Box width="100%"> 
            <Box my={3} >


                {
                    loading ?
                    <Box display='flex' minHeight={250} alignItems='center' justifyContent='center'>
                        <CircularProgress />
                    </Box>
                    :
                    <>

                    {
                     suggestions.length === 0 ?
                     <Empty emptyDetail="No Suggestion found" sx={{minHeight: "300px", display: "flex", alignItems: 'center', justifyContent: "center"}}/> : 
                        

                        <>
                            {
                                suggestions.map(suggestion => (
                                    <Suggestion key={suggestions.id} suggestion={suggestion} />
                                ))
                            }
                        </>
                   }
                    
                    </>
                }
                   
                  
              </Box>

           
        </Box>
    )
}