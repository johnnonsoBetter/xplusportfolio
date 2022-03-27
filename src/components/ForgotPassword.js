import { Box, CircularProgress, Container, Grow, Stack, TextField, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import {  CheckCircleRounded } from '@mui/icons-material'
import { AuthContext } from '../context/AuthContext'
import { publicFetch } from '../utils/fetch'
import { LoadingButton } from '@mui/lab'


export default function ForgotPassword() {

    const location = useLocation()
    const parsed = queryString.parse(location.search);
    const {confirmation_token} = parsed
    const [confirmed, setConfirmed] = useState(false)
    const {authContext} = useContext(AuthContext)

    // publicFetch.get(`api/v1/auth/confirmation?confirmation_token=${confirmation_token}`).then(res => {
    //     console.log("Confirmed")
    //     setConfirmed(true)
    // }).catch(err => {
    //     console.log(err)
    //     setConfirmed(true)
    // })

    console.log(parsed)
    return (
        <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: 'center', minHeight: "50vh", flexDirection: "column" }}>
                <Container maxWidth="md" >
                <Box component='img' maxWidth='100%'  my={3} src='/images/xlogo.png' />
                <Stack  width="100%" rowGap={2} >
                    <Typography variant="h6" fontWeight={900}>Forgot Your Password!</Typography>
                    <Typography fontWeight={500}> To reset your password, type the email address you used to sign into your xplusportfoliio account</Typography>
                
                   
                    <Box  my={2} width="100%" display="flex" justifyContent="center" >
                        <Box  p={2} component='form'  >
                            <TextField label="Email Address" variant='outlined' fullWidth />
                            <LoadingButton type='submit' variant='contained' sx={{my: 2}} >
                                Reset Password
                            </LoadingButton>
                        </Box>
                    </Box>
                
                    
                </Stack>

                </Container>
                
            </Box>
        
    )
}

 function ForgotPasswordMenu(){


    return (
        <Grow in={true} >

            
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
