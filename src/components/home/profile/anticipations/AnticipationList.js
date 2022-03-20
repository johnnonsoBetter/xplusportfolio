import { useTheme } from '@emotion/react';
import { List, ListItem, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import FeedLoader from '../../../shared/FeedLoader';
import AnticipationActivity from '../../feeds/activities/anticipation_activity/AnticipationActivity'

export default function AnticipationList({anticipations, totalAnticipations, fetchMoreData, finished}) {

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
        
        height="200px"
        // height={matchesSm ? "calc(99vh - 60px)" : matchesXs ?  "calc(98vh - 85px)": "calc(99vh - 85px)" }
        loader={
            finished ? null :
            <Box mb={2}> 
                 <FeedLoader />   
            </Box>
             
         }
        
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
                            <AnticipationActivity anticipation={anticipation} typePackge={{}} showType={false} />
                        </ListItem>
                    )
                   })
               }
      </InfiniteScroll>
      </Box>
    )
}