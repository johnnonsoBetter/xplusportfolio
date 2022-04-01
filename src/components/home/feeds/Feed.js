import { Box, Grid } from '@mui/material'
import React from 'react'
import Resources from '../resources/ResourcesLink'
import ActivityContainer from './activities/ActivityContainer'
import TopProjects from './top_project/TopProjects'

export default function Feed() {

    return (
        <Box >
            <Grid container spacing={2} >
                <Grid item sx={{display: {xs: "none", sm: "none", md: "none", lg: "block"}}}  lg={3} >
                <Resources />
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={6} >
                    <ActivityContainer />
                </Grid>
                <Grid item sm={4} sx={{display: {xs: "none", sm: "none", md: "block"}}} md={4} lg={3} >

                    <Box  sx={{width: "100%",  height: "calc(99vh - 60px)", scrollbarWidth: {display: "none"}, overflowY: "auto"}} > 
                        
                        <Box mx={1} >
                        
                        <TopProjects />
                       
                        </Box>
                        <Box mx={1} my={2}sx={{display: {xs: "none", sm: "none", md: "block", lg: "none"}}} >
                            
                        <Resources />
                        </Box>
                    </Box>
                    
                </Grid>
                <Grid item sm={4} sx={{display: {xs: "none", sm: "none", md: "none"}}} md={4} lg={3} >
                    <TopProjects />
                </Grid>
                <Grid  item sm={4} sx={{display: {xs: "none", sm: "none", md: "none", lg: "none"}}} md={4} lg={3} >
                    
                    <TopProjects />
                </Grid>
            </Grid>
        </Box>
    )
}