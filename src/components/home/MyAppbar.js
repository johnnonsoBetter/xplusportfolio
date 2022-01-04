import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import AppbarContent from './AppbarContent';
import Slide from '@mui/material/Slide';
import { Box, Container } from '@mui/material';


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  



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


export default function MyAppbar(props) {


    return (
        <>
        <Box sx={{display: {xs: 'none', sm: 'block'}}} >
            <ElevationScroll  {...props}>
                <AppBar sx={{backgroundColor: "white"}} >
                    <Container  >
                        <Toolbar >
                        <AppbarContent />
                        </Toolbar>
                    </Container>      
                </AppBar>
            </ElevationScroll>
        </Box>

        <Box sx={{display: {xs: 'block', sm: 'none'}}} >
            <HideOnScroll  {...props}>
                <AppBar sx={{backgroundColor: "white"}} >
                    <Container  >
                        <Toolbar >
                        <AppbarContent />
                        </Toolbar>
                    </Container>      
                </AppBar>
            </HideOnScroll>
        </Box>
        
        
        </>
    )
}