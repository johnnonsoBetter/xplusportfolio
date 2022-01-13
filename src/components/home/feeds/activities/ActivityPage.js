import { PsychologyRounded } from '@mui/icons-material';
import { Avatar, Box, Divider, IconButton, InputBase, Paper, Skeleton, Stack } from '@mui/material'
import React from 'react'
import ActivityLoader from './ActivityLoader';
import AnticipationActivity from './anticipation_activity/AnticipationActivity';
import ProjectActivity from './project_activity/ProjectActivity';
import '../../../../App.css'


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

function MyMiniInfo() {

        return (
            <Box>
                <Paper elevation={0} sx={{minHeight: 10, width: "100%"}} >
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


export default function ActivityPage() {

    return (
        <Box className="activity-container" sx={{width: "100%",  height: "calc(99vh - 85px)", scrollbarWidth: {display: "none"}, overflowY: "auto"}}>
            <MyMiniInfo />

           
                <ProjectActivity />
                <AnticipationActivity />
                <ProjectActivity />
            
            
        </Box>
    )
}


