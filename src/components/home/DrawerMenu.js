import React, { useContext, useEffect, useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DrawerContext from '../../context/DrawerContext';
import SearchMenu from './mobile/SearchMenu'
import NotificationMenu from './mobile/NotificationMenu';
import CreateAnticipationMenu from './mobile/CreateAnticipationMenu'
import PinnedProjectMenu from './mobile/PinnedProjectMenu'
import { Alert, Box, IconButton, Snackbar } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Login from '../Login';
import ResetPassword from '../ResetPassword';
import CreateProjectMenu from './mobile/creat_project/CreateProjectMenu';
import { AuthContext } from '../../context/AuthContext';

export default function DrawerMenu() {

    const {drawerOpen, setDrawerOpen, fullScreen, setDrawerComponent, setFullScreen, drawerComponent} = useContext(DrawerContext)
    const location = useLocation()
    const {hash} = location
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesSmSearch = theme.breakpoints.down('md')
    const [fullWidth, setFullWidth] = useState(false)
    const {somethingWentWrong, setSomethingWentWrong} = useContext(AuthContext)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSomethingWentWrong(false);
      };

    useEffect(() => {
        
        setFullWidth(false)
        setFullScreen(false)

        
        if (hash == "#search" && matches ){
            // open the search menu, when the search hash is found.
            setDrawerOpen(true)
            setDrawerComponent('search')
            setFullScreen(true)
        }else if (hash === "#pinned" && matches){
            // open the pinnedproject menu, when the pinned hash is found.
            setDrawerOpen(true)
            setDrawerComponent('pinned')
            setFullScreen(true)
        }
        else if (hash === "#notification" && matches){
            // open the notification menu, when the notification hash is found.
            setDrawerOpen(true)
            setDrawerComponent('notification')
            setFullScreen(true)

        }else if (hash === "#create_anticipation") {
            setDrawerOpen(true)
            setDrawerComponent('create_anticipation')
            setFullWidth(true)

            if(matches)
                setFullScreen(true)
        }else if (hash === "#create_project") {
            setDrawerOpen(true)
            setDrawerComponent('create_project')
            setFullWidth(true)

            if(matches)
                setFullScreen(true)
        }
        else {
            // close drawer menu and default drawer component

            
            

            if (hash === "#login"){
                // open the login menu, when the login hash is found.
                setDrawerOpen(true)
                setDrawerComponent('login')
                
                if (matches)
                    setFullScreen(true)
                else
                    setFullScreen(false)
                
            }else if(hash === "#search" && matchesSmSearch){
                setDrawerOpen(true)
                setDrawerComponent('search')
                setFullScreen(true)
            }else if (hash === "#reset-password"){
                // open the login menu, when the login hash is found.
                setDrawerOpen(true)
                setDrawerComponent('reset-password')
                
                if (matches)
                    setFullScreen(true)
                else
                    setFullScreen(false)
                
            }
            else{
                setDrawerOpen(false)
                setDrawerComponent(null)
                setFullScreen(false)
            }
            
        }

    }, [hash, matches, location.pathname])
    
    return (
        <div>
             <Dialog  sx={{pr: 0, pl: 0}} open={drawerOpen} fullScreen={fullScreen}  >
                
                <DialogContent sx={{pr: "2px", pl: 0}}>
                <Snackbar sx={{zIndex: 500000}} open={somethingWentWrong} anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity='error'  sx={{ width: '100%' }}>
                    {"Something went wrong!!"}
                    
                </Alert>
            </Snackbar>
                <Box >
                    {
                        drawerComponent === "search" ? 
                        <SearchMenu /> :
                        drawerComponent === "notification" ?
                        <NotificationMenu /> :
                        drawerComponent === "create_anticipation" ?
                        <CreateAnticipationMenu /> : 
                        drawerComponent === "pinned" ?
                        <PinnedProjectMenu /> :
                        drawerComponent === "login" ?
                        <Login />  :
                        drawerComponent === "reset-password" ?
                        <ResetPassword /> :
                        drawerComponent === "create_project" ?
                        <CreateProjectMenu /> :
                        null

                    }
                </Box>
                </DialogContent>
                
            </Dialog>
        </div>
    )
}