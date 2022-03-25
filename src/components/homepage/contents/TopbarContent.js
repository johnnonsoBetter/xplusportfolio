import { Paper,Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'



export default function TobbarContent() {


    return (
        <Box >

            <Box minHeight={500} my={2}  >
                <Grid container >
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                            <Typography  fontSize='2.5rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Imagine your portfolio evolving from basic to advanced
                            </Typography>

                            <Typography  px={4} fontSize='1.3rem' fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                All this being possible by gaining fresh perspectives from others.

                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' >
                            <Paper  sx={{borderRadius: '15px', transformOrigin: "right", transform: "perspective(1200px) rotateY(-5deg)", transition: ".55s"}} elevation={3} >
                                <img width={500} src='/images/top-content.gif' style={{maxWidth: '100%', borderRadius: '15px'}} />
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


            <Box minHeight={500} my={2} sx={{backgroundColor: "white"}} >
                <Grid container  justifyContent='flex-end'>



                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' >
                            <Paper  sx={{borderRadius: '15px', transformOrigin: "left", transform: "perspective(1200px) rotateY(5deg)", transition: ".55s"}} elevation={3} >
                                <img width={500} src='/images/anticipate.gif' style={{maxWidth: '100%', borderRadius: '15px'}} />
                            </Paper>
                        </Box>
                    </Grid>
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                            <Typography  fontSize='2.5rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Working on anything new?.Anticipate it.
                            </Typography>

                            <Typography px={4} fontSize='1.3rem' fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Tell us what you are working on, Set a deadline and complete it.
                            </Typography>
                            <Typography px={4} variant='body2' fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                            Because other members are eagerly waiting for your project and happy to improve it.
                            </Typography>
                        </Box>
                    </Grid>

                    
                </Grid>
            </Box>


            <Box minHeight={500} my={2}  >
                <Grid container >
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                        <Typography  fontSize='2.5rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Never miss any important updates.
                            </Typography>

                            <Typography px={4} fontSize='1.3rem' fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                            With like Live feed and Push notifications you almost never miss important activities in the platform.
                            </Typography>
     
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' >
                            <Paper  sx={{borderRadius: '15px', transformOrigin: "right", transform: "perspective(1200px) rotateY(-5deg)", transition: ".55s"}} elevation={3} >
                                <img width={500} src='/images/notification.gif' style={{maxWidth: '100%', borderRadius: '15px'}} />
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


            <Box minHeight={500} my={2} sx={{backgroundColor: "white"}} >
                <Grid container  justifyContent='flex-end'>



                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' >
                            <Paper  sx={{borderRadius: '15px', transformOrigin: "left", transform: "perspective(1200px) rotateY(5deg)", transition: ".55s"}} elevation={3} >
                                <img width={500} src='/images/project_review.gif' style={{maxWidth: '100%', borderRadius: '15px'}} />
                            </Paper>
                        </Box>
                    </Grid>
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                            <Typography  fontSize='2.5rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Feedback, Reviews and Bug Hunts on  project matters.
                            </Typography>

                            
                            <Typography px={4} variant='body2' fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                            Simple but smart project review tool available for anyone to help improve other members projects by hunting bugs in their application, making suggestions, and taking notes.

                            </Typography>
                        </Box>
                    </Grid>

                    
                </Grid>
            </Box>


            
        
        
        
        
        </Box>
        
    )
}