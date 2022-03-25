import React from 'react'
import { Paper,Grid, Typography, Chip, Box, Avatar } from '@mui/material'
import { orange, pink, purple, yellow } from '@mui/material/colors';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function SeekHelp() {

    return (


            <Box >
                <Grid container >
                    

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                            <Typography marginTop  fontSize='2.1rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                
                                Seek help, get feedback and put in the work!
                            </Typography>

                            <Typography marginTop  marginBottom  fontSize='1.1rem' maxWidth="70%" fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                Passionate tech folks who understands these challenges are out there seeking to help you manage these challenges.                             </Typography>

                            <Chip avatar={<Avatar sx={{backgroundColor: "white", color: "black"}} > <KeyboardArrowRight /> </Avatar>} sx={{backgroundColor: yellow[600], color: 'black'}} label="Whats the catch?" clickable />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={5} >
                        <Box display='flex' minHeight={450} alignItems='center' justifyContent='center' >
                            
                                <img src='/images/seekhelp.png'  style={{maxWidth: '100%'}} />
                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        
    )
}