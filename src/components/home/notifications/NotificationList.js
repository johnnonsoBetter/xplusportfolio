import { useTheme } from '@emotion/react'
import { FolderRounded, HowToVoteRounded, PsychologyRounded, ThumbUpRounded } from '@mui/icons-material'
import { Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material'
import { blue, orange, purple } from '@mui/material/colors'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { FetchContext } from '../../../context/FetchContext'
import HomeInfoContext from '../../../context/HomeInfoContext'
import Notification from './Notification'
import NotificationInfo from './types/NotificationInfo'





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
