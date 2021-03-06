
import { Box, Paper, Skeleton, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../../../../context/AuthContext';
import { FetchContext } from '../../../../context/FetchContext';
import HomeInfoContext from '../../../../context/HomeInfoContext';
import Empty from '../../../shared/Empty';
import Suggestion from './Suggestion';




export default function SuggestionContainer () {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong, isCurrentUser} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const {slug} = useParams()
    const [suggestions, setSuggestions] = useState([])
    const {titleBarUserName, appIsOffline} = useContext(HomeInfoContext)


    useEffect(() => {
        document.title = titleBarUserName + ' (Suggestions)'
        setLoading(true)
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
    }, [slug, appIsOffline])

    return (
        <Box width="100%"> 
            <Box my={3} >


                {
                    loading ?
                    <Loader />
                    :
                    <>

                    {
                     suggestions.length === 0 ?
                     <Empty emptyDetail="No Suggestion found" sx={{minHeight: "300px", display: "flex", alignItems: 'center', justifyContent: "center"}}/> : 
                        

                        <>
                            {
                                suggestions.map(suggestion => {

                                    const {id, user} = suggestion 
                                    
                                return (
                                    <Suggestion showEdit={isCurrentUser(user.slug)} key={id} suggestion={suggestion} />
                                )})
                            }
                        </>
                   }
                    
                    </>
                }
                   
                  
              </Box>

           
        </Box>
    )
}


const Loader = () => {

    const Load = () => (
        <Box my={2}  >
        <Paper sx={{p: 2}} elevation={0} >

       
        <Box display='flex' justifyContent='space-between' alignItems='center' >
                
                 <Stack  >
                 
         
                 <Box maxWidth={120}>
                     <Skeleton variant='text' width={70} />
                 </Box>
                 <Box maxWidth={120}>
                     <Skeleton variant='text' width={70} />                    
                 </Box>
                 
                  
             </Stack>

             <Box display='flex'  alignItems='center' >
                
                 

                
             </Box>
        </Box>

        <Box my={2} display='flex' alignItems='center' flexWrap='wrap' >
            
          <Skeleton variant='text' width="90%" />
                  
        </Box>
        </Paper>
    </Box>
    )


    return (
        <>
            <Load /> 
            <Load />
            <Load />
            <Load />
        </>
    )
}