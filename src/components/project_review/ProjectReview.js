import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, IconButton, Paper, Tooltip, Zoom } from '@mui/material';
import { InsertLinkRounded, NoteAddRounded } from '@mui/icons-material';
import ReviewToolbar from './ReviewToolbar';
import { ProjectReviewContextProvider } from '../../context/ProjectReviewContext';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ProjectPreview(props) {

  const [screenPoint, setScreenPoint] = React.useState(12)



  return (
    <React.Fragment>
      <CssBaseline />
      <ProjectReviewContextProvider 

        value={{
          screenPoint,
          setScreenPoint,
        }}
      
      >



  
      <ElevationScroll {...props}>
        <AppBar sx={{backgroundColor: "white"}}>
          <Toolbar>
            <ReviewToolbar />
              
        
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
     

      <Grid container justifyContent='center' >


      
        <Grid item  sm={screenPoint}   >
          
          <Zoom in={true} >
          
             <Paper  elevation={4} sx={{height: 'calc(99vh - 64px)', mt: 1, mb: 1, mx: 1, borderRadius: "15px"}} >

             <iframe  src="https://xplusportfolio.herokuapp.com/" style={{border: 0, borderRadius: "15px"}} height="100%" width="100%" >

            </iframe>


             </Paper>

            
         
          </Zoom>

        

     
        </Grid>

      

      </Grid>
      </ProjectReviewContextProvider>
    </React.Fragment>
  );
}
