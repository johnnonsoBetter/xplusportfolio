import { Box, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import Member from './Member'
import '../../../App.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTheme } from '@emotion/react'
import SubscribersLoader from '../../shared/SubscribersLoader'


export default function MemberList({users, totalMembers, fetchMoreData, noFollow, loading, finished}) {

    const theme = useTheme()
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.up('xs'));
  
    
    return (
        <Box py={1} mb={10} className="member-container" sx={{width: "100%", scrollbarColor: "red", scrollbarWidth: {display: "none"}, overflowY: "auto"}} >
    

           <InfiniteScroll
           dataLength={users.length}
           next={fetchMoreData}
           scrollThreshold={1}
           hasMore={totalMembers !== users.length}
           
           height={matchesSm ? "calc(99vh - 60px)" : matchesXs ?  "calc(98vh - 85px)": "calc(99vh - 85px)" }
            
           style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: 'flex-start',
               marginBottom: "20px"
               
               
           }}
           
            >

                <Box width='100%' >
                    
                    {
                        loading && <SubscribersLoader />
                    }
                </Box>

                {
                    !loading &&

                   
                        users.map((user, index) => {
     
                         return (
                             <Grid key={user.slug + index} item xs={6} sm={4} md={4}  >
                                 <Box p={1} >
                                     <Member noFollow={noFollow} user={user} />
                                 </Box>
                                 
                             </Grid>
                         )
                        })
                    
                }
           

                
                <Grid p={1} item xs={12}  >
                  

                    {
                        totalMembers !== users.length &&
                        <>
                            {!finished && <SubscribersLoader />  }
                        </>
                        

                    }

                </Grid>
         </InfiniteScroll>
        </Box>
    )
}