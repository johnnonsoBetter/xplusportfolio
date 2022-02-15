import React, { useContext, useEffect, useState } from 'react'
import { LightbulbOutlined } from '@mui/icons-material';
import { Box, CircularProgress, Divider, IconButton, InputBase, Paper, Tooltip } from '@mui/material'

import SuggestionList from './SuggestionList';
import { FetchContext } from '../../../../../context/FetchContext';
import { AuthContext } from '../../../../../context/AuthContext';


function Search() {
    return (
      <Paper 
        elevation={1}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", borderRadius: "47px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1}}
          type="text"
          placeholder="Make Suggestion "
          inputProps={{ 'aria-label': 'search google maps' }}
          
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
  


export default function SuggestionContainer ({slug}) {

  const {authAxios} = useContext(FetchContext)
  const {setSomethingWentWrong} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [suggestionList, setSuggestionList] = useState([])


  useEffect(() => {   
       

    authAxios.get(`/api/v1/projects/${slug}/suggestions`).then(res => {
       console.log("this are the same data", res.data)
      
      
        setLoading(false)
    }).catch(err => {

        setSomethingWentWrong(true)
    })


    return () => {
        setSuggestionList([])
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
          <Box width="100%" px={2}> 
              <Search />
              <Box my={3} >
                  <SuggestionList />
              </Box>
          </Box>
        }
      </>
        
    )
}