
import { Badge, Box, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Search from './Search'
import NotificationMenu from './notifications/NotificationMenu'
import PinnedProjectMenu from './pins/PinnedProjectMenu'
import MyProfile from './MyProfile'
import { Link, useLocation } from 'react-router-dom'
import { AppsOutlined, NotificationsOutlined, PeopleAltOutlined, PushPinOutlined } from '@mui/icons-material'
import { useRouteMatch } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import DrawerContext from '../../context/DrawerContext'

export default function AppbarContent() {
    
    const {path} = useRouteMatch()
    const {pathname} = useLocation()
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
                <Box component="img" srcSet="/images/xlogo.png" alt="logo" width={120} maxWidth="80%" />
               
            </Box>

            <Box sx={{ml: 3}} flexGrow={10} display="flex"   >
                
                <Box display="flex" width="100%" justifyContent="flex-end" alignItems="center" >
                    <Search />

                        <Tooltip  LinkComponent={Link} to={`#search`} title="Feeds" sx={{display: {xs: "none", sm: "block", md: "none"}}}>
                            <IconButton disableRipple>
                                <SearchIcon />
                            </IconButton>
                        </Tooltip>


                        <Tooltip  LinkComponent={Link} to={`/xpo`} title="Feeds" sx={{display: {xs: "none", sm: "block"}}}>
                            <IconButton disableRipple>
                                <AppsOutlined />
                            </IconButton>
                        </Tooltip>
              
                        <Tooltip title="Members" sx={{display: {xs: "none", sm: "block"}}}>

                        <IconButton LinkComponent={Link} to={`/xpo/members`}   disableRipple>
                            <PeopleAltOutlined />
                        </IconButton>


                        </Tooltip>
                       
             

                    

            
                    <Box sx={{display: {xs: "flex", sm: "none"}, justifyContent: "space-between"}} >
                        
                   
                            {/* <IconButton LinkComponent={Link} to={`#pinned`} disableRipple sx={{mr: 1}}>
                                
                                <Badge color="error" badgeContent={5} >
                                    <PushPinOutlined />
                                </Badge>
                            </IconButton> */}

                        

                     
                            <IconButton to={`#notification`} LinkComponent={Link}  disableRipple sx={{mr: 1}}>
                            
                                <Badge color="error" badgeContent={5} >
                                    <NotificationsOutlined />
                                </Badge>
                            </IconButton>

                    </Box>
                    

                    <Box sx={{display: {xs: "none", sm: "flex"}, justifyContent: "space-between"}} >
                       

                        <NotificationMenu />
                    </Box>

                    <MyProfile />
                    
                </Box>
               
            </Box>
        </Box>
    )

}