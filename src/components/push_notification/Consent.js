import React, { useState } from 'react'

import { CloseRounded, SendRounded } from '@mui/icons-material'
import { Avatar, IconButton, Stack, Typography } from '@mui/material'
import { blue, grey, orange } from '@mui/material/colors'
import { Box } from '@mui/system'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';




export default function Consent({show, setShow}) {

   

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