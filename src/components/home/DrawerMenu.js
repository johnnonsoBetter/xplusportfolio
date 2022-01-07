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
             <Dialog sx={{pr: 0, pl: 0}} open={drawerOpen} fullScreen={fullScreen}  >
                <DialogTitle sx={{pr: 0, pl: 0}}>
                    <IconButton onClick={() => setDrawerOpen(!drawerOpen)} >
                        <CloseOutlined />
                    </IconButton>
                </DialogTitle>
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