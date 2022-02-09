


import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


import { AccessTimeOutlined, TaskRounded } from '@mui/icons-material';
import {Button, Chip, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import AnticipationActivityOwner from './AnticipationActivityOwner';

import moment from 'moment';
import { AuthContext } from '../../../../../context/AuthContext';
import SubscribeButton from '../../../../shared/SubscriberButton';
import LikerButton from '../../../../shared/LikerButton';





function AnticipationActivity({anticipation}) {


  const {authState} = React.useContext(AuthContext)
  const {
    body, 
    cover, 
    due_date, 
    total_subscribers, 
    total_likes, 
    created_at, 
    user, 
    is_subscribed,
    a_slug,
    liked,
  } = anticipation
  const {image, text_color} = cover
  const {slug} = JSON.parse(authState.userInfo)
  const isCurrentUser = user.slug === slug 
  const [totalSubScribers, setTotalSubScribers] = useState(total_subscribers)
  const [totalLikes, setTotalLikes] = useState(total_likes)
  
  

 


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
        <Typography color="MenuText" fontWeight={400} noWrap={true} textAlign="left" variant="body2" sx={{mx: 2, py: 2}}> {totalSubScribers} subscribers</Typography>
        </Link>
        
      </Paper>
      
        <Paper  elevation={0} sx={{display: "flex", justifyContent: "space-between"}}>
            
            <Box py={1} mx={2} display="flex" justifyContent="flex-start" alignItems="center"  >
            
            <LikerButton liked={liked} a_slug={a_slug} totalLikes={totalLikes} setTotalLikes={setTotalLikes}  />
            

            <Tooltip sx={{ml: 1}} title="expires" > 
                <Chip size='small' variant="outlined" avatar={<AccessTimeOutlined  />} label={expires} />
            </Tooltip>
            
            </Box>

            {
              !isCurrentUser &&
              <Tooltip sx={{mr: 2}} title="Subscribe to anticipation" > 

                
                <SubscribeButton setTotalSubScribers={setTotalSubScribers} totalSubScribers={totalSubScribers} a_slug={a_slug}  is_subscribed={is_subscribed} TypeButton={Button} buttonStyle={
                  {
                    fullWidth: false,
                    variant: '',
                    size: 'small',
                    isIconButton: false
                  
                  }
                } />
            </Tooltip> 

            }

            
            
        </Paper>

      
      
    </Box>
  );
}

export default AnticipationActivity;



