import React, { useContext, useEffect, useState } from 'react'
import { LightbulbOutlined } from '@mui/icons-material';
import { Box, CircularProgress, Divider, IconButton, InputBase, Paper, Tooltip } from '@mui/material'

import SuggestionList from './SuggestionList';
import { FetchContext } from '../../../../../context/FetchContext';
import { AuthContext } from '../../../../../context/AuthContext';
import Empty from '../../../../shared/Empty';
import Suggestion from '../../../profile/suggestions/Suggestion';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


export default function SuggestionContainer (props) {

  const {authAxios} = useContext(FetchContext)
  const {setSomethingWentWrong, isCurrentUser} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [suggestions, setSuggestions] = useState([])
  const {slug} = useParams()



  useEffect(() => {   
       

    authAxios.get(`/api/v1/projects/${slug}/suggestions`).then(res => {
        setSuggestions(res.data)  
        setLoading(false)
    }).catch(err => {

        setSomethingWentWrong(true)
    })


    return () => {
        setSuggestions([])
        setLoading(true)
        setSomethingWentWrong(false)
    }
  }, [])

  



    return (

      <>
        {
          loading ?
          <Box width='100%' display='flex' my={2} justifyContent='center' alignItems='center'  >
              <img src='/images/review_loader.gif' width={45} height={45} />
              
          </Box> : 

          <Box width="100%" p={1}> 
              
             
              <Box my={3} >
                   {
                     suggestions.length === 0 ?
                     <Empty emptyDetail="No Suggestion found" sx={{minHeight: "70px"}}/> : 
                     <>
                        {
                            suggestions.map(suggestion => {


                              const {id, user} = suggestion 
                              
                              return (
                                <Suggestion key={id} showEdit={isCurrentUser(user.slug)}  suggestion={suggestion} />
                              )
                            })
                        }
                    </>
                   }
                  
              </Box>
          </Box>
        }
      </>
        
    )
}