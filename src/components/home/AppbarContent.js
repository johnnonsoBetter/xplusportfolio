
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Search from './Search'
import NotificationMenu from './notifications/NotificationMenu'
import PinnedProjectMenu from './pins/PinnedProjectMenu'
import MyProfile from './MyProfile'
import { Link } from 'react-router-dom'
import { AppsOutlined } from '@mui/icons-material'


export default function AppbarContent() {

    return (
        <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" >
            <Box flexGrow={2} >
                <Typography sx={{color: "black"}}> LOGO</Typography>
            </Box>

            <Box sx={{ml: 3}} flexGrow={10} display="flex"   >
                
                <Box display="flex" width="100%" justifyContent="flex-end" alignItems="center" >
                    <Search />

                    <Link to="/xpo" >
                        <Tooltip title="Feeds">

                        <IconButton>
                            <AppsOutlined />
                        </IconButton>


                        </Tooltip>
                       
                    </Link>
                  
                    <PinnedProjectMenu />

                    <NotificationMenu />

                    <MyProfile />
                    
                </Box>
               
            </Box>
        </Box>
    )

}