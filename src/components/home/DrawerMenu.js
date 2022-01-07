import React, { useContext } from 'react'

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

export default function DrawerMenu() {

    const {drawerOpen, setDrawerOpen, fullScreen, drawerComponent} = useContext(DrawerContext)
    
    return (
        <div>
             <Dialog open={drawerOpen} fullScreen={fullScreen}  >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
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
                <DialogActions>
                    <IconButton onClick={() => setDrawerOpen(!drawerOpen)} >
                        <CloseOutlined />
                    </IconButton>
                </DialogActions>
            </Dialog>
        </div>
    )
}