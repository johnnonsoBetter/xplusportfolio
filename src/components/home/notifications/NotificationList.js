import { FolderRounded } from '@mui/icons-material'
import { Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AnticipationLike from './types/AnticipationLike'
import ProjectUpvote from './types/ProjectUpvote'

export default function NotificationList({notifications, handleClose}) {
    


    return (
        <List  >
            {
                notifications.map((notification, index) => {

                    const {object, type} = notification

                    return (
                        <ListItem  disablePadding onClick={handleClose}  >
                            <Notification handleClose={handleClose} key={type + index} object={object} type={type}  />


                        </ListItem>
                    )
                })
            }
           
        </List>
    )
}


const Notification = ({object, type, handleClose}) => {

    return (
        <>
            {
                type === "AnticipationLikeNotification" ?
                <AnticipationLike anticipation={object['anticipation']} /> : 
                type === "UpvoteNotification" ? 
                <ProjectUpvote project={object['project']} /> : null
            }
        </>
    )
}