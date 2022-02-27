import { FolderRounded } from '@mui/icons-material'
import { Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { FetchContext } from '../../../context/FetchContext'
import AnticipationLike from './types/AnticipationLike'
import ProjectUpvote from './types/ProjectUpvote'

export default function NotificationList({notifications, handleClose}) {

    const {authAxios} = useContext(FetchContext)
    

    const markAsSeen = (id) => {


        authAxios.put(`api/v1/notifications/${id}`).then(res => {
            
        }).catch(err => {
            
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


    return (
        <>
            {
                type === "AnticipationLikeNotification" ?
                <AnticipationLike anticipation={object['anticipation']} user_slug={user_slug} /> : 
                type === "UpvoteNotification" ? 
                <ProjectUpvote project={object['project']} /> : null
            }
        </>
    )
}