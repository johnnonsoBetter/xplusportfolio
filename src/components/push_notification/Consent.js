import React, { useState } from 'react'

import { SendRounded } from '@mui/icons-material'
import {  IconButton } from '@mui/material'
import { Box } from '@mui/system'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';





export default function Consent() {

   

    const [messages, setMessages ] = useState([])
    const [value, setValue] = useState('')
    
   

function Input() {
    return (
      <Paper
        component="form"
        elevation={0}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "97%" }}
        onSubmit={(e) => {
            e.preventDefault()

            

            setMessages(messages.concat(value)) 
            setValue('')
        }}
      >
      
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Send us a message"
          autoFocus
          inputProps={{ 'aria-label': 'search google maps' }}
          value={value}
          onChange={(e) => {
              setValue(e.target.value)
          }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SendRounded />
        </IconButton>
        
      </Paper>
    );
  }

    return (
        <Paper  minHeight={200} sx={{position: 'absolute',  minHeight: 200, borderRadius: "20px", bottom: 20, right: 20}}  >
          

            <Box display='flex' justifyContent='center' >
                <Input />
            </Box>
            
      </Paper>
    )
}