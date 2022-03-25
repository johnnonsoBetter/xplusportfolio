import React from 'react'
import { Paper,Grid, Typography, Chip, Box, Avatar } from '@mui/material'
import { green, orange, pink, purple } from '@mui/material/colors';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function TeamHelp() {

    return (


            <Box >
                <Grid container >
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                            <Typography marginTop  fontSize='2.4rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                
                                What if you don't have to start from scratch
                            </Typography>

                            <Typography marginTop  marginBottom  fontSize='1rem' maxWidth="80%" fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                            How about we come together as a platform and help take your existing projects to a much better level by giving you fresh ideas to work on, point out improvement areas and all you have to do is build upon these concepts.
                            </Typography>

                            <Chip avatar={<Avatar sx={{backgroundColor: "white", color: "black"}} > <KeyboardArrowRight /> </Avatar>} sx={{backgroundColor: green[600], color: 'white'}} label="Explore how below" clickable />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={450} alignItems='center' justifyContent='center' >
                            
                                <img src='/images/team_help.png'  style={{maxWidth: '100%', borderRadius: '15px'}} />
                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        
    )
}