import { Box, Grid } from '@mui/material'
import React from 'react'
import Member from './Member'
import '../../../App.css'


export default function MemberList({users}) {

    
    return (
        <Box py={1} className="member-container" sx={{width: "100%", scrollbarColor: "red",  height: {sm: "calc(99vh - 60px)", xs: "calc(96vh - 85px)"}, scrollbarWidth: {display: "none"}, overflowY: "auto"}} >
           <Grid container spacing={1} >

               {
                   users.map(user => {

                    return (
                        <Grid key={user.slug} item xs={6} sm={4} md={4}  >
                            <Member user={user} />
                        </Grid>
                    )
                   })
               }
                     
           </Grid>
        </Box>
    )
}