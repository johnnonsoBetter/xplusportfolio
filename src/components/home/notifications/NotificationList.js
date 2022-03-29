import { useTheme } from '@emotion/react'
import { FolderRounded, HowToVoteRounded, PsychologyRounded, ThumbUpRounded } from '@mui/icons-material'
import { Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material'
import { blue, orange, purple } from '@mui/material/colors'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { FetchContext } from '../../../context/FetchContext'
import HomeInfoContext from '../../../context/HomeInfoContext'
import NotificationInfo from './types/NotificationInfo'




function Notification({object, type,  user_slug}){

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
            <NotificationInfo  body={anticipation.body} action_owner={action_owner} total_performers={0} event_message='anticipates ' color={blue[400]} link={`/xpo/my_profile/${user_slug}/anticipations/`}/> : 
            type === "ProjectLikeNotification" ? 
            <NotificationInfo   body={project.title} action_owner={action_owner} total_performers={total_performers} link={`/xpo/projects/${project.slug}`} color={orange[400]} event_message='likes your project ' /> 
            : 
            type === "AnticipationSubscriptionNotification" ?
            <NotificationInfo  body={anticipation.body} action_owner={action_owner} total_performers={total_performers} event_message='subscribed to your anticipation' color={blue[400]} link={`/xpo/my_profile/${user_slug}/anticipations/`}/> : 
            type === "NewSuggestionNotification" ? 
            <NotificationInfo   body={project.title} action_owner={action_owner} total_performers={total_performers} link={`/xpo/projects/${project.slug}`} color={orange[400]} event_message={`contributed to your project`}  /> 
            :
            type === "NewProjectNotification" ?
            <NotificationInfo  body={project.title} action_owner={action_owner} total_performers={total_performers} link={`/xpo/projects/${project.slug}`} color={orange[400]} event_message='added a new project'  /> 
            : 
            type === "FulfillAnticipationNotification" ?
            <NotificationInfo  body={anticipation.body} action_owner={action_owner} total_performers={total_performers} event_message='fulfilled and completed' color={blue[400]} link={`/xpo/my_profile/${user_slug}/anticipations/`} />
            : null
             
            
        
        }
    </>
    )
}


export default function NotificationList({notifications, handleClose}) {

    const {authAxios} = useContext(FetchContext)
    const {setTotalNotifications} = useContext(HomeInfoContext)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    const markAsSeen = (id) => {


        authAxios.put(`api/v1/notifications/${id}`).then(res => {

            const {total_notifications} = res.data 
            setTotalNotifications(total_notifications)
            
        })

        handleClose()
    }
    


    return (
       

        <Virtuoso
            style={{minHeight: matches ? 'calc(99vh - 60px)' : '510px' }}
            totalCount={notifications.length}
            itemContent={index => {

                const {object, type, user_slug, id} = notifications[index]

                return (
                    <ListItem  disablePadding onClick={() => markAsSeen(id)}  >
                    <Notification user_slug={user_slug} handleClose={handleClose} key={type + index} object={object} type={type}  />


                </ListItem>
                )
            }}
        />
    )
}
