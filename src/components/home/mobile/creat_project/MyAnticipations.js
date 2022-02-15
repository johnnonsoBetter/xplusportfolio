import { VerifiedRounded } from '@mui/icons-material'
import { ButtonBase, Collapse, Paper, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


export default function MyAnticipations ({openAnticipationList, setAnticipationId}) {


    const Anticipation = () => (
      <ButtonBase >
      <Box  sx={{ flexGrow: 1 }}
        component={Paper}
        square
        elevation={2}
      >
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
          
        }}
      >
           <Box display='flex' alignItems='center' >
                  
                  <Tooltip title='Me'>
                  <VerifiedRounded color='success' />
                  </Tooltip>
             
              <Box mx={1} >
                  <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} variant="body2" color="ButtonShadow" noWrap={true}> 2days </Typography>

              </Box>
              </Box>
    
            </Paper>
      
        <Box
        
        sx={{
            minHeight: 255,
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
            overflow: 'hidden',
            width: '100%',
             backgroundImage: `url(https://images.unsplash.com/photo-1609602644879-dd158c2b56b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGV4dHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)`,
            backgroundSize: 'cover',
            color: "white"
           
        }}
      > <Typography variant="h5" sx={{px: 1}} textAlign='center' > Where are we going to add some of those things and make the same timer that</Typography> </Box>
      
      </Box>    
  
      </ButtonBase>
    )
  
  
    
  
    return (
      <Collapse  in={openAnticipationList} timeout="auto" unmountOnExit >
      
        <Box  mx={2} my={1} > 
          <Anticipation />
        </Box>
      </Collapse>
    )
  }
  
  