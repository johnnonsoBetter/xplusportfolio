
import { Badge, Box, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Search from './Search'
import NotificationMenu from './notifications/NotificationMenu'
import PinnedProjectMenu from './pins/PinnedProjectMenu'
import MyProfile from './MyProfile'
import { Link } from 'react-router-dom'
import { AppsOutlined, NotificationsOutlined, PeopleAltOutlined, PushPinOutlined } from '@mui/icons-material'
import { useRouteMatch } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import DrawerContext from '../../context/DrawerContext'

export default function AppbarContent() {
    
    const {path} = useRouteMatch()
    const {setDrawerOpen, setFullScreen, setDrawerComponent} = useContext(DrawerContext) 

    const openMobileSearch = () => {

        setDrawerOpen(true)
        setDrawerComponent('search')
        setFullScreen(true)
    }

    const openMobileNotification = () => {

        setDrawerOpen(true)
        setDrawerComponent('notification')
        setFullScreen(true)
    }

    const openMobilePinnedProject = () => {

        setDrawerOpen(true)
        setDrawerComponent('pinned')
        setFullScreen(true)
    }



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

                    <Link to="/xpo#search"  >
                        <IconButton onClick={openMobileSearch}  sx={{display: {xs: "block", sm: "none"}, mt: 1}}>
                            <SearchIcon />
                        </IconButton>
                    </Link>

                    


                    <Link to={`${path}/members`} >
                        <Tooltip title="Members">

                        <IconButton>
                            <PeopleAltOutlined />
                        </IconButton>


                        </Tooltip>
                       
                    </Link>


                    

            
                    <Box sx={{display: {xs: "flex", sm: "none"}, justifyContent: "space-between"}} >
                        <IconButton onClick={openMobilePinnedProject} disableRipple sx={{mr: 1}}>
                            
                            <Badge color="error" badgeContent={5} >
                                <PushPinOutlined />
                            </Badge>
                        </IconButton>

                        <IconButton onClick={openMobileNotification} disableRipple sx={{mr: 1}}>
                        
                            <Badge color="error" badgeContent={5} >
                                <NotificationsOutlined />
                            </Badge>
                        </IconButton>

                    </Box>
                    

                    <Box sx={{display: {xs: "none", sm: "flex"}, justifyContent: "space-between"}} >
                        <PinnedProjectMenu />

                        <NotificationMenu />
                    </Box>

                    <MyProfile />
                    
                </Box>
               
            </Box>
        </Box>
    )

}