import { Box, CircularProgress, Grid, LinearProgress, useMediaQuery } from '@mui/material'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTheme } from '@emotion/react'
import AnticipationActivity from './anticipation_activity/AnticipationActivity'
import MyMiniInfo from '../../../shared/MyMiniInfo'
import FeedLoader from '../../../shared/FeedLoader'


export default function ActivityList({activities, totalActivities, fetchMoreData, loading, finished }) {

    const theme = useTheme()
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.up('xs'));
  
    
    return (
        <Box py={1} mb={2} className="member-container" sx={{width: "100%", scrollbarColor: "red", scrollbarWidth: {display: "none"}, overflowY: "auto"}} >
            

           <InfiniteScroll
           dataLength={activities.length}
           next={fetchMoreData}
           scrollThreshold={1}
           hasMore={totalActivities !== activities.length}
           loader={
               finished ? null :
               <Box mb={2}> 
                    <FeedLoader />   
               </Box>
                
            }
           height={matchesSm ? "calc(99vh - 60px)" : matchesXs ?  "calc(98vh - 85px)": "calc(99vh - 85px)" }
            
           style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: 'center',
               marginBottom: "20px"
               
               
           }}
           
            >
                
                <Box width='100%' >
                    <MyMiniInfo />
                    {
                        loading && <FeedLoader />
                    }
                </Box>

                {

                   !loading &&

                   activities.map((the_activity, index) => {

                    const {id, action_type, owner_name, owner_slug, activity, created_at} = the_activity 
                  
                    return (
                            
                            <Box key={id + index} width='100%' >
                                {
                                    action_type === "anticipation.create" ?
                                    <AnticipationActivity anticipation={activity} typePackge={{owner_name, owner_slug, action_type, created_at}} showType={true} /> : 
                                    action_type === "anticipation.like" ? 
                                    <AnticipationActivity anticipation={activity} typePackge={{owner_name, owner_slug, action_type, created_at}} showType={true} /> :
                                    action_type === "anticipation.subscribe" ? 
                                    <AnticipationActivity anticipation={activity} typePackge={{owner_name, owner_slug, action_type, created_at}} showType={true} /> :
                                    null


                                }
                            </Box>
                            
                       
                    )
                   })
               }
         </InfiniteScroll>
        </Box>
    )
}