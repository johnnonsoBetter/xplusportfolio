


import { useTheme } from '@emotion/react';
import { List, ListItem, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import ProjectActivity from '../../feeds/activities/project_activity/ProjectActivity'
import '../../../../css/InfiniteList.css'

export default function ProjectList({projects, totalProjects, fetchMoreData}) {

    const theme = useTheme()
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.up('xs'));
   

    return (
        <Box py={1}   >
            

        <InfiniteScroll
        dataLength={projects.length}
        next={fetchMoreData}
        scrollThreshold={1}
        hasMore={totalProjects !== projects.length}
        
        height={matchesSm ? "calc(99vh - 60px)" : matchesXs ?  "calc(98vh - 85px)": "calc(99vh - 85px)" }
            
        style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: 'center',
            marginBottom: "20px"
            
            
        }}
        
         >
        

                {
                   projects.map((project, index) => {

                    return (
                        <ListItem disablePadding key={project.slug + index} >
                            <ProjectActivity project={project} typePackge={{}} showType={false} />
                        </ListItem>
                    )
                   })
               }
      </InfiniteScroll>
      </Box>
    )
}