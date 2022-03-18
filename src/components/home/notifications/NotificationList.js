import { FolderRounded, HowToVoteRounded, PsychologyRounded, ThumbUpRounded } from '@mui/icons-material'
import { Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { blue, orange, purple } from '@mui/material/colors'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { FetchContext } from '../../../context/FetchContext'
import HomeInfoContext from '../../../context/HomeInfoContext'
import NotificationInfo from './types/NotificationInfo'


export default function NotificationList({notifications, handleClose}) {

    const {authAxios} = useContext(FetchContext)
    const {setTotalNotifications} = useContext(HomeInfoContext)

    console.log(notifications)
    

    const markAsSeen = (id) => {


        authAxios.put(`api/v1/notifications/${id}`).then(res => {

            const {total_notifications} = res.data 
            setTotalNotifications(total_notifications)
            
        })

        handleClose()
    }
    


    return (
        <List  >
            {
                notifications.map((notification, index) => {

                    const {object, type, user_slug, id} = notification

                    return (
                        <ListItem  disablePadding onClick={() => markAsSeen(id)}  >
                            <Notification user_slug={user_slug} handleClose={handleClose} key={type + index} object={object} type={type}  />


                        </ListItem>
                    )
                })
            }
           
        </List>
    )
}


const Notification = ({object, type,  user_slug}) => {

    const {anticipation, project, action_owner, total_performers} = object


    return (
        <>
        {
            type === "AnticipationLikeNotification" ?
            <NotificationInfo  body={anticipation.body} action_owner={action_owner} total_performers={total_performers} event_message='likes your anticipation ' color={blue[400]} link={`/xpo/my_profile/${user_slug}/anticipations/`} />
            : 
            type === "UpvoteNotification" ? 
            <NotificationInfo  body={project.title} action_owner={action_owner} total_performers={total_performers} link={`/xpo/projects/${project.slug}`} color={orange[400]} event_message='upvoted your project '  /> 
            :
            type === "NewAnticipationNotification" ?
            <NotificationInfo  body={anticipation.body} link={`/xpo/my_profile/${user_slug}/anticipations/`} title="New Anticipation" color={blue[400]} icon={ <PsychologyRounded   fontSize='0.7rem' />}/> : 
            type === "ProjectLikeNotification" ? 
            <NotificationInfo  body={project.title} link={`/xpo/projects/${project.slug}`} title="Project Like" color={orange[400]} icon={ <ThumbUpRounded   fontSize='0.7rem' />}/> 
            : null
        }
    </>
    )
}