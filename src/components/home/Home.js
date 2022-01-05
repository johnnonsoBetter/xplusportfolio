import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MyAppbar from './MyAppbar';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import Feed from './feeds/Feed';


export default function HideAppBar(props) {

  const { path} = useRouteMatch()

  


  return (
    <React.Fragment>
      <CssBaseline />
        <MyAppbar />
        <Toolbar />
        <Container sx={{pr: {xs: "4px", sm: 1}, pl: {xs: "4px", sm: 1}}}>
        <Box sx={{ my: 2 }}>
          <Switch >

            <Route   path={path + "/my-profile"} render={() => <p> my profile </p>} />  
            <Route   path={path + "/my-profile"} render={() => <p> users </p>} />   
            <Route  path={path} render={() =>  <Feed /> } />
            
          </Switch>
        </Box>
      </Container>
    </React.Fragment>
  );
}
