import React, { useContext, useEffect, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MyAppbar from './MyAppbar';
import { Route, useLocation } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import Feed from './feeds/Feed';
import { DrawerContextProvider } from '../../context/DrawerContext';
import DrawerMenu from './DrawerMenu';
import { useHistory } from 'react-router-dom';
import BottomNav from './BottomNav';
import { Alert, Snackbar } from '@mui/material';
import { HomeInfoContextProvider } from '../../context/HomeInfoContext';
import { AuthContext } from '../../context/AuthContext';


export default function Home(props) {

  const { path} = useRouteMatch()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerComponent, setDrawerComponent] = useState(null)
  const [fullScreen, setFullScreen] = useState(false)
  const history = useHistory()
  const location = useLocation()
  const [openSnack, setOpenSnack] = useState(false)
  const [snackInfo, setSnackInfo] = useState({
    message: '',
    severity: ''
  })
  const {somethingWentWrong} = useContext(AuthContext)


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };


  useEffect(() => {

    if(somethingWentWrong){
        const newSnackInfo = Object.assign(snackInfo, {})

        newSnackInfo.message = "Something went wrong"
        setSnackInfo(newSnackInfo)
        setOpenSnack(true)
    }
  }, [somethingWentWrong])

  return (
    <React.Fragment>
      <CssBaseline />
        
       <DrawerContextProvider 
          value={{
            drawerOpen,
            drawerComponent,
            fullScreen,
            setFullScreen: (fullScreen) => setFullScreen(fullScreen),
            setDrawerComponent: (component) => setDrawerComponent(component),
            setDrawerOpen: (drawerOpen) => setDrawerOpen(drawerOpen),
            closeDrawer: () => history.goBack()
          }}
        > 
              <Snackbar open={openSnack} anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='error'  sx={{ width: '100%' }}>
                {snackInfo.message}
                
              </Alert>
            </Snackbar>
            <DrawerMenu />
            <MyAppbar />
            <Toolbar />
            <Container sx={{mb: 10, pr: {xs: "0px", sm: "0px"}, pl: {xs: "0px", sm: "0px"}}}>
            <Box sx={{ my: {xs: 0, sm: 0, md: 2} }}>
              <Switch >

                
                <Route  path={path} render={() =>  <Feed /> } />
                
              </Switch>
            </Box>
            
          </Container>
          <BottomNav />
        </DrawerContextProvider>  
       
    </React.Fragment>
  );
}
