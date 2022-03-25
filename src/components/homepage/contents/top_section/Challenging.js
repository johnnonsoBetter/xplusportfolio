import React from 'react'
import { Paper,Grid, Typography, Chip, Box, Avatar } from '@mui/material'
import { orange, pink, purple } from '@mui/material/colors';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function Challenging() {

    return (


            <Box >
                <Grid container >
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                            <Typography marginTop  fontSize='2.1rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                
                                Building useful project requires effort and time, It's difficult and challenging!
                            </Typography>

                            <Typography marginTop  marginBottom  fontSize='1.1rem' maxWidth="70%" fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Sometimes building useful projects can seem challenging to build, maybe because of lack of ideas, skills and motivation.
                            </Typography>

                            <Chip avatar={<Avatar sx={{backgroundColor: "white", color: "black"}} > <KeyboardArrowRight /> </Avatar>} sx={{backgroundColor: pink[600], color: 'white'}} label="How about this?" clickable />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={450} alignItems='center' justifyContent='center' >
                            
                                <img src='/images/frustration.png'  style={{maxWidth: '100%', borderRadius: '15px'}} />
                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        
    )
}