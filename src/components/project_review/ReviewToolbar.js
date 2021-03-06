import { AppRegistrationRounded, InsertLinkRounded} from '@mui/icons-material'
import { Avatar, Divider, IconButton, Slide, List, ListItem, ListItemIcon, Tooltip } from '@mui/material'
import React, { useContext } from 'react'
import ProjectReviewContext from '../../context/ProjectReviewContext';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ColorPicker from './tools/ColorPicker';
import Resizer from './tools/Resizer';
import Suggestion from './tools/Suggestion';
import Info from './info/Info'
import Note from './note/Note';



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

  const {isDrawMode, setIsDrawMode, project} = useContext(ProjectReviewContext)

  
  const {
    github_link,
    live_link,
  } = project



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
                  <Note />
                </ListItemIcon>
              
              </ListItem>

             
          </List>

          <Divider />
          <List>
            
              

              <ListItem   >
                <ListItemIcon>
                  
                  <Tooltip title="View Repo" >

                  

                  <a rel="noopener noreferrer" href={github_link} target="_blank">

                    
                    <IconButton size="small"  target="_blank" rel="noopener noreferrer" >
                      <img src="/images/repo.png" alt="repo" />
                  </IconButton>

                  </a>


                  </Tooltip>
                   
                </ListItemIcon>
              
              </ListItem>

              <ListItem   >
                <ListItemIcon>
                  
                    <Tooltip title="View Live" >

                    <a rel="noopener noreferrer" href={live_link} target="_blank">

                    
                  
                      <IconButton >
                      <InsertLinkRounded />
                      </IconButton>

                    </a>

                      

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











  