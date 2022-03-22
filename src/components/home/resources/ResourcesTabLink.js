import * as React from 'react';
import {Box} from '@mui/material';
import Menu from '@mui/material/Menu';

import IconButton from '@mui/material/IconButton';
import ResourcesLink from './ResourcesLink';




const ITEM_HEIGHT = 48;


export default function ResourcesTabLink() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{  display: {xs: 'none', sm: 'flex', lg: 'none'}, mx: 1, alignItems: 'center', textAlign: 'center' }}>
       
    
          <IconButton
            onClick={handleClick}
            onMouseEnter={handleClick}
            size="small"
           
          >
    
    <img component="img" srcSet="/images/google-assistant.png" width={24}  alt="bubble"   />

          </IconButton>
          
    
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            borderRadius: "10px",
            maxWidth: 320,
            minHeight: 200,
            minWidth: 240,
            
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 10,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <ResourcesLink closeMenu={handleClose} />
      </Menu>
    </React.Fragment>
  );
}
