import { Folder, FolderOutlined, HowToVoteOutlined, ThumbUpOutlined } from '@mui/icons-material'
import { Avatar, Badge, Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default  function ProjectList() {

    return (
        <Box my={2} >
            <Grid container spacing={1} >
                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Project />
                </Grid>

                
            </Grid>
        
        </Box>
    )
}


function Project() {
    return (
        <Paper sx={{width: "100%", p: 1}} >
            
            <Box to="/xpo/projects/7"   sx={{textDecoration: "none", pl: 1}} component={Link}>
                    <Stack  >
                    
                    <Box width="100%"  display="flex" justifyContent="flex-start" >
                        <Typography marginBottom color="GrayText" sx={{maxWidth: "80%", my: 1}} variant="body2" noWrap={true} > Todo-Appliction</Typography>
                    </Box>

                    <Box  width="100%" display="flex" justifyContent="flex-start"  >
                        <Avatar > <Folder /> </Avatar>
                    </Box>

                    <Box my={2} width="100%" display="flex" justifyContent="flex-start" >
                        <Badge  badgeContent={12} color="warning" sx={{color: "rgb(0 0 0 / 50%)", mr: 2}} >
                            <HowToVoteOutlined color="warning" />
                        </Badge>
                        <Badge badgeContent={12} color="info" sx={{color: "rgb(0 0 0 / 50%)"}} >
                            <ThumbUpOutlined color="info" />
                        </Badge>
                        
                    </Box>

                </Stack>
            </Box>
        </Paper>
    )
}