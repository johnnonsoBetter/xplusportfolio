import { ArrowBackIosNewRounded, BackupRounded, PlaylistAddCheckRounded, ViewAgendaOutlined } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Box, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../../../context/AuthContext'
import { FetchContext } from '../../../context/FetchContext'
import NotificationLoader from '../notifications/NofiticationLoader'
import NotificationList from '../notifications/NotificationList'
import Empty from '../../shared/Empty'
import HomeInfoContext from '../../../context/HomeInfoContext'

export default function NotificationMenu() {


    const history = useHistory()
  const [notifications, setNotifications] = useState([])
  const {setTotalNotifications} = useContext(HomeInfoContext)
  
  const [loading, setLoading] = useState(true)
  const {setSomethingWentWrong} = useContext(AuthContext)
  const {authAxios} = useContext(FetchContext)
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



  useEffect(() => {
      setLoading(true)
      authAxios.get('api/v1/notifications', {params: {status: 'unread'}}).then(res => {

        const {total_notifications, notifications} = res.data['notification_info']
        setNotifications(notifications)
        setTotalNotifications(total_notifications)
        setLoading(false)
       
    }).catch(err => {
       setSomethingWentWrong(true)
       
    })




    return () => {
      setSomethingWentWrong(false)
      
      setNotifications([])
      setLoading(true)
      
     
    }
  }, [changed])


    return (
        <Box px={2}>

            <Box p={1} display="flex" width="100%" justifyContent="space-between" alignItems="center"  >
                <Typography fontWeight={700}>Notifications</Typography>
                

                <Box display="flex" width="100%" justifyContent="flex-end" alignItems="center" >
                <Tooltip title="Mark all as read">   
                    <IconButton disabled={disabled} onClick={markAllAsRead}  >
                        <PlaylistAddCheckRounded/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="View All">   
                    <IconButton size='small' onClick={() => history.push('/xpo/notifications')} >
                        <ViewAgendaOutlined  fontSize='0.9rem' />
                    </IconButton>
                </Tooltip>

                </Box>
            </Box>


            <>
            {
            loading ?
            <NotificationLoader /> :
            <> 
                {
                    notifications.length === 0 ?
                    <Empty emptyDetail="No Unread Notifications!" sx={{minHeight: "300px", display: "flex", alignItems: 'center', justifyContent: "center"}}/> : 
                    
                    <NotificationList notifications={notifications}  />
                }
            </>
            
            }
            
            </>


            <Paper  sx={{ position: 'fixed', zIndex: 500, bottom: 0, left: 0, right: 0, display: {xs: "block", sm: "none"}}} elevation={0}>
                <BottomNavigation
                showLabels
            
                sx={{
                    textDecoration: "none"
                }}
                value={0}
              
                >

                <BottomNavigationAction disableRipple onClick={() => history.goBack()}  label="Go Back" icon={<ArrowBackIosNewRounded />} />
                   
                </BottomNavigation>
            </Paper>
    
          
       
        </Box>
    )
}