import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import '../../../css/PinnedProject.css';
import Tooltip from '@mui/material/Tooltip';

import { Badge,Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { FetchContext } from '../../../context/FetchContext';
import { AuthContext } from '../../../context/AuthContext';
import { PushPinOutlined } from '@mui/icons-material';

import PinnedProjectLoader from './PinnedProjectLoader';


export default function PinnedProjectMenu() {
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


//   const logout = () => {

//     setLoading(true)
//     authAxios.delete('api/v1/auth/sign_out').then((res) => {

//         logUserOut()
//         history.push('/login')
      
//     }).catch(err => {
//         setLoading(false)
//     })

//   }


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="Pinned Projects">
            <IconButton onClick={handleClick} disableRipple sx={{mr: 1}}>
                        
                <Badge color="error" badgeContent={5} >
                <PushPinOutlined />
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
            scrollbarWidth: "none",
            msOverflowStyle: "none",
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
                <Typography>Projects To Review</Typography>
                <Tooltip title="Mark all as reviewed">   
                    <IconButton disableRipple>
                    <PushPinOutlined />
                    </IconButton>
                </Tooltip>
            </Box>
        </MenuItem>
        <PinnedProjectLoader   />
      </Menu>
    </React.Fragment>
  );
}

