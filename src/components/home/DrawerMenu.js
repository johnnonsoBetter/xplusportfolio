import React, { useContext, useEffect } from 'react'

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
import { Box, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function DrawerMenu() {

    const {drawerOpen, setDrawerOpen, fullScreen, setDrawerComponent, setFullScreen, drawerComponent} = useContext(DrawerContext)
    const location = useLocation()
    const {hash} = location
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {

        if (hash == "#search" && matches ){
            setDrawerOpen(true)
            setDrawerComponent('search')
            setFullScreen(true)
        }else if (hash === "#pinned" && matches){
            setDrawerOpen(true)
            setDrawerComponent('pinned')
            setFullScreen(true)
        }
        else if (hash === "#notification" && matches){
            setDrawerOpen(true)
            setDrawerComponent('notification')
            setFullScreen(true)
        }else {
            setDrawerOpen(false)
            setDrawerComponent(null)
            setFullScreen(false)
            location.hash = ""
        }

    }, [hash])
    
    return (
        <div>
             <Dialog sx={{pr: 0, pl: 0}} open={drawerOpen} fullScreen={fullScreen}  >
                
                <DialogContent sx={{pr: "2px", pl: 0}}>
                
                <Box >
                    {
                        drawerComponent === "search" ? 
                        <SearchMenu /> :
                        drawerComponent === "notification" ?
                        <NotificationMenu /> :
                        drawerComponent === "c_anticipation" ?
                        <CreateAnticipationMenu /> : 
                        drawerComponent === "pinned" ?
                        <PinnedProjectMenu /> :
                        null

                    }
                </Box>
                </DialogContent>
                
            </Dialog>
        </div>
    )
}