import React, { useState } from 'react';
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


export default function Home(props) {

  const { path} = useRouteMatch()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerComponent, setDrawerComponent] = useState(null)
  const [fullScreen, setFullScreen] = useState(false)
  const history = useHistory()
  const location = useLocation()

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
            <DrawerMenu />
            <MyAppbar />
            <Toolbar />
            <Container sx={{mb: 10, pr: {xs: "4px", sm: 1}, pl: {xs: "4px", sm: 1}}}>
            <Box sx={{ my: {xs: 0, sm: 0, md: 2} }}>
              <Switch >

                <Route   path={path + "/my-profile"} render={() => <p> my profile </p>} />  
                <Route   path={path + "/my-profile"} render={() => <p> users </p>} />   
                <Route  path={path} render={() =>  <Feed /> } />
                
              </Switch>
            </Box>
            
          </Container>
          <BottomNav />
        </DrawerContextProvider>  
    </React.Fragment>
  );
}
