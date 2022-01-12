import React, { useContext } from 'react';
import './App.css';
import {Container, createTheme, ThemeProvider} from '@mui/material'
import Home from './components/home/Home';
import { Route, Switch } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import NoPageFound from './components/NoPageFound';

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
            
          <Route path="/sign_up" render={() => <Signup />} />
          <Route path="/login" render={() => <Login />} />               
          
          <Route  path="/xpo" render={() =>  <Home /> } />
          <Route exact  path="/" render={() => <Redirect to="/xpo" /> } />
          <Route exact path="/404" render={() => <NoPageFound />} />
          <Redirect to="/404" />
          
        </Switch>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
