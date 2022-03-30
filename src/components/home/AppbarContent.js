
import { Alert, Badge, Box, Chip, IconButton, Avatar, Tooltip, Typography, Zoom } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import NotificationMenu from './notifications/NotificationMenu'
import PinnedProjectMenu from './pins/PinnedProjectMenu'
import MyProfile from './MyProfile'
import { Link, useLocation } from 'react-router-dom'
import { AppsOutlined, BubbleChartRounded, NotificationsOutlined, NotificationsRounded, PeopleAltOutlined, PushPinOutlined } from '@mui/icons-material'
import { useRouteMatch } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import DrawerContext from '../../context/DrawerContext'
import HomeInfoContext from '../../context/HomeInfoContext'
import {blue} from '@mui/material/colors'
import PushConsentNotify from '../shared/PushConsentNotify'
import usePushNotifications from '../shared/usePushNotifications'
import ResourcesTabLink from './resources/ResourcesTabLink'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function AppbarContent({user, notify}) {
    
    const history = useHistory()

    const {
        userConsent,
        pushNotificationSupported,
        subCompleted
      } = usePushNotifications();

    const [openNotify, setOpenNotify] = useState(userConsent !== 'granted')
    const {totalNotifications, showFriendsActivities, setNewPostAvailable, newPostAvailable, setShowFriendsActivites} = useContext(HomeInfoContext)


    useEffect(() => {
        if(subCompleted) setOpenNotify(false)
    }, [subCompleted])



    return (
        <Box width="100%" display="flex" position='relative' alignItems="center" justifyContent="space-between" >
            <Box flexGrow={2}  >
                <Link to='/xpo' >
                    <Box component="img" srcSet="/images/xlogo.png" alt="logo" width={120} maxWidth="80%" />
               
                </Link>
                
            </Box>

            <Box sx={{ml: 3}} flexGrow={10} display="flex"   >
                
                <Box display="flex" width="100%" justifyContent="flex-end" alignItems="center" >
                        <Box sx={{display: {xs: 'none', sm: 'none', md: 'block'}}} >
                            <Search />
                        </Box>

                        
                        {
                               pushNotificationSupported &&
                               <>
                                    {
                                        openNotify && 
                                        <>

                                            {
                                                !subCompleted && <PushConsentNotify openNotify={openNotify} setOpenNotify={setOpenNotify} />
                                            }

                                        </>
                                        
                            
                                    }
                               </>
        
                        }
                        

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

                        <Tooltip  LinkComponent={Link} to={`/xpo`} title="Resources" sx={{display: {xs: "none", sm: "block"}}}>
                            
                                <ResourcesTabLink />
                           
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

            {
                newPostAvailable ?
                
               
                    <Box position='absolute' zIndex={100000} bottom={-49} display='flex' justifyContent='center' width='100%'  >
                        <Chip onClick={() => {

                    
                            setShowFriendsActivites(true)
                            history.push('/xpo')
                           
                            
                            
                        }} label="New Post Available" sx={{color: "white", fontWeight: 600}} clickable avatar={ <Avatar sx={{bgcolor: blue[400]}} > <NotificationsRounded  sx={{color: "white"}} />   </Avatar>  } color='info' size='large' />
                    </Box>
               
                : null
            

            }

            
        </Box>
    )

}
