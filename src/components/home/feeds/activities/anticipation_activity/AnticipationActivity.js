


import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


import { AccessTimeOutlined, EmojiObjectsOutlined, HowToVoteOutlined, InsertLinkOutlined, ModeCommentOutlined, PublishedWithChangesOutlined, PushPinOutlined, TaskRounded, ThumbUpOutlined } from '@mui/icons-material';
import { Badge, Button, Chip, IconButton, Tooltip } from '@mui/material';
import ProjectActivityOwner from '../project_activity/ProjectActivityOwner';
import { Link } from 'react-router-dom';
import AnticipationActivityOwner from './AnticipationActivityOwner';
import { blue, deepOrange, orange, yellow } from '@mui/material/colors';







function AnticipationActivity() {

 
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
          <Box display="flex" width="100%" justifyContent="space-between" alignItems="center" >
            <AnticipationActivityOwner />

            
            <Tooltip title="onprogress" sx={{mr: 2}} >
            <TaskRounded color="disabled"  />
            </Tooltip>
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
           
            backgroundColor: orange[300]
        }}

        
       
        > <Typography variant="h5"  sx={{p: 2, px: 3, m: 3}}> Working on a todo list application help users to keep tabs of all their daily task that they plan to complete that is going to help users to keep tabs of all their daily task that they plan to complete </Typography> </Box>
      
      <Paper elevation={0} >
        <Link to="/xpo/kpo" style={{textDecoration: "none"}} >
        <Typography color="MenuText" fontWeight={400} noWrap={true} textAlign="left" variant="body2" sx={{mx: 2, py: 2}}> 206 subscribers</Typography>
        </Link>
        
      </Paper>
      
        <Paper  elevation={0} sx={{display: "flex", justifyContent: "space-between"}}>
            
            <Box py={1} mx={2} display="flex" justifyContent="flex-start"  >
            
            <Tooltip title="likes" sx={{mr: 2}} >
                <IconButton size="small" >
                    <Badge color="info" badgeContent={25} >
                        <ThumbUpOutlined />
                    </Badge>
                </IconButton>
                
            </Tooltip> 
            

            <Tooltip sx={{ml: 1}} title="expires" > 
                <Chip variant="outlined" avatar={<AccessTimeOutlined  />} label="2weeks" />
            </Tooltip>
            
            </Box>

            <Tooltip sx={{mr: 2}} title="Subscribe to anticipation" > 

                <Button  >Subscribe</Button>
            </Tooltip>
            
        </Paper>

      
      
    </Box>
  );
}

export default AnticipationActivity;