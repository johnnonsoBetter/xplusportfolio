import { PlaylistAddCheckRounded } from '@mui/icons-material'
import { IconButton, ListItemIcon, Paper, Skeleton, Stack, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { FetchContext } from '../../../context/FetchContext'
import NotificationList from './NotificationList'

export default function NotificationPage() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)

    const [loading, setLoading] = useState(false)
    const [notifications, setNotifications] = useState([])
    const [page, setPage] = useState(0)
    const [totalMembers, setTotalMembers] = useState(0)
    const [changed, setChanged] = useState(false)
    const [disabled, setDisabled] = useState(false)



    const markAllAsRead = () => {

        setDisabled(true)


        authAxios.get('api/v1/mark_all_notifications').then(res => {

            setChanged(!changed)
            setDisabled(false)
        }).catch(err => {
            setSomethingWentWrong(true)
            setDisabled(false)
        })
    }



    const fetchMoreData = () => {
        
        authAxios.get('api/v1/notifications', {params: {page: page}}).then(res => {
            const {data} = res 
            setNotifications(notifications.concat(data))
            setPage(page + 1)
            setTotalMembers(notifications.length)
       }).catch(err => {
        
           console.log(err)
        
       })
    }


   

    useEffect(() => {
        setLoading(true)
        authAxios.get('api/v1/notifications', {params: {page: 1}}).then(res => {
             const {data} = res 
             setNotifications(data)
             setLoading(false)
             setPage(page + 1)
        }).catch(err => {
         
            setSomethingWentWrong(true)
         
        })


        return () => {
            setLoading(true)
            setSomethingWentWrong(false)
            setNotifications([])
        }

    }, [changed])

    return (
        <Box sx={{width: "100%", scrollbarColor: "red",  height: {sm: "calc(99vh - 60px)", xs: "calc(96vh - 85px)"}, scrollbarWidth: {display: "none"}, overflowY: "auto"}} >
            <Box p={1} display="flex" width="100%" justifyContent="space-between" alignItems="center"  >
                <Typography fontWeight={700}>Notifications</Typography>
                

                <Box display="flex" width="100%" justifyContent="flex-end" alignItems="center" >
                <Tooltip title="Mark all as read">   
                    <IconButton disabled={disabled} onClick={markAllAsRead}  >
                        <PlaylistAddCheckRounded/>
                    </IconButton>
                </Tooltip>

                
                </Box>
            </Box>
            

            {
                loading ?
                <NotificationPageLoader /> :
                <NotificationList fetchMoreData={fetchMoreData} notifications={notifications} />
            }
        </Box>
    )
}



const NotificationPageLoader = () => {

    const Load = () => (
        <Box my={1}  >
        <Paper sx={{p: 2}} elevation={0} >

       
        <Box  my={1} display="flex" width="100%" alignItems="center" justifyContent="flex-start" >
            
            <ListItemIcon >
                <Skeleton variant="circular" width={45} height={45} />
            </ListItemIcon>
            <Stack width="100%" >
                
                <Box  >
                    <Skeleton type="text" width="45%" />
                </Box>
                <Box  >
                    <Skeleton type="text" width="70%" />                
                </Box>

            </Stack>
        
        </Box>
        </Paper>
    </Box>
    )


    return (
        <>
            <Load /> 
            <Load />
            <Load />
            <Load />
            <Load />
            <Load />
        </>
    )
}