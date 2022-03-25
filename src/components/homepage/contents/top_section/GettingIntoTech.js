import React from 'react'
import { Paper,Grid, Typography, Chip, Box, Avatar } from '@mui/material'
import { orange, purple } from '@mui/material/colors';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function GettingIntoTech() {

    return (


            <Box >
                <Grid container >
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                            <Typography marginTop  fontSize='2.4rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Trying to get into the tech industry ?
                            </Typography>

                            <Typography marginTop marginBottom  fontSize='1.2rem' maxWidth="80%" fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Are you a self-taught, bootcamp grads, or newbie in tech trying to get your foot at the software industry ?

                            </Typography>

                            <Chip avatar={<Avatar sx={{backgroundColor: "white", color: "black"}} > <KeyboardArrowRight /> </Avatar>} sx={{backgroundColor: purple[600], color: 'white'}} sx={{backgroundColor: purple[600], color: 'white'}} label="Experts Advice" clickable />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={450} alignItems='center' justifyContent='center' >
                            
                                <img src='/images/tech.png'  style={{maxWidth: '100%', borderRadius: '15px'}} />
                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        
    )
}