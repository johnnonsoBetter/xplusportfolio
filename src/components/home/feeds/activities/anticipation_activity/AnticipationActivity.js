


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

import moment from 'moment';
import { AuthContext } from '../../../../../context/AuthContext';





function AnticipationActivity({anticipation}) {


  const {authState} = React.useContext(AuthContext)
  const {body, cover, due_date, total_subscribers, total_likes, created_at, user} = anticipation
  const {image, text_color} = cover
  const {slug} = JSON.parse(authState.userInfo)
  const isCurrentUser = user.slug === slug 
  
  

 


  const expires = moment().to(moment(due_date))





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
            <AnticipationActivityOwner isCurrentUser={isCurrentUser} created_at={created_at} user={user}  />

            
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
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            color: text_color
        }}

        
       
        > <Typography variant="h5" sx={{px: 1}} textAlign='center' > {body}</Typography> </Box>
      
      <Paper elevation={0} >
        <Link to="/xpo/kpo" style={{textDecoration: "none"}} >
        <Typography color="MenuText" fontWeight={400} noWrap={true} textAlign="left" variant="body2" sx={{mx: 2, py: 2}}> {total_subscribers} subscribers</Typography>
        </Link>
        
      </Paper>
      
        <Paper  elevation={0} sx={{display: "flex", justifyContent: "space-between"}}>
            
            <Box py={1} mx={2} display="flex" justifyContent="flex-start" alignItems="center"  >
            
            <Tooltip title="likes" sx={{mr: 2}} >
                <IconButton size="small" >
                    <Badge color="info" badgeContent={total_likes} >
                        <ThumbUpOutlined  fontSize='small' />
                    </Badge>
                </IconButton>
                
            </Tooltip> 
            

            <Tooltip sx={{ml: 1}} title="expires" > 
                <Chip size='small' variant="outlined" avatar={<AccessTimeOutlined  />} label={expires} />
            </Tooltip>
            
            </Box>

            {
              !isCurrentUser &&
              <Tooltip sx={{mr: 2}} title="Subscribe to anticipation" > 

                <Button  >Subscribe</Button>
            </Tooltip> 

            }

            
            
        </Paper>

      
      
    </Box>
  );
}

export default AnticipationActivity;