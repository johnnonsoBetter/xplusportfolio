import { FolderRounded, HowToVoteRounded, PsychologyRounded, ThumbUpRounded } from '@mui/icons-material'
import { Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { orange, purple } from '@mui/material/colors'
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
            <NotificationInfo  body={object['anticipation'].body} action_owner={action_owner} total_performers={total_performers} event_message='likes your anticipation ' link={`/xpo/my_profile/${user_slug}/anticipations/`} title="Anticipation Like" backgroundColor={purple[400]} icon={<ThumbUpRounded   fontSize='0.7rem' />}/>
            : 
            type === "UpvoteNotification" ? 
            <NotificationInfo  body={object['project'].title} link={`/xpo/projects/${object['project'].slug}`} title="Project Upvote" backgroundColor={orange[400]} icon={ <HowToVoteRounded   fontSize='0.7rem' />}/> 
            :
            type === "NewAnticipationNotification" ?
            <NotificationInfo  body={object['anticipation'].body} link={`/xpo/my_profile/${user_slug}/anticipations/`} title="New Anticipation" backgroundColor={purple[400]} icon={ <PsychologyRounded   fontSize='0.7rem' />}/> : 
            type === "ProjectLikeNotification" ? 
            <NotificationInfo  body={object['project'].title} link={`/xpo/projects/${object['project'].slug}`} title="Project Like" backgroundColor={orange[400]} icon={ <ThumbUpRounded   fontSize='0.7rem' />}/> 
            : null
        }
    </>
    )
}