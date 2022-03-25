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
import Homepage from './components/homepage/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectReview from './components/project_review/ProjectReview';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat', 'Quicksand', 'sans-serif',
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
            <Route  path="/project_review/:slug" render={() => isAuthenticated() ? <ProjectReview /> : <Redirect to='/login' /> } />
            <Route exact  path='/' render={() => isAuthenticated() ? <Redirect to="/xpo" /> : <Homepage /> } />
            <Route exact path="/404" render={() => <NoPageFound />} />
            <Redirect to="/404" />
            
          </Switch>

      </div>
    </ThemeProvider>
    
  );
}




export default App;
