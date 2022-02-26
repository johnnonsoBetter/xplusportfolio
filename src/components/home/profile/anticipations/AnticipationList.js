import { useTheme } from '@emotion/react';
import { List, ListItem, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import AnticipationActivity from '../../feeds/activities/anticipation_activity/AnticipationActivity'

export default function AnticipationList({anticipations, totalAnticipations, fetchMoreData}) {

    const theme = useTheme()
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.up('xs'));

    return (
        <Box py={1} className="member-container" sx={{width: "100%", scrollbarColor: "red", scrollbarWidth: {display: "none"}, overflowY: "auto"}} >
    

        <InfiniteScroll
        dataLength={anticipations.length}
        next={fetchMoreData}
        scrollThreshold={1}
        hasMore={totalAnticipations !== anticipations.length}
        
        
        style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: 'center',
            marginBottom: "20px"
            
            
        }}
        
         >
        

                {
                   anticipations.map((anticipation, index) => {

                    return (
                        <ListItem disablePadding key={anticipation.id}  id={anticipation.a_slug} >
                            <AnticipationActivity anticipation={anticipation} />
                        </ListItem>
                    )
                   })
               }
      </InfiniteScroll>
      </Box>
    )
}