import React from 'react'
import { Paper,Grid, Typography, Chip, Box, Avatar } from '@mui/material'
import { orange, pink, purple } from '@mui/material/colors';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function Challenging() {

    return (


        <Box m={2} >
        <Grid container  spacing={2}>
            

            <Grid item xs={12} sm={10} md={5} >
                <Box display='flex'  alignItems='flex-start' sx={{justifyContent: {xs: 'flex-start', sm: 'flex-start', md: 'center'}}} flexDirection='column' >
                    <Typography marginTop lineHeight='1.3'  fontWeight={700} fontFamily='Quicksand'  sx={{color: '#222d39', textAlign: {xs: 'left', sm: 'left', md: 'center'}, fontSize: {xs: '1.7rem', sm: '1.8'}}}>
                                
                                Building useful project requires effort and time, It's difficult and challenging!
                            </Typography>

                            <Typography marginTop   marginBottom  fontSize='1.1rem' maxWidth="70%" fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39', textAlign: {xs: 'left', sm: 'left', md: 'center'}}}>
                                Sometimes building useful projects can seem challenging to build, maybe because of lack of ideas, skills and motivation.
                            </Typography>

                            <Chip avatar={<Avatar sx={{backgroundColor: "white", color: "black"}} > <KeyboardArrowRight /> </Avatar>} sx={{backgroundColor: pink[600], color: 'white'}} label="How about this?" clickable />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={5} >
                        <Box display='flex' minHeight={450} alignItems='flex-start' justifyContent='center' >
                            
                                <img src='/images/frustration.png'  style={{maxWidth: '100%', borderRadius: '15px'}} />
                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        
    )
}