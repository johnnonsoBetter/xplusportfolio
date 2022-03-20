import { Box, Grid, Paper, useMediaQuery } from '@mui/material'
import React from 'react'
import '../../../App.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTheme } from '@emotion/react'

import Notification from './Notification'


export default function NotificationList({notifications, totalMembers, fetchMoreData}) {

    const theme = useTheme()
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.up('xs'));
    
  
    
    return (
        <Box py={1} mb={4} className="member-container" sx={{width: "100%", scrollbarColor: "red", scrollbarWidth: {display: "none"}, overflowY: "auto"}} >
            

           <InfiniteScroll
           dataLength={notifications.length}
           next={fetchMoreData}
           scrollThreshold={1}
           hasMore={totalMembers !== notifications.length}
           
           height={matchesSm ? "calc(99vh - 60px)" : matchesXs ?  "calc(98vh - 85px)": "calc(99vh - 80px)" }
            
         
           
            >
           

                {
                   notifications.map((notification, index) => {

                    const {user_slug, id, type, object, read} = notification

                    return (
                        
                            <Box key={id + index} p={1} >
                                
                                <Notification user_slug={user_slug} id={id} seen={read} object={object} type={type}  />

                            </Box>
                            
                 
                    )
                   })
               }
         </InfiniteScroll>
        </Box>
    )
}


