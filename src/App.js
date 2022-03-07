import React, { useContext } from 'react';
import './App.css';
import {createTheme, ThemeProvider} from '@mui/material'
import Home from './components/home/Home';
import { Route, Switch } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import NoPageFound from './components/NoPageFound';
import UpdatePassword from './components/UpdatePassword';
import ConfirmAccount from './components/ConfirmAccount';
import ForgotPassword from './components/ForgotPassword';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import SetReset from './components/SetReset';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat', 'sans-serif',
    ].join(','),
  },
});


function App() {
  const {isAuthenticated} = useContext(AuthContext)

  return (
    <ThemeProvider theme={theme} >
      <div className="App">
       
        <Switch >
            
            <Route path="/login" render={() => <Login />} />
            <Route path="/sign_up" render={() => <Signup />} />
            
            <Route path="/update_password" render={() => <UpdatePassword />} />  
            <Route path='/api' render={() => <SetReset /> } />        
            <Route  path="/xpo" render={() => isAuthenticated() ? <Home /> : <Redirect to='/login' /> } />
            <Route exact  path='/' render={() => isAuthenticated() ? <Redirect to="/xpo" /> : <Redirect to='/login' /> } />
            <Route exact path="/404" render={() => <NoPageFound />} />
            <Redirect to="/404" />
            
          </Switch>

      </div>
    </ThemeProvider>
    
  );
}


// <Box height='calc(99vh - 64px)'  position='fixed' bottom={0} right={0} left={0} >

//           <iframe src="https://www.codeyplus.com/" height="100%" width="100%" >

// </iframe>

//           </Box>



export default App;
