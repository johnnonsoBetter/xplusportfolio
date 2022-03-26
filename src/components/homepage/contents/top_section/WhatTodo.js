import React from 'react'
import { Paper,Grid, Typography, Chip, Box, Avatar } from '@mui/material'
import { orange, purple } from '@mui/material/colors';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function WhatTodo() {

    return (


            <Box >
                <Grid container  >
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex'  alignItems='center' justifyContent='center' flexDirection='column' >
                            <Typography marginTop  fontSize='2rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                               Make your portfolio stand out by buiding real world projects
                            </Typography>

                            <Typography marginTop marginBottom  fontSize='1rem' maxWidth="80%" fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                            Experts in the tech industry advices to have a solid portfolio with proof of real world projects. This helps showcase the potential of problem solving ability and learning.

                            </Typography>

                            <Chip avatar={<Avatar sx={{backgroundColor: "white", color: "black"}} > <KeyboardArrowRight /> </Avatar>}    sx={{backgroundColor: orange[600], color: 'white'}} label="But its hard!" clickable />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={450} alignItems='center' justifyContent='center' >
                            
                                <img src='/images/solid-portfolio.png'  style={{maxWidth: '100%', borderRadius: '15px'}} />
                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        
    )
}