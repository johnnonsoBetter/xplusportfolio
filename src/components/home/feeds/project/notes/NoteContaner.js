import { Avatar, Box, Grid } from '@mui/material'
import React from 'react'  
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


export default function NoteContainer() {


    return (
        <Grid container spacing={3} >
            <Grid item xs={6} sm={4} md={4} >

                <Box display='flex' position='relative' component={Link}  justifyContent='center' >
                    <img style={{maxWidth: '50%'}} src='/images/notes.png' />
                    {/* <p style={{"text-align:center;"}}><strong>Making the application to have all pleawse </strong></p> */}

                    <Avatar sx={{ width: 32, height: 32, position: 'fixed' }}  src='/images/pics.jpg' />
                </Box>
            </Grid>

            <Grid item xs={6} sm={4} md={4} >
                <Box display='flex' position='relative' component={Link}  justifyContent='center' >
                    <img style={{maxWidth: '50%'}} src='/images/notes.png' />
                    <Avatar sx={{ width: 32, height: 32, position: 'fixed' }}  src='/images/pics.jpg' />
                </Box>
            </Grid>

            <Grid item xs={6} sm={4} md={4} >
                <Box display='flex' position='relative' component={Link}  justifyContent='center' >
                    <img style={{maxWidth: '50%'}} src='/images/notes.png' />
                    <Avatar sx={{ width: 32, height: 32, position: 'fixed' }}  src='/images/pics.jpg' />
                </Box>
            </Grid>

            <Grid item xs={6} sm={4} md={4} >
                <Box display='flex' position='relative' component={Link}  justifyContent='center' >
                    <img style={{maxWidth: '50%'}} src='/images/notes.png' />
                    <Avatar sx={{ width: 32, height: 32, position: 'fixed' }}  src='/images/pics.jpg' />
                </Box>
            </Grid>
        </Grid>
    )
}