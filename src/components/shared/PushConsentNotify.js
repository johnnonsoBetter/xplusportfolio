
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { NotificationsRounded } from '@mui/icons-material';
import { Chip } from '@mui/material';
import { blue } from '@mui/material/colors';
import usePushNotifications from '../shared/usePushNotifications';



export default function PushConsentNotify({setOpenNotify}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {
    onClickAskUserPermission,
    subCompleted,
    userConsent
  } = usePushNotifications();


  React.useEffect(() => {

    if(subCompleted) {
      setOpenNotify(false)
      handleClose()
    } 
    
  }, [subCompleted])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

        <Tooltip title="Push Notification">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <img src='/images/push.gif' />
          </IconButton>
        </Tooltip>
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
            borderRadius: "8px",
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
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
              right: 14,
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
      
        <Box px={2} maxWidth={230} >
            <Box display='flex' alignItems='center'  >

            <Typography sx={{mr: 1}} variant='h5' fontWeight={700} >
                Hey There! 
            </Typography>


            <Typography sx={{mr: 1, display: 'flex', alignItems: 'center'}}  >
            <img src='/images/waving-hand.png' width={20} height={20} />
            </Typography>

            

            </Box>


            <Box my={1} >

            <Typography variant='body2' textAlign='center' >
                Push Notification is a core-feature of this application, to enjoy this feature please {userConsent === 'denied' ? 'allow push notification' : 'hit the subscibe button below. '} 
            </Typography>

            </Box>

            <Box display='flex' justifyContent='center'>
                {
                  userConsent === 'default' &&
                  <Chip color='info' onClick={onClickAskUserPermission} clickable label="Subscribe" avatar={<Avatar sx={{bgcolor: blue[600], color: "white"}} >  <NotificationsRounded  sx={{color: "white"}}/> </Avatar>} />

                }
            </Box>
           

        </Box>
      </Menu>
    </React.Fragment>
  );
}



