import { PlaylistAddCheckRounded } from '@mui/icons-material'
import { IconButton, ListItemIcon, Paper, Skeleton, Stack, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function NotificationPage() {

    return (
        <Box sx={{width: "100%", scrollbarColor: "red",  height: {sm: "calc(99vh - 60px)", xs: "calc(96vh - 85px)"}, scrollbarWidth: {display: "none"}, overflowY: "auto"}} >
            <Box p={1} display="flex" width="100%" justifyContent="space-between" alignItems="center"  >
                <Typography fontWeight={700}>Notifications</Typography>
                

                <Box display="flex" width="100%" justifyContent="flex-end" alignItems="center" >
                <Tooltip title="Mark all as read">   
                    <IconButton >
                        <PlaylistAddCheckRounded/>
                    </IconButton>
                </Tooltip>

                
                </Box>
            </Box>
            <NotificationPageLoader />
        </Box>
    )
}



const NotificationPageLoader = () => {

    const Load = () => (
        <Box my={1}  >
        <Paper sx={{p: 2}} elevation={0} >

       
        <Box  my={1} display="flex" width="100%" alignItems="center" justifyContent="flex-start" >
            
            <ListItemIcon >
                <Skeleton variant="circular" width={45} height={45} />
            </ListItemIcon>
            <Stack width="100%" >
                
                <Box  >
                    <Skeleton type="text" width="45%" />
                </Box>
                <Box  >
                    <Skeleton type="text" width="70%" />                
                </Box>

            </Stack>
        
        </Box>
        </Paper>
    </Box>
    )


    return (
        <>
            <Load /> 
            <Load />
            <Load />
            <Load />
            <Load />
            <Load />
        </>
    )
}