

import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { Avatar, Button, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FetchContext } from '../../context/FetchContext';
import { LogoutOutlined, ModeEditOutlineOutlined, PersonOutlineRounded } from '@mui/icons-material';
import { stringAvatar } from '../../utils/stringUtil';
import SubscribersLoader from '../shared/SubscribersLoader';




export default function MyProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {authAxios} = useContext(FetchContext)
  const [loading, setLoading] = useState(false)
  const open = Boolean(anchorEl);
  const {logUserOut, authState} = React.useContext(AuthContext)
  const {slug} = JSON.parse(authState.userInfo)
  const {userInfo} = authState
  const {name, image} = JSON.parse(authState.userInfo)
 
  const history = useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const logout = () => {

    setLoading(true)
    authAxios.delete('api/v1/auth/sign_out').then((res) => {

        logUserOut()
        history.push('/')
      
    }).catch(err => {
        setLoading(false)
    })

  }


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="My Profile">
           
            <IconButton onClick={handleClick} disableRipple>
               
                <Avatar  {...stringAvatar(name, 32, 32, "0.6em")} src={image} alt="pics"  />
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

            scrollbarWidth: "none",
            msOverflowStyle: "none",
            width: "200px",
            borderRadius: "7px",
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 40,
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
          
        <MenuItem  disableRipple focusRipple={false} onClick={handleClose}  >
       
            <Box width="100%"  component={Link} to={`/xpo/my_profile/${slug}`} sx={{textDecoration: "none"}} color="ButtonShadow" display="flex" justifyContent="flex-start" alignItems="center">
            <PersonOutlineRounded  />
                <Typography sx={{ml: 1}} color="ButtonText"> My Profile </Typography>
                
            </Box>
        </MenuItem>

        <MenuItem disableRipple focusRipple={false} onClick={handleClose} >
       
            <Box component={Link}  to="/xpo/edit_profile"    sx={{textDecoration: "none"}}  color="ButtonShadow" width="100%" display="flex" justifyContent="flex-start" alignItems="center">
               
                <ModeEditOutlineOutlined />
                <Typography sx={{ml: 1}} color="ButtonText"> Edit Profile </Typography>
                
            </Box>
        </MenuItem>

        <MenuItem disableTouchRipple disableRipple focusRipple={false} >
       
            

            {
              loading ? 
              <Box  width="100%" color="ButtonText" display="flex" justifyContent="center" alignItems="center">
                
                <SubscribersLoader />
                <Typography > Logging out...</Typography>

              </Box> :
              <Box onClick={logout} disableTouchRipple disableElevation component={Button} size='small' width="100%"  display="flex" justifyContent="center" alignItems="center">
                  <LogoutOutlined  />
                  <Typography sx={{ml: 1}}> Logout </Typography>
                  
              </Box>

            }
           
        </MenuItem>
       
      </Menu>
    </React.Fragment>
  );
}

