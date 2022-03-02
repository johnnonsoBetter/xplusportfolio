
import { Alert, Badge, Box, Chip, IconButton, Snackbar, Tooltip, Typography, Zoom } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import NotificationMenu from './notifications/NotificationMenu'
import PinnedProjectMenu from './pins/PinnedProjectMenu'
import MyProfile from './MyProfile'
import { Link, useLocation } from 'react-router-dom'
import { AppsOutlined, NotificationsOutlined, NotificationsRounded, PeopleAltOutlined, PushPinOutlined } from '@mui/icons-material'
import { useRouteMatch } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import DrawerContext from '../../context/DrawerContext'
import HomeInfoContext from '../../context/HomeInfoContext'

export default function AppbarContent({user, notify}) {
    
    const {path} = useRouteMatch()
    const {pathname} = useLocation()
    const {setDrawerOpen, setFullScreen, setDrawerComponent} = useContext(DrawerContext) 
    const [progress, setProgress] = useState(0)
    const [openNotify, setOpenNotify] = useState(true)
    const {totalNotifications} = useContext(HomeInfoContext)

    // useEffect(() => {

    //     const timer = setInterval((e) => {

    //         console.log("hello ", e, "and the same progress", progress)

    //         setProgress((progress) => (progress + 1))

    //         if(progress >= 10) {
                
    //             setOpenNotify(false)
    //             clearInterval(timer)
                
    //         }
    //         //setProgress(0)
             
            
    //     }, 1000);
    //     return () => {
    //     clearInterval(timer);
    //     };
    // }, [progress])


    return (
        <Box width="100%" display="flex" position='relative' alignItems="center" justifyContent="space-between" >
            <Box flexGrow={2} >
                <Box component="img" srcSet="/images/xlogo.png" alt="logo" width={120} maxWidth="80%" />
               
            </Box>

            <Box sx={{ml: 3}} flexGrow={10} display="flex"   >
                
                <Box display="flex" width="100%" justifyContent="flex-end" alignItems="center" >
                        <Box sx={{display: {xs: 'none', sm: 'none', md: 'block'}}} >
                            <Search />
                        </Box>
                        

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
                        
            

                        

                     
                            <IconButton to={`#notification`} LinkComponent={Link}  disableRipple sx={{mr: 1}}>
                            
                                <Badge color="error" badgeContent={totalNotifications} >
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

            <Zoom >
            <Box position='absolute' zIndex={100000} bottom={-45} display='flex' justifyContent='center' width='100%'  >
                <Chip label="New Post Available" sx={{color: "white", fontWeight: 700}} clickable avatar={<NotificationsRounded color='error' sx={{color: "white"}} />} color='info' size='large' />
            </Box>



            </Zoom>
            
        </Box>
    )

}
