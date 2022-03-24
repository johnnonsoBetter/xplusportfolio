import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';


import { Badge, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { FetchContext } from '../../../context/FetchContext';
import { AuthContext } from '../../../context/AuthContext';
import { NotificationsOutlined, PlaylistAddCheckOutlined, PlaylistAddCheckRounded, ViewAgendaOutlined, ViewAgendaRounded } from '@mui/icons-material';
import NotificationLoader from './NofiticationLoader';
import NotificationList from './NotificationList';
import Empty from '../../shared/Empty';
import HomeInfoContext from '../../../context/HomeInfoContext';


export default function NotificationMenu({total_notifications}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading] = useState(true)
  const open = Boolean(anchorEl);
  const history = useHistory()
  const [notifications, setNotifications] = useState([])
  const {setSomethingWentWrong} = useContext(AuthContext)
  const {authAxios} = useContext(FetchContext)
  const [changed, setChanged] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const {totalNotifications, setTotalNotifications} = useContext(HomeInfoContext)
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


 


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
    if (open) {

      authAxios.get('api/v1/notifications', {params: {status: 'unread'}}).then(res => {

        const {total_notifications, notifications} = res.data['notification_info']
        setNotifications(notifications)
        setTotalNotifications(total_notifications)
        setLoading(false)
       
    }).catch(err => {
       setSomethingWentWrong(true)
       
    })


    }


    return () => {
      setSomethingWentWrong(false)
      
      setNotifications([])
      
     
    }
  }, [open, changed])




  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="Notifications">
            <IconButton  onClick={handleClick} disableRipple sx={{mr: 1}}>
                        
                <Badge color="error" badgeContent={totalNotifications} >
                    <NotificationsOutlined />
                </Badge>
            </IconButton>
            
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            
            width: '30ch',
            minHeight: 510,
            maxHeight: 510,
            borderRadius: "10px",
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0.4,
            '& .MuiAvatar-root': {
              width: 55,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 0,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
          
        <MenuItem  disableRipple focusRipple={false} >
            <Box display="flex" width="100%" justifyContent="space-between" alignItems="center"  >
                <Typography>Notifications</Typography>
                

                <Box display="flex" width="100%" justifyContent="flex-end" alignItems="center" >
                <Tooltip title="Mark all as read">   
                    <IconButton disabled={disabled} onClick={markAllAsRead}  >
                        <PlaylistAddCheckRounded/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="View All">   
                    <IconButton size='small' onClick={() => {
                      handleClose()
                      history.push('/xpo/notifications')
                    }} >
                        <ViewAgendaOutlined  fontSize='0.9rem' />
                    </IconButton>
                </Tooltip>

                </Box>
            </Box>
        </MenuItem>
   
        {
          loading ?
          <NotificationLoader /> :
          <Box px={2} >
            
            <> 
                {
                    notifications.length === 0 ?
                    <Empty emptyDetail="No Unread Notifications!" sx={{minHeight: "300px", display: "flex", alignItems: 'center', justifyContent: "center"}}/> : 
                    
                    <NotificationList notifications={notifications} handleClose={handleClose} />
                }
            </>
          </Box>

          
        }


      </Menu>
    </React.Fragment>
  );
}

