


import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


import { AccessTimeOutlined, ArrowDownwardRounded, CheckOutlined, DisabledByDefaultRounded, InsertLinkRounded, TaskRounded } from '@mui/icons-material';
import {Avatar, Button, Chip, Divider, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

import {ArrowDown} from '@mui/icons-material'
import moment from 'moment';
import { AuthContext } from '../../../../../context/AuthContext';
import SubscribeButton from '../../../../shared/SubscriberButton';
import LikerButton from '../../../../shared/LikerButton';
import ActivityOwner from '../ActivityOwner';
import { purple } from '@mui/material/colors';

import ActivityType from '../ActivityType';





function AnticipationActivity({anticipation, showType, typePackge}) {

  const {owner_name, owner_slug, action_type} = typePackge 


  const {authState, isCurrentUser} = React.useContext(AuthContext)
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
    expired,
    defaulted,
    fulfilled,
    project_slug
  } = anticipation
  const {image, text_color} = cover
 
  const [totalSubScribers, setTotalSubScribers] = useState(total_subscribers)
  const [totalLikes, setTotalLikes] = useState(total_likes)
  const expires = moment().to(moment(due_date))





  return (
    <Box my={2} sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          
          
          bgcolor: 'background.default',
          borderTopLeftRadius: "10px",
          borderTopRightRadius:"10px"
          
        }}
      > 


          

          {
            showType && 

            <>

              {
                action_type === "anticipation.create" ?
                <ActivityType owner_name={owner_name} owner_slug={owner_slug} created_at={typePackge.created_at} text='anticipate 👨‍🔧' /> :
                action_type === "anticipation.like" ? 
                <ActivityType owner_name={owner_name} owner_slug={owner_slug} created_at={typePackge.created_at} text='likes this 👍' /> :
                action_type === "anticipation.subscribe" ? 
                <ActivityType owner_name={owner_name} owner_slug={owner_slug} created_at={typePackge.created_at} text='subscribed to this 🗒' /> :
                action_type === "anticipation.fulfill" ? 
                <ActivityType owner_name={owner_name} owner_slug={owner_slug} created_at={typePackge.created_at} text='fulfilled this ✨ ' /> :
                null
                
              }

            
            </>


            
          }
        
        
          <Paper 
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
          
        
            
          }}
          >


          
          <Box display="flex" width="100%" justifyContent="space-between" alignItems="center" >
            <ActivityOwner  created_at={created_at} user={user}  />

            {
              
                

                fulfilled ? 
                <Tooltip title="View live"  >
                    <IconButton LinkComponent={Link} to={`/xpo/projects/${project_slug}/`}   size="small">
                        <InsertLinkRounded />
                    </IconButton>
                </Tooltip>
                : 
                defaulted ?
                <Tooltip title="Defaulted" sx={{mr: 2}} >
                    <DisabledByDefaultRounded color='error' />
                </Tooltip>
                : 
                <Tooltip title="onprogress" sx={{mr: 2}} >
                  <TaskRounded color="disabled"  />
                </Tooltip>


            }
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
        
        <Typography color="MenuText" fontWeight={400} noWrap={true} textAlign="left" variant="body2" sx={{mx: 2, py: 2}}> {totalSubScribers} subscribers</Typography>
      
        
      </Paper>
      
        <Paper  elevation={0} sx={{display: "flex", justifyContent: "space-between"}}>
            
            <Box py={1} mx={2} display="flex" justifyContent="flex-start" alignItems="center"  >
            
            <LikerButton likeUrl={`/api/v1/anticipations/${a_slug}/likes`} liked={liked} a_slug={a_slug} totalLikes={totalLikes} setTotalLikes={setTotalLikes}  />
            

            

            {
              fulfilled ? 
             
              <Chip size='small' variant="outlined" avatar={<CheckOutlined  />} label="Fulfilled" /> 
              : 
              <Tooltip sx={{ml: 1}} title="expires" > 
                <Chip size='small' variant="outlined" avatar={<AccessTimeOutlined  />} label={ expired ? "expired" :  expires} />
              </Tooltip>
      
            }
            
            </Box>

            {
              !isCurrentUser(user.slug) &&
              <>
                {

                  !expired &&
                
                <Tooltip sx={{mr: 2}} title="Subscribe to anticipation" > 
                    
                    
                    <SubscribeButton  setTotalSubScribers={setTotalSubScribers} totalSubScribers={totalSubScribers} a_slug={a_slug}  is_subscribed={is_subscribed} TypeButton={Button} buttonStyle={
                      {
                        fullWidth: false,
                        variant: '',
                        size: 'small',
                        isIconButton: false
                      
                      }
                    } />
                </Tooltip> 

                  }
              
              
              </>
              

            }

            
          </Paper>
        </Paper>

      
      
    </Box>
  );
}

export default AnticipationActivity;



