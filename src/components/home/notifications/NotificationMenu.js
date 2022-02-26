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
import { NotificationsOutlined, PlaylistAddCheckOutlined } from '@mui/icons-material';
import NotificationLoader from './NofiticationLoader';
import NotificationList from './NotificationList';


export default function NotificationMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
//   const {authAxios} = useContext(FetchContext)
  const [loading, setLoading] = useState(true)
  const open = Boolean(anchorEl);
 // const {logUserOut} = React.useContext(AuthContext)
  const history = useHistory()
  const [notifications, setNotifications] = useState([])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const {setSomethingWentWrong} = useContext(AuthContext)
  const {authAxios} = useContext(FetchContext)



  useEffect(() => {

    setLoading(true)
    if (open) {
      console.log(loading, "this is the loading")

      authAxios.get('api/v1/notifications', {params: {status: 'unread'}}).then(res => {

      
        setNotifications(res.data)
        setLoading(false)
       
    }).catch(err => {
       setSomethingWentWrong(true)
    })


    }


    return () => {
      setSomethingWentWrong(false)
      
      setNotifications([])
      
     
    }
  }, [open])




  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="Notifications">
            <IconButton onClick={handleClick} disableRipple sx={{mr: 1}}>
                        
                <Badge color="error" badgeContent={5} >
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
            
            width: '32ch',
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
                <Tooltip title="Mark all as read">   
                    <IconButton disableRipple>
                        <PlaylistAddCheckOutlined />
                    </IconButton>
                </Tooltip>
            </Box>
        </MenuItem>
   
        {
          loading ?
          <NotificationLoader /> :
          <NotificationList notifications={notifications} handleClose={handleClose} />
        }


      </Menu>
    </React.Fragment>
  );
}

