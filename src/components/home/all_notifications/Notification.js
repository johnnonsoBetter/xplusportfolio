import { CheckBoxRounded, HowToVoteRounded, PsychologyRounded, ThumbUpRounded, VerifiedRounded } from '@mui/icons-material'
import { Box, Grid, IconButton, Paper, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material'
import { useContext, useState } from 'react'
import {FetchContext} from '../../../context/FetchContext'
import { AuthContext } from '../../../context/AuthContext'
import HomeInfoContext from '../../../context/HomeInfoContext'
import NotificationInfo from './NotificationInfo'
import { blue, orange, purple } from '@mui/material/colors'


function Notification({object, type, user_slug, seen, id}){

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [read, setRead] = useState(seen)
    const {setTotalNotifications} = useContext(HomeInfoContext)
    const {anticipation, project, action_owner, total_performers} = object

    

    const markAsSeen = () => {


        authAxios.put(`api/v1/notifications/${id}`).then(res => {
            console.log(res.data)
            const {total_notifications} = res.data
            setTotalNotifications(total_notifications)
            setRead(true)
        }).catch(err => {
            setSomethingWentWrong(true)
        })
    }

    return (
       
    <Box   >
    <Paper sx={{p: 1}} elevation={0} >

   
    <Box display='flex' justifyContent='space-between' alignItems='center' >
            
             <Stack  >
             
     
            
             <Box maxWidth={120}>
                 <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} variant="body2" color="ButtonShadow" noWrap={true}> 2days ago</Typography>
                
             </Box>
             
              
         </Stack>

         <Box display='flex'  alignItems='center' >
            
             
            {
                read && <Typography variant='body2' > seen</Typography>
            }
             <Tooltip title={read ? "Seen" : "Mark as seen"}   >
                 <IconButton onClick={markAsSeen} disabled={read} >
                    <CheckBoxRounded fontSize='small' color={ read ? 'success' : 'disabled'} />
                 </IconButton>
                
             </Tooltip>


         </Box>
    </Box>

    <Box   >

        <>
        {
            type === "AnticipationLikeNotification" ?
            <NotificationInfo markAsSeen={markAsSeen}  body={anticipation.body} action_owner={action_owner} total_performers={total_performers} event_message='likes your anticipation ' color={blue[400]} link={`/xpo/my_profile/${user_slug}/anticipations/`} />
            : 
            type === "UpvoteNotification" ? 
            <NotificationInfo markAsSeen={markAsSeen} body={project.title} action_owner={action_owner} total_performers={total_performers} link={`/xpo/projects/${project.slug}`} color={orange[400]} event_message='upvoted your project '  /> 
            :
            type === "NewAnticipationNotification" ?
            <NotificationInfo  markAsSeen={markAsSeen} body={anticipation.body} action_owner={action_owner} total_performers={0} event_message='anticipates ' color={blue[400]} link={`/xpo/my_profile/${user_slug}/anticipations/`}/> : 
            type === "ProjectLikeNotification" ? 
            <NotificationInfo markAsSeen={markAsSeen}  body={project.title} action_owner={action_owner} total_performers={total_performers} link={`/xpo/projects/${project.slug}`} color={orange[400]} event_message='likes your project ' /> 
            : 
            type === "AnticipationSubscriptionNotification" ?
            <NotificationInfo markAsSeen={markAsSeen} body={anticipation.body} action_owner={action_owner} total_performers={total_performers} event_message='subscribed to your anticipation' color={blue[400]} link={`/xpo/my_profile/${user_slug}/anticipations/`}/> : 
            type === "NewSuggestionNotification" ? 
            <NotificationInfo markAsSeen={markAsSeen}  body={project.title} action_owner={action_owner} total_performers={total_performers} link={`/xpo/projects/${project.slug}`} color={orange[400]} event_message={`contributed to your project`}  /> 
            : 
            type === "NewProjectNotification" ?
            <NotificationInfo  body={project.title} action_owner={action_owner} total_performers={total_performers} link={`/xpo/projects/${project.slug}`} color={orange[400]} event_message='added a new project'  /> 
            : 
            type === "FulfillAnticipationNotification" ?
            <NotificationInfo  body={anticipation.body} action_owner={action_owner} total_performers={total_performers} event_message='fulfilled and completed' color={blue[400]} link={`/xpo/my_profile/${user_slug}/anticipations/`} />
            : null
             
             
        
        }
    </>

       
    </Box>
    </Paper>
</Box>
    )
}


export default Notification