import { Box, CircularProgress, Container, Grow, Stack, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import {  CancelRounded, CheckCircleRounded } from '@mui/icons-material'
import { publicFetch } from '../utils/fetch'


export default function ConfirmAccount() {

    const location = useLocation()
    const parsed = queryString.parse(location.search);
    const {confirmation_token} = parsed
    const [confirmed, setConfirmed] = useState(false)
    const [failed, setFailed] = useState(false)


    publicFetch.get(`api/v1/auth/confirmation?confirmation_token=${confirmation_token}`).then(res => {
        
        setConfirmed(true)
    }).catch(err => {
        
        setConfirmed(true)
        setFailed(true)
    })

    return (
        <Box>
            {
                confirmed ?
                <AccountConfirmed /> :
                failed ? 
                <Failed /> :

                <Confirming />
            }
          
        </Box>
        
    )
}

 function AccountConfirmed(){


    return (
        <Grow in={true} >

            <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: 'center', minHeight: "50vh", flexDirection: "column" }}>
                <Container maxWidth="md" >

                <Stack  width="100%" rowGap={2} >
                    <Typography variant="h4" fontWeight={900}>Congratulations!</Typography>
                    <Typography variant="h5" fontWeight={600}> Your Email has been successfully confirmed</Typography>
                
                    <Box >

                        <CheckCircleRounded fontSize='large' color='success' sx={{width: 80, height: 80}} />
                    </Box>
                    
                    <Box my={2} width="100%" display="flex" justifyContent="center" >
                        <Box width={200} p={2} to="/login" component={Link} sx={{backgroundColor: blue[700], textDecoration: 'none', color: "white", borderRadius: "25px"}} >
                            Login to continue
                        </Box>
                        
                    </Box>


                
                    
                </Stack>

                </Container>
                
            </Box>
        </Grow>
    )
}


function Failed(){


    return (
        <Grow in={true} >

            <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: 'center', minHeight: "50vh", flexDirection: "column" }}>
                <Container maxWidth="md" >

                <Stack  width="100%" rowGap={2} >
                    <Typography variant="h4" fontWeight={900}>Failed to confirm!</Typography>
                    <Typography variant="h5" fontWeight={600}> Something went wrong</Typography>
                
                    <Box >

                        <CancelRounded fontSize='large' color='error' sx={{width: 80, height: 80}} />
                    </Box>
                    
                    <Box my={2} width="100%" display="flex" justifyContent="center" >
                        <Box mx={1} width={200} p={2} to="/login" component={Link} sx={{backgroundColor: blue[700], textDecoration: 'none', color: "white", borderRadius: "25px"}} >
                            Login to continue
                        </Box>

                        <Box mx={1} width={200} p={2} to="/" component={Link} sx={{backgroundColor: blue[700], textDecoration: 'none', color: "white", borderRadius: "25px"}} >
                            Visit Homepage
                        </Box>
                    </Box>


                
                    
                </Stack>

                </Container>
                
            </Box>
        </Grow>
    )
}





function Confirming(){


    return (
        <Grow in={true} >

            <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: 'center', minHeight: "50vh", flexDirection: "column" }}>
                <Container maxWidth="md" >

                <Stack  width="100%" rowGap={2} >
                    <Typography variant="h4" fontWeight={900}>Please Wait</Typography>
                    <Typography variant="h5" fontWeight={600}>Confirming</Typography>
                
                    <Box >
                        <CircularProgress />
                    </Box>
                 
                    
                </Stack>

                </Container>
                
            </Box>
        </Grow>
    )
}



