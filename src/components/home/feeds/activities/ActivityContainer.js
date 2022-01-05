import { Avatar, Box, Paper, Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import {  PsychologyRounded,  } from '@mui/icons-material';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default function ActivityContainer() {

    const {path} = useRouteMatch()


    return (
        <Box width="100%">
            
            <Switch >
                <Route path={path + "/projects/:slug"} render={() => <p> project</p>} />
                <Route  path={path + "/members"} render={() => <p> members</p>} />
                <Route exact path={path}  render={() => <MyMiniInfo /> } />
                <Redirect to="/404"  />
            </Switch>
        </Box>
    )
}


function MyMiniInfo() {

const AnticipationCreator = ()=> {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: "flex", alignItems: 'center', width: "100%" }}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1, width: "100%"}}
        fullWidth
        
        placeholder="What are you working on? "
        inputProps={{ 'aria-label': 'What are you working on?' }}
      />
      
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <PsychologyRounded />
      </IconButton>
      
    </Paper>
  );
}







    return (
        <Box>
            <Paper elevation="none" sx={{minHeight: 10, width: "100%", borderRadius: "10px"}} >
                <Box display="flex" p={1} width="100%" alignItems="center" justifyContent="flex-start" >
                    <Box width="20%" height="100%" display="flex" justifyContent="center" >
                        <Avatar src="/images/pics.jpg" alt="pics" width={50} height={50} sx={{mr: 2}}/>
                    </Box>

                    <Stack width="70%" sx={{my: 2}}   >
                        <AnticipationCreator />
                        
                    </Stack>
                   
                   
                </Box>
               
            </Paper>
        </Box>
    )
}


function MyMiniInfoLoader() {

    return (
        <Box>
            <Paper elevation="none" sx={{minHeight: 300, borderRadius: "10px"}} >
                <Box display="flex" width="100%" alignItems="center" >
                    <Skeleton variant="circular" width={50} height={50} sx={{mr: 2}}/>
                    <Stack width="70%" >
                        <Skeleton variant="text" type="text" width="40%"  />
                        <Skeleton variant="text" type="text" width="66%"  />
                        
                        
                    </Stack>
                </Box>
            </Paper>
        </Box>
    )
}