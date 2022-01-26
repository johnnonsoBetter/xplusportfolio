import { AssignmentOutlined, TimerRounded } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { BottomNavigation, BottomNavigationAction, Box, IconButton, Divider, Typography, Grid, Avatar } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SwipeableViews from 'react-swipeable-views/lib/SwipeableViews';
import { useTheme } from '@emotion/react';
import { blue, green, orange, red } from '@mui/material/colors';

export default function CreateAnticipationMenu() {


 function Input() {
  return (
    <Paper
      component="form"
      sx={{  my: 2,  width: "100%", justifyContent: "center", display: 'flex', alignItems: 'center'}}
      autoComplete='off'
      elevation={3}
    >
     
      <InputBase
        sx={{ flex: 1, height: "100%",
        backgroundColor: "",
        pl: 1,
        minHeight: 400, textAlign: "center!important", fontWeight: "bolder", textTransform: "capitalize", fontSize: "1.6em", width: "100%", }}
        placeholder="What are you working on?"
        type='text'
        inputProps={{ 'aria-label': 'search google maps' }}
        multiline
        fullWidth
        
        
      />
     
    </Paper>
  );
}

    return (
        <Box position="relative" height="100%" >
            <Box >
              <Typography variant='h6' mx={2}  color="ButtonText" fontWeight={700}>
                Create Anticipation
              </Typography>
              <Divider variant='horizontal' />
            </Box>

            <Box  mx={2} my={1} >

             
              <Box display="flex" alignItems="center"   justifyContent="flex-end" >
                  <Typography > 2weeks</Typography>
                  <IconButton sx={{mx: 2}}>
                  <TimerRounded  />

                  </IconButton>
                  <LoadingButton size='small' variant='contained' color='success'> Create</LoadingButton>

                  
              </Box>


            </Box>

           
           
            

            <Box  mx={1} style={{
            }}   justifyContent='center' display='flex' alignItems="center" >
                <Input />
            </Box>


            <Paper 
              sx={{mt: 3, mx: 1, py: 1, display: "flex", flexWrap: "wrap"}}
              elevation={2}
            >

              <Avatar  sx={{ bgcolor: orange[500], mx: 1 }} variant="rounded">
                <AssignmentOutlined />
              </Avatar>

              <Avatar sx={{ bgcolor: green[500], mx: 1 }} variant="rounded">
                <AssignmentOutlined />
              </Avatar>

              <Avatar sx={{ bgcolor: blue[500], mx: 1 }} variant="rounded">
                <AssignmentOutlined />
              </Avatar>

              <Avatar sx={{ bgcolor: red[500], mx: 1 }} variant="rounded">
                <AssignmentOutlined />
              </Avatar>

              <Avatar sx={{ bgcolor: green[500], mx: 1 }} variant="rounded">
                <AssignmentOutlined />
              </Avatar>

              <Avatar sx={{ bgcolor: green[500], mx: 1 }} variant="rounded">
                <AssignmentOutlined />
              </Avatar>
            </Paper>

        </Box>
    )
}