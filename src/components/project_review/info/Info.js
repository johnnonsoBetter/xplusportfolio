import * as React from 'react';
import {Avatar, Box, Chip, ListItemIcon, Stack, Typography} from '@mui/material';
import Menu from '@mui/material/Menu';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {  CloseOutlined, InfoOutlined, InsertCommentRounded, ScreenshotRounded} from '@mui/icons-material';
import {Link} from 'react-router-dom'




const ITEM_HEIGHT = 48;


export default function Project() {
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
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="Project Info">
          <IconButton
            onClick={handleClick}
            size="small"
           
          >
    
            <InfoOutlined />
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
            overflow: 'auto',
            borderRadius: "10px",
            maxWidth: 320,
            minHeight: ITEM_HEIGHT * 4.5,
            maxHeight: 60 * 4.5,
            
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
       <Box p={1} maxWidth={320} minWidth={300} >
           
          <Box my={1}>
              <Typography  fontWeight={700} >
                  Todo Application
              </Typography>

              <Typography  variant='body2'  >
              To address issues that do not require attention, run: npm audit fiTo address all issues (including breaking changes), run:
                npm audit fix --force

                    Run `npm audit` for details.
              </Typography>
          </Box>

          <Box my={1} >

                <Typography   fontWeight={700} >
                  Technology Utilized
                </Typography>


              <Chip label="React" color='info' sx={{mx: 1, my: 1}}/>
              <Chip label="React" color='info' sx={{mx: 1, my: 1}}/>
              <Chip label="React" color='info' sx={{mx: 1, my: 1}}/>
              <Chip label="React" color='info' sx={{mx: 1, my: 1}}/>
              <Chip label="React" color='info' sx={{mx: 1, my: 1}}/>
              <Chip label="React" color='info' sx={{mx: 1, my: 1}}/>
              <Chip label="React" color='info' sx={{mx: 1, my: 1}}/><Chip label="React" color='info' sx={{mx: 1, my: 1}}/>

              
          </Box>


          <Box  px={2} mt={2} display="flex" width="100%" alignItems="center" justifyContent="flex-start" >

            {

                
                <Link to={`/xpo/members/`}  style={{textDecoration: "none", justifyContent: "flex-start" , display: "flex", alignItems: "center"}} width="100%" alignItems="center" >
        
              
                    
                    <Avatar src='/images/pics.jpg' alt="John" > {"john"}</Avatar>
                
                <Stack  >
                    
            
                    <Box maxWidth={120}>
                        <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} color="ButtonText" variant="body2" noWrap={true}> Made by</Typography>

                    </Box><Box maxWidth={120}>
                        <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} variant="body2" color="ButtonShadow" noWrap={true}> John Nonso</Typography>

                    </Box>
                     
                </Stack>
                </Link>


            }
            
        </Box>
          

       </Box>
      </Menu>
    </React.Fragment>
  );
}
