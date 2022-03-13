import { AppRegistrationRounded, AspectRatioRounded, ColorLensRounded, ComputerRounded, InsertCommentRounded, InsertLinkRounded, LaptopRounded, NoteAddRounded } from '@mui/icons-material'
import { Avatar, Divider, IconButton, Slide, List, ListItem, ListItemIcon, Slider, Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import ProjectReviewContext from '../../context/ProjectReviewContext';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ColorPicker from './tools/ColorPicker';
import Resizer from './tools/Resizer';
import Suggestion from './tools/Suggestion';
import Info from './info/Info'



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function ReviewToolbar() {

  const {handleClickOpen, isDrawMode, setIsDrawMode} = useContext(ProjectReviewContext)


  const ResizerTool = () => (
    <>
      {
        !isDrawMode && 
        <Slide in={true} direction='left'>
          <ListItem   >
                <ListItemIcon>
                  
                    <Resizer />
                </ListItemIcon>
              
            </ListItem>
        </Slide>
      }
    </>
  )

  const DrawModeActivator = () =>{ 
    
    const activateDrawMode = () => {
      setIsDrawMode(!isDrawMode)
    }
    
    return (

      <ListItem   >
          <ListItemIcon>
            
            <Tooltip title="Capture And Draw" >

            <IconButton onClick={activateDrawMode} color={isDrawMode ? 'warning' : 'inherit'} >
              <AppRegistrationRounded />
            </IconButton>


            </Tooltip>
              
          </ListItemIcon>
        
        </ListItem>

  )}

  const ColorPickerTool = () => {

    return (

      <>
      {
        isDrawMode && 
        <Slide in={true} direction='left'>
         <ListItem   >
            <ListItemIcon>
              
                <ColorPicker />
            </ListItemIcon>
          
          </ListItem>
        </Slide>
      }
    </>
      
    )
  }


    return (
    

        <Drawer  variant="permanent" anchor='right' open={false}>
          <DrawerHeader sx={{display: "flex", justifyContent: 'center'}}>
            <Avatar src='/images/logo.png' />
          </DrawerHeader>
          <Divider />
          <List>
            
              

              
              <DrawModeActivator />


              <ColorPickerTool />


              
              <ResizerTool />

              
      
          </List>
          <Divider />
          <List>
            
              

              <ListItem   >
                <ListItemIcon>
                 <Suggestion />
                   
                </ListItemIcon>
              
              </ListItem>

              <ListItem   >
                <ListItemIcon>
                  
                    <Tooltip title="Add Note" >

                      <IconButton onClick={handleClickOpen} >
                      <NoteAddRounded />
                      </IconButton>

                  </Tooltip>
                </ListItemIcon>
              
              </ListItem>

             
          </List>

          <Divider />
          <List>
            
              

              <ListItem   >
                <ListItemIcon>
                  
                  <Tooltip title="View Repo" >

                  <IconButton size="small"  target="_blank" rel="noopener noreferrer" >
                      <img src="/images/repo.png" alt="repo" />
                  </IconButton>


                  </Tooltip>
                   
                </ListItemIcon>
              
              </ListItem>

              <ListItem   >
                <ListItemIcon>
                  
                    <Tooltip title="View Live" >

                      <IconButton >
                      <InsertLinkRounded />
                      </IconButton>

                  </Tooltip>
                </ListItemIcon>
              
              </ListItem>


              <ListItem   >
                <ListItemIcon>
                  
                <Info />
                </ListItemIcon>
              
              </ListItem>


            

            
              
      
          </List>
        </Drawer>
    )
}











  