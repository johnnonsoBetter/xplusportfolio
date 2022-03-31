

import React, { useContext, useEffect, useState } from 'react'
import { Badge, Button, Menu, Typography, Avatar, Stack, MenuItem, Chip, ButtonBase} from '@mui/material';
import {FetchContext} from '../../../../../context/FetchContext'
import SubscribersLoader from '../../../../shared/SubscribersLoader';
import { Box } from '@mui/system';
import { AuthContext } from '../../../../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';
import { abbreviateName } from '../../../../../utils/tools';





export default function NoteInfo({note}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading] = useState(true)
  const open = Boolean(anchorEl);
  const {setSomethingWentWrong} = useContext(AuthContext)
  const {authAxios} = useContext(FetchContext)

  const {content, user} = note 
    const {image, name} = user 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  useEffect(() => {

    return () => {
      setSomethingWentWrong(false)
      
     
    }
  }, [open])




  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Box display='flex' position='relative' width="100%" onClick={handleClick} component={ButtonBase}  justifyContent='center' >
                   
            <Box width="100%" display='flex' justifyContent='center'>
            <img style={{maxWidth: '100%'}} src='/images/notes.png' />
            </Box>

        </Box>

      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'auto',
            width: '27ch',
            minHeight: 250,
            maxHeight: 250,
            borderRadius: "10px",
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0.2,
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
        transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        

           
      
          <Box width='100%' display='flex' my={2} justifyContent='center' alignItems='center'  >
              <img src='/images/review_loader.gif' width={45} height={45} />
              
          </Box> 
          <Box display='flex' justifyContent='flex-start' flexWrap='wrap'>
              <Typography px={1} variant='body2'> {content} </Typography> 
              <Typography  px={1} variant='body2' > by @{name}</Typography>
          </Box>

    


       


      </Menu>
    </React.Fragment>
  );
}





