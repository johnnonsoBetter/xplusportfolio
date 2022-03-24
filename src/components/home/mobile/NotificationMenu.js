import { ArrowBackIosNewRounded, ArrowBackIosRounded, BackupRounded, PlaylistAddCheckRounded, ViewAgendaOutlined } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Box, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
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
  const [disabled, setDisabled] = useState(notifications.length === 0)





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
        if (notifications.length > 0)
            setDisabled(false)
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
                
                <Box sx={{color: "black", textDecoration: 'none'}} display='flex' component={Link} alignItems='center' >
                
                <ArrowBackIosRounded onClick={()=> history.goBack()} fontSize='small' />
                <Typography onClick={()=> history.goBack()} sx={{ml: 1}} fontWeight={700}>Notifications</Typography>

                </Box>
                

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


            <Box 
                maxHeight="calc(99vh - 20px)"
                overflow='auto'           
            >
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
            
            </Box>


        
    
          
       
        </Box>
    )
}