import { Box, Grid } from '@mui/material'
import React from 'react'
import Member from './Member'


export default function MemberList() {


    return (
        <Box >
           <Grid container spacing={1} >
             
                <Grid item xs={6} sm={4} md={4}  >
                    <Member />
                </Grid>

                <Grid item xs={6} sm={4} md={4}  >
                    <Member />
                </Grid>

                <Grid item xs={6} sm={4} md={4}  >
                    <Member />
                </Grid>
                <Grid item xs={6} sm={4} md={4}  >
                    <Member />
                </Grid>

                <Grid item xs={6} sm={4} md={4}  >
                    <Member />
                </Grid>

                <Grid item xs={6} sm={4} md={4}  >
                    <Member />
                </Grid>
                <Grid item xs={6} sm={4} md={4}  >
                    <Member />
                </Grid>

                <Grid item xs={6} sm={4} md={4}  >
                    <Member />
                </Grid>

                <Grid item xs={6} sm={4} md={4}  >
                    <Member />
                </Grid>
                  
           </Grid>
        </Box>
    )
}