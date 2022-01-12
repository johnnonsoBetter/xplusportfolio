import { Box, Container, Stack, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPageFound(){


    return (
        <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: 'center', minHeight: "50vh", flexDirection: "column" }}>
            <Container maxWidth="md" >

            <Stack  width="100%" rowGap={2} >
                <Typography variant="h1" fontWeight={900}> Oops!</Typography>
                <Typography variant="h5" fontWeight={600}> 404 - PAGE NOT FOUND</Typography>
              
                <Typography variant="h6" > The page you are looking for might have been removed or is temporarily unavialable</Typography>

                
                <Box my={2} width="100%" display="flex" justifyContent="center" >
                    <Box width={200} p={2} to="/xpo" component={Link} sx={{backgroundColor: blue[700], textDecoration: 'none', color: "white", borderRadius: "25px"}} >
                        GO TO HOMEPAGE
                    </Box>
                </Box>
               
                
            </Stack>



            </Container>
            
        </Box>
    )
}