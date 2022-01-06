import { Box, List, ListItem, ListItemIcon, Paper, Skeleton, Stack } from '@mui/material'
import React from 'react'



export function Loader() {
    return (
        <Box my={2} sx={{ flexGrow: 1 }}>
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
        <Box  my={1} display="flex" width="100%" alignItems="center" justifyContent="flex-start" >
            
            <ListItemIcon >
                <Skeleton variant="circular" width={45} height={45} />
            </ListItemIcon>
            <Stack  >
                
                <Box  >
                    <Skeleton type="text" width={60} />
                </Box>
                <Box  >
                    <Skeleton type="text" width={60} />                
                </Box>

            </Stack>
        
        </Box>
      
      </Paper>
      <Paper elevation={0} >
          <Skeleton variant="rectangular" sx={{width: "100%", height: 225}} />
      </Paper>
        
      <Paper elevation={0} sx={{display: "flex", justifyContent: "space-between"}} >
          <Box ml={1} >
            <Skeleton type="text" width={60} /> 
          </Box>

         
         
      </Paper>

      <Paper elevation={0} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} >
          <Box ml={1} my={1}  display="flex" width="100%" alignItems="center" justifyContent="flex-start"  >
             
            <Skeleton variant="circular" width={30} height={30} sx={{mr: 2}} />
            <Skeleton variant="rectanglar"   type="text" width={60}  />
          </Box>

          <Box mr={1} >
            <Skeleton type="text" width={60} /> 
          </Box>
         
      </Paper>
     
    </Box>
    )

}


export default function AnticipationListLoader() {

    return (
        <List  >
            <ListItem disableGutters >
                <Loader />
            </ListItem>

            <ListItem disableGutters >
                <Loader />
            </ListItem>
            <ListItem disableGutters >
                <Loader />
            </ListItem>
            <ListItem disableGutters >
                <Loader />
            </ListItem>
            <ListItem disableGutters >
                <Loader />
            </ListItem>
            <ListItem disableGutters >
                <Loader />
            </ListItem>
        </List>
    )
}



