import React from 'react'
import { Paper,Grid, Typography, Chip, Box, Avatar } from '@mui/material'
import { orange, pink, purple, yellow } from '@mui/material/colors';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function SeekHelp() {

    return (


            <Box m={2} >
                <Grid container  spacing={2}>
                    

                    <Grid item xs={12} sm={10} md={5} >
                        <Box display='flex'  alignItems='flex-start' sx={{justifyContent: {xs: 'flex-start', sm: 'flex-start', md: 'center'}}} flexDirection='column' >
                            <Typography marginTop lineHeight='1.3' textAlign='left' fontWeight={700} fontFamily='Quicksand'  sx={{color: '#222d39', fontSize: {xs: '1.7rem', sm: '1.8'}}}>
                                
                                Seek help, get feedback and put in the work!
                            </Typography>

                            <Typography marginTop  marginBottom={2}  textAlign='left'  fontSize='1.1rem' fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39', textAlign: {xs: 'left', sm: 'left', md: 'center'}}}>
                                Passionate tech folks who understands these challenges are out there seeking to help you manage these challenges.                             </Typography>

                            <Chip avatar={<Avatar sx={{backgroundColor: "white", color: "black"}} > <KeyboardArrowRight /> </Avatar>} sx={{backgroundColor: yellow[600], color: 'black'}} label="Whats the catch?" clickable />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={10} md={5}>
                        <Box display='flex'  alignItems='center' justifyContent='center' >
                            
                                <img src='/images/seekhelp.png'  style={{maxWidth: '100%'}} />
                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        
    )
}