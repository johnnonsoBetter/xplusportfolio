import React, { useContext, useEffect, useState } from 'react'
import { LightbulbOutlined } from '@mui/icons-material';
import { Box, CircularProgress, Divider, IconButton, InputBase, Paper, Tooltip } from '@mui/material'

import SuggestionList from './SuggestionList';
import { FetchContext } from '../../../../../context/FetchContext';
import { AuthContext } from '../../../../../context/AuthContext';
import Empty from '../../../../shared/Empty';


function CreateSuggestion() {
    return (
      <Paper 
        elevation={1}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%",}}
      >
        <InputBase
          sx={{ ml: 1, flex: 1}}
          type="text"
          placeholder="Make Suggestion "
          
          multiline
          rows={4}
          
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <Tooltip title="Suggest" >
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <LightbulbOutlined />
            </IconButton>

        </Tooltip>
        
        
      </Paper>
    );
  }
  


export default function SuggestionContainer ({slug, user, project}) {

  const {authAxios} = useContext(FetchContext)
  const {setSomethingWentWrong, isCurrentUser} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [suggestions, setSuggestions] = useState([])


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
          <Box >
            <CircularProgress />
          </Box> : 

          <Box width="100%" p={1}> 
              
              {
                !isCurrentUser(user.slug) && <CreateSuggestion />
              }
              <Box my={3} >
                   {
                     suggestions.length === 0 ?
                     <Empty emptyDetail="No Suggestion found" sx={{minHeight: "70px"}}/> : 
                     <SuggestionList project={project} suggestions={suggestions} />
                   }
                  
              </Box>
          </Box>
        }
      </>
        
    )
}