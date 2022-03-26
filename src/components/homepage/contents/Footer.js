import { FavoriteRounded } from '@mui/icons-material'
import { Chip, Grid, Typography } from '@mui/material'
import { blue, deepPurple, purple, red } from '@mui/material/colors'
import { dark } from '@mui/material/styles/createPalette'
import { Box } from '@mui/system'
import React from 'react'

export default function Footer() {


    return (
        <Box >


            <Grid container justifyContent='center'>
                <Grid item xs={12} sm={7}  >
                    <Box display='flex' py={3} justifyContent='center' alignItems='center' flexDirection='column'>
                        <Typography marginBottom  maxWidth="80%" fontSize='2rem' lineHeight='1.3' fontWeight={550} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                        
                            Would like to take your portfolio to the next level?
                        </Typography>
                        <Box>
                        <Chip size='large' sx={{backgroundColor: red[600], color: 'white'}} label="Lets get started" clickable />

                        </Box>
                    </Box>
                    
                </Grid>


                <Grid item xs={12} sm={6} >
                    <Box display='flex' py={3} justifyContent='center' alignItems='center' flexDirection='column'>
                        <Typography marginBottom display='flex'  justifyContent='center' alignItems='center'   fontSize='1.7rem' lineHeight='1.3' fontWeight={550} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                        
                            Built with love for the tech community  <FavoriteRounded sx={{mx: 1}}  fontSize='1.7rem' color='error' />
                        </Typography>
                        <Box>

                        
                    
                        </Box>
                    </Box>
                    
                </Grid>
            </Grid>

            

        </Box>
    )
}