import React, { useContext, useEffect, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MyAppbar from './MyAppbar';
import { Route, useLocation } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import Feed from './feeds/Feed';
import { DrawerContextProvider } from '../../context/DrawerContext';
import DrawerMenu from './DrawerMenu';
import { useHistory } from 'react-router-dom';
import BottomNav from './BottomNav';
import { Alert, Snackbar } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import { ActionCableProvider } from '@thrash-industries/react-actioncable-provider';
import { HomeInfoContextProvider } from '../../context/HomeInfoContext';
import { FetchContext } from '../../context/FetchContext';



export default function Home(props) {

  const { path} = useRouteMatch()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerComponent, setDrawerComponent] = useState(null)
  const [fullScreen, setFullScreen] = useState(false)
  const history = useHistory()
  const [openSnack, setOpenSnack] = useState(false)
  const [snackInfo, setSnackInfo] = useState({
    message: '',
    severity: ''
  })
  const [totalNotifications, setTotalNotifications] = useState(0)
  const {somethingWentWrong} = useContext(AuthContext)
  const [newPostAvailable, setNewPostAvailable] = useState(false)
  const [showFriendsActivities, setShowFriendsActivites] = useState(false)
  const [resourcesLinksIsOpen, setResourcesLinksIsOpen] = useState(false)
  const {authAxios} = useContext(FetchContext)
  const [titleBarUserName, setTitleBarUserName] = useState(null)
  const [appIsOffline, setAppIsOffline] = useState(false)


  const [image, setImage] = useState(null)

  const notifyForOffline = () => {

    const newSnackInfo = Object.assign(snackInfo, {})
    newSnackInfo.message = "You are currently offline"
    newSnackInfo.severity = 'warning'
    setSnackInfo(newSnackInfo)
    setOpenSnack(true)
  }

  const notifyForOnline = () => {


    const newSnackInfo = Object.assign(snackInfo, {})
    newSnackInfo.message = "You are currently online"
    newSnackInfo.severity = 'success'
    
    setSnackInfo(newSnackInfo)
    setOpenSnack(true)
    setAppIsOffline(!appIsOffline)
    // window.location.reload()
  }



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };


  useEffect(() => {

    document.title = totalNotifications >= 1 ? `Feeds (${totalNotifications})`: "Feeds" 


  }, [totalNotifications, appIsOffline])

  React.useEffect(() => {
    
    window.addEventListener('offline', notifyForOffline);
    window.addEventListener('online', notifyForOnline);

    // cleanup this component
    return () => {
      window.removeEventListener('offline', notifyForOffline);
      window.removeEventListener('offline', notifyForOnline);
    };
  }, []);


  useEffect(() => {
   
    if(somethingWentWrong){
        const newSnackInfo = Object.assign(snackInfo, {})

        newSnackInfo.message = "Something went wrong"
        newSnackInfo.severity = 'error'
        setSnackInfo(newSnackInfo)
         
        setOpenSnack(true)
    }
  }, [somethingWentWrong])


  useEffect(() => {
    
    authAxios.get('api/v1/notifications', {params: {status: 'unread'}}).then(res => {

      const {total_notifications, notifications} = res.data['notification_info']
      setTotalNotifications(total_notifications)
     
  })

  return () => {
    setTotalNotifications(0)
    
   
  }
}, [appIsOffline])

  return (
    <React.Fragment>
      <ActionCableProvider url={ process.env.NODE_ENV === 'development'? 'ws://localhost:3001/cable' : 'wss://xplusportfoliob.herokuapp.com/cable'} >

        <CssBaseline />
        <HomeInfoContextProvider
          value={{
            totalNotifications,
            newPostAvailable, 
            showFriendsActivities,
            resourcesLinksIsOpen,
            titleBarUserName,
            appIsOffline,
            setAppIsOffline,
            setTitleBarUserName: (name) => setTitleBarUserName(name),
            setResourcesLinksIsOpen,
            setShowFriendsActivites: (show) => setShowFriendsActivites(show),
            setNewPostAvailable: (avaliable) => setNewPostAvailable(avaliable),
            setTotalNotifications: (total) => setTotalNotifications(total),
            
          }}
        >
        
        <DrawerContextProvider 
           value={{
             drawerOpen,
             drawerComponent,
             fullScreen,
             image, 
             setImage,
             setFullScreen: (fullScreen) => setFullScreen(fullScreen),
             setDrawerComponent: (component) => setDrawerComponent(component),
             setDrawerOpen: (drawerOpen) => setDrawerOpen(drawerOpen),
             closeDrawer: () => history.goBack()
           }}
         > 
               <Snackbar sx={{zIndex: 500000}} open={openSnack} anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={2000} onClose={handleClose}>
                 <Alert onClose={handleClose} severity={snackInfo.severity}  sx={{ width: '100%' }}>
                 {snackInfo.message}
                 
               </Alert>
             </Snackbar>
             <DrawerMenu />
             <MyAppbar />
             <Toolbar />
             <Container sx={{mb: 1, pr: {xs: "0px", sm: "0px"}, pl: {xs: "0px", sm: "0px"}}}>
             <Box sx={{ my: {xs: 0, sm: 0, md: 2} }}>
               <Switch >
 
                 
                 <Route  path={path} render={() =>  <Feed /> } />
                 
               </Switch>
             </Box>
             
           </Container>
           <BottomNav />
         </DrawerContextProvider>  

         </HomeInfoContextProvider>


      </ActionCableProvider>
      
       
    </React.Fragment>
  );
}
