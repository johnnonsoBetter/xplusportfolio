import * as React from 'react';
import {BottomNavigationAction, Box} from '@mui/material';
import Menu from '@mui/material/Menu';
import ResourcesLink from './ResourcesLink';

export default function ResourcesMobileLink() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
       
     
        
        <BottomNavigationAction disableRipple  onClick={handleClick}  label="Resources" icon={<img component="img" srcSet="/images/google-assistant.png" alt="bubble" width={24}  />} />
      
        
    
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
            mb: 1,
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
              bottom: 0,
              right: 33,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <ResourcesLink closeMenu={handleClose} />
      </Menu>
    </Box>
  );
}
