import React, { useContext, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import AppbarContent from './AppbarContent';
import Slide from '@mui/material/Slide';
import { Box, Container } from '@mui/material';
import { ActionCableConsumer } from '@thrash-industries/react-actioncable-provider';
import { AuthContext } from '../../context/AuthContext';
import HomeInfoContext from '../../context/HomeInfoContext';



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
  const {totalNotifications, setTotalNotifications} = useContext(HomeInfoContext)
  const {isCurrentUser, authState} = useContext(AuthContext)
  const {slug} = JSON.parse(authState.userInfo)
  


    const handleRecieveNotification = (res) => {

      console.log(res)

      const {sender_slug, receivers, isPost} = res.data

      console.log(isCurrentUser(sender_slug), "this is really the sender")
      
      if(!isCurrentUser(sender_slug)){

        if(receivers.map(rec => rec.slug).includes(slug)){
          
          const thePackage = receivers.find(rec => (rec.slug === slug))

          const {total_notifications} = thePackage
          setTotalNotifications(total_notifications)




        }
        
      }
 
    }


    return (
        <>
        <ActionCableConsumer channel="NewAnticipationChannel"
        onReceived={handleRecieveNotification}  >
        <Box   >
            <ElevationScroll   {...props}>
                <AppBar sx={{backgroundColor: "white"}} >
                    <Container  sx={{pr: {xs: "0px", sm: 1}, pl: {xs: "0px", sm: 1}}} >
                        <Toolbar >
                        <AppbarContent total_notifications={totalNotifications} />
                        </Toolbar>
                    </Container>      
                </AppBar>
            </ElevationScroll>
        </Box>

         {/* <Box sx={{display: {xs: 'block', sm: 'none'}}} >
            <HideOnScroll  {...props}>
                <AppBar sx={{backgroundColor: "white"}} >
                    <Container  >
                        <Toolbar >
                        <AppbarContent />
                        </Toolbar>
                    </Container>      
                </AppBar>
            </HideOnScroll>
        </Box>  */}
        
        </ActionCableConsumer>
        </>
    )
}