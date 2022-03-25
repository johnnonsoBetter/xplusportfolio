import { Paper,Grid, Typography, Chip } from '@mui/material'
import { orange, purple } from '@mui/material/colors';
import { Box } from '@mui/system'
import React from 'react'
import Zoom from 'react-reveal/Zoom';



export default function FeaturesSection() {


    return (
        <Box >

            <Box  my={2}  >
                <Grid container >
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                            <Typography marginTop  fontSize='2.4rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Trying to get into the tech industry ?
                            </Typography>

                            <Typography marginTop marginBottom  fontSize='1.2rem' maxWidth="80%" fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Are you a self-taught, bootcamp grads, or newbie in tech trying to get your foot at the software industry ?

                            </Typography>

                            <Chip sx={{backgroundColor: purple[600], color: 'white'}} label="Experts Advice" clickable />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={450} alignItems='center' justifyContent='center' >
                            
                                <img src='/images/solid-portfolio.png'  style={{maxWidth: '100%', borderRadius: '15px'}} />
                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box minHeight={500} my={2}  >
                <Grid container >
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                            <Typography  fontSize='2.4rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Imagine your portfolio evolving from basic to advanced
                            </Typography>

                            <Typography  fontSize='1.2rem' maxWidth="80%" fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                All this being possible by gaining fresh perspectives from others.

                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' >
                            <Paper  sx={{borderRadius: '15px', transformOrigin: "right", transform: "perspective(1200px) rotateY(-5deg)", transition: ".55s"}} elevation={3} >
                                <img src='/images/top-content.gif' style={{maxWidth: '100%', borderRadius: '15px'}} />
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
                                <img src='/images/anticipate.gif' style={{maxWidth: '100%', borderRadius: '15px'}} />
                            </Paper>
                        </Box>
                    </Grid>
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                            <Typography  fontSize='2.4rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Working on anything new?.Anticipate it.
                            </Typography>

                            <Typography fontSize='1.2rem' maxWidth="80%" fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
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
                        <Typography  fontSize='2.4rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Never miss any important updates.
                            </Typography>

                            <Typography fontSize='1.2rem' maxWidth="80%" fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                            With like Live feed and Push notifications you almost never miss important activities in the platform.
                            </Typography>
     
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' >
                            <Paper  sx={{borderRadius: '15px', transformOrigin: "right", transform: "perspective(1200px) rotateY(-5deg)", transition: ".55s"}} elevation={3} >
                                <img src='/images/notification.gif' style={{maxWidth: '100%', borderRadius: '15px'}} />
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Zoom  top >

            <Box minHeight={500} my={2} sx={{backgroundColor: "white"}} >
                <Grid container  justifyContent='flex-end'>



                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' >
                            <Paper  sx={{borderRadius: '15px', transformOrigin: "left", transform: "perspective(1200px) rotateY(5deg)", transition: ".55s"}} elevation={3} >
                                <img src='/images/project_review.gif' style={{maxWidth: '100%', borderRadius: '15px'}} />
                            </Paper>
                        </Box>
                    </Grid>
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                            <Typography  fontSize='2.4rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Feedback, Reviews and Hunting Bugs on  project matters.
                            </Typography>

                            
                            <Typography px={4} variant='body2' fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                            Simple but smart project review tool available for anyone to help improve other members projects by hunting bugs in their application, making suggestions, and taking notes.

                            </Typography>
                        </Box>
                    </Grid>

                    
                </Grid>
            </Box>




            </Zoom>
            

            
        
        
        
        
        </Box>
        
    )
}