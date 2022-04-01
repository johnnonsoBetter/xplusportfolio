import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTheme } from '@emotion/react'
import AnticipationActivity from './anticipation_activity/AnticipationActivity'
import MyMiniInfo from '../../../shared/MyMiniInfo'
import '../../../../css/InfiniteList.css'
import ProjectActivity from './project_activity/ProjectActivity'
import SubscribersLoader from '../../../shared/SubscribersLoader'


export default function ActivityList({activities, totalActivities, fetchMoreData, loading, finished }) {

    const theme = useTheme()
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.up('xs'));
  
    return (
        <Box py={1} mb={2} className="activity-container"  sx={{width: "100%", scrollbarColor: "red", scrollbarWidth: {display: "none"}, overflowY: "auto"}} >
            

           <InfiniteScroll
           dataLength={activities.length}
           next={fetchMoreData}
           scrollThreshold={1}
           hasMore={totalActivities !== activities.length}
            
           height={matchesSm ? "calc(92vh - 45px)" : matchesXs ?  "calc(98vh - 45px)": "calc(99vh - 45px)" }
            
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
                        loading && 
                        <Box width='100%' display='flex' my={2} justifyContent='center' alignItems='center'  >
                            <img src='/images/review_loader.gif' width={45} height={45} />
                            
                        </Box>
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
                                    action_type === "anticipation.fulfill" ? 
                                    <AnticipationActivity anticipation={activity} typePackge={{owner_name, owner_slug, action_type, created_at}} showType={true} /> :
                                    action_type === "suggestion.create" ?
                                    <ProjectActivity project={activity} typePackge={{owner_name, owner_slug, action_type, created_at}} showType={true} /> :
                                    action_type === "project.create" ?
                                    <ProjectActivity project={activity} typePackge={{owner_name, owner_slug, action_type, created_at}} showType={true} /> :
                                    null
                                }
                            </Box>
                            
                       
                    )
                   })
               }
               <Box p={1}  >

                 

              
                    {
                        totalActivities !== activities.length &&
                        <>
                            {!finished && <SubscribersLoader />  }
                        </>
                        

                    }
               </Box>
         </InfiniteScroll>
        </Box>
    )
}