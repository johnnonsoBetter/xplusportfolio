

import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { Avatar, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

import { LogoutOutlined, ModeEditOutlineOutlined, PersonOutlineRounded, VerifiedRounded } from '@mui/icons-material';
import { FetchContext } from '../../../../../context/FetchContext';
import { LoadingButton } from '@mui/lab';
import { AuthContext } from '../../../../../context/AuthContext';




export default function SuggestionMaker(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {authAxios} = useContext(FetchContext)
    const {id, done, setDone} = props
    const open = Boolean(anchorEl);
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    
    
    const history = useHistory()

    useEffect(() => {
        setSomethingWentWrong(false)
        
        return () => {
            setSomethingWentWrong(false)
        }
    }, [open])


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const markAsDone = () => {
        setLoading(true)
        authAxios.put(`/api/v1/suggestions/${id}/complete`).then(res => {

            setDone(true)
            handleClose()

        }).catch(err => {
            setSomethingWentWrong(true)
            setLoading(false)
        })
    }

    




  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
      

        <Tooltip title={done ? 'Done' : 'Mark as done'} >
            <IconButton  onClick={handleClick} size='small' disabled={done} >
                <VerifiedRounded fontSize='small' color={done ? 'success' : 'disabled'} />

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
            mb: 1.5,
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
        transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
          
        <MenuItem  disableRipple focusRipple={false}   >
       
            <Box width="100%"  sx={{textDecoration: "none"}} color="ButtonShadow" display="flex" justifyContent="center" alignItems="center">
                <Typography textAlign='center' > MARK AS DONE?  </Typography>
            </Box>

            
        </MenuItem>
        <MenuItem  disableRipple focusRipple={false}   >
       
            <Box width="100%"  sx={{textDecoration: "none"}} color="ButtonShadow" display="flex" justifyContent="space-between" alignItems="center">
                <LoadingButton onClick={markAsDone} loading={loading}  variant='contained'  size='small' color='success' >Apply</LoadingButton>
                <LoadingButton  variant='contained' size='small' color='warning' onClick={handleClose} >Cancel</LoadingButton>
            </Box>

       
        </MenuItem>

       
       
      </Menu>
    </React.Fragment>
  );
}

