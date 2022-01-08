
import { MessageRounded } from '@mui/icons-material';
import { Box, Divider, IconButton, InputBase, Paper, Tooltip } from '@mui/material'
import React from 'react'
import CommentList from './CommentList'


function Search() {
    return (
      <Paper 
        elevation={1}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", borderRadius: "47px" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1}}
          type="text"
          placeholder="Comment "
          inputProps={{ 'aria-label': 'search google maps' }}
          
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <Tooltip title="Suggest" >
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <MessageRounded />
            </IconButton>

        </Tooltip>
        
        
      </Paper>
    );
  }
  



export default function CommentContainer () {


    return (
       
         <Box width="100%"> 
            <Search />
            <Box my={3} >
            <CommentList />
            </Box>
        </Box>
    )
}