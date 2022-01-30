import React, { useContext, useState } from 'react';
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
  const [loading, setLoading] = useState(false)
  const open = Boolean(anchorEl);
 // const {logUserOut} = React.useContext(AuthContext)
  const history = useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const {somethingWentWrong} = useContext(AuthContext)
  const {authAxios} = useContext(FetchContext)

  authAxios.get('api/v1/notifications').then(res => {
      console.log(res)
  }).catch(err => {
      console.log(err)
  })




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
            
            width: '33ch',
            minHeight: 510,
            maxHeight: 510,
            borderRadius: "10px",
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 45,
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
        <NotificationList />


      </Menu>
    </React.Fragment>
  );
}

