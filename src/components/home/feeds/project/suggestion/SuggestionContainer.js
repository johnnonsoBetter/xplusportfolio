import { LightbulbOutlined } from '@mui/icons-material';
import { Box, Divider, IconButton, InputBase, Paper, Tooltip } from '@mui/material'
import React from 'react'
import SuggestionList from './SuggestionList';


function Search() {
    return (
      <Paper 
        elevation={1}
      sx={{ p: '12px 4px', display: 'flex', alignItems: 'center', width: "100%", borderRadius: "7px" }}
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
  


export default function SuggestionContainer () {


    return (
        <Box width="100%"> 
           <Search />
           <Box my={3} >
               <SuggestionList />
           </Box>
        </Box>
    )
}