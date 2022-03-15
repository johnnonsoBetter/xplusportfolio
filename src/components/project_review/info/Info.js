import * as React from 'react';
import {Avatar, Box, Chip, ListItemIcon, Stack, Typography} from '@mui/material';
import Menu from '@mui/material/Menu';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {  CloseOutlined, InfoOutlined, InsertCommentRounded, ScreenshotRounded} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import ProjectReviewContext from '../../../context/ProjectReviewContext';




const ITEM_HEIGHT = 48;


export default function Project() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {project} = React.useContext(ProjectReviewContext)

  const {user, description, title} = project
  const {image, name, slug} = user

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
            overflow: 'visible',
            borderRadius: "10px",
            maxWidth: 320,
            minHeight: 200,
            
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
       <Box p={1} py={2} maxWidth={320} minWidth={300} >
           
          <Box my={1}>
              <Typography  fontWeight={800} >
                  {title}
              </Typography>

              <Typography  sx={{my: 2}} variant='body2'  >
              {description}
              </Typography>
          </Box>

         


          <Box   px={1} mt={2} display="flex" width="100%" alignItems="center" justifyContent="flex-start" >

            {

                
                <Link to={`/xpo/members/${slug}`}  style={{textDecoration: "none", justifyContent: "flex-start" , display: "flex", alignItems: "center"}} width="100%" alignItems="center" >
        
              
                    
                    <Avatar src={image}  alt={name} > {name[0]} </Avatar>

                
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
