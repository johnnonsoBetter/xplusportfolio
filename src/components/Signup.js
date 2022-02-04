import { LoadingButton } from '@mui/lab'
import { Alert, Avatar, Box, Container, FormControl, Grow, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { publicFetch } from '../utils/fetch';
import { AuthContext } from '../context/AuthContext';
import { Redirect } from 'react-router-dom';
import { BadgeRounded, InboxRounded, MarkEmailReadRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    name: yup
    .string('Enter your full name')
    
    .required('full name is required'),
    password: yup
      .string('Enter your password')
      .min(0, 'Password should be of minimum 7 characters length')
      .required('Password is required'),
  });
  
  

export default function Signup(){

  const [loginLoading, setLoginLoading] = useState(false)
  const [redirectOnLogin, setRedirectOnLogin] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const {setAuthState, setSomethingWentWrong} = useContext(AuthContext)
  const [checked] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [successfull, setSuccessfull] = useState(false)
  const [snackInfo, setSnackInfo] = useState({
    message: '',
    severity: ''
  })
  const [setOpenSnack] = useState(false)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));


  const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
        name: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        submitCredentials(values)
        
      },
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };


  

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


    const submitCredentials = (values) => {

      setLoginLoading(true)
        
      publicFetch.post(
        `api/v1/auth/`,
        values
      ).then((response) => {

       
        setSuccessfull(true)
        
     
          
      }).catch((err) => {                                             
        
       
        const {status, data} = err.response
        const {errors} = data
        console.log(errors)
        const newSnackInfo = Object.assign(snackInfo, {})
        setSnackInfo(newSnackInfo)
        setLoginLoading(false)
        setLoginError(true)
        newSnackInfo.message = errors['full_messages'][0]
        
        setSnackInfo(newSnackInfo)


      })
    }

    useEffect(() => {

      return () => {
        setRedirectOnLogin(false)
        setSuccessfull(false)
      }
    }, [])


    return (
        <>
        <Container maxWidth="xs" >
            <Snackbar open={loginError} anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={2000} onClose={handleClose}>
              <Alert onClose={handleClose} severity='error'  sx={{ width: '100%' }}>
                {snackInfo.message}
                
              </Alert>
            </Snackbar>
          {
            successfull ? <SignUpSuccessfull /> :

          
            <Box  sx={{ display: "flex", justifyContent: "center", minHeight: "100vh", flexDirection: "column" }} >
            <form onSubmit={formik.handleSubmit}> 
                <Box  width="100%">
                    <Paper elevation={matches ? 0 : 2} sx={{backgroundColor: "inherit", py: 3}}  >
                        <Box px={2} textAlign="center" display="flex" justifyContent="center" m={5} marginBottom={0} >
                        <Box px={2}  textAlign="center" display="flex" justifyContent="center" m={5} marginBottom={0} >
                           
                           <Box component='img' src='/images/logo.png' />

                       </Box>

                        </Box>
                        <Box p={2} textAlign="center"  >
                             <Typography variant="h6" sx={{letterSpacing: "0em", fontWeight: "450"}}> Please Signup!</Typography>

                        </Box>

                        <Box p={2} >
                             <TextField 
                                fullWidth  
                                label="Name"  
                                id="fullWidth"
                                type="name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                             />

                        </Box>


                        <Box p={2} >
                             <TextField 
                                fullWidth  
                                label="Email"  
                                id="fullWidth"
                                type="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                             />

                        </Box>

                        <Box p={2} >
                        <FormControl sx={{width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                              
                                  name="password"
                                  fullWidth
                                  type={showPassword ? 'text' : 'password'}
                                  onChange={formik.handleChange}
                                  error={formik.touched.email && Boolean(formik.errors.password)}
                                  helperText={formik.touched.email && formik.errors.password}
                                  value={formik.values.password}  
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                  label="Password"
                                />
                            </FormControl>

                        </Box>

                        
                        <Box mb={4}  mx={1} display="flex" justifyContent="center">
                          <Typography variant="body2" textAlign="center" to="/xpo#login" component={Link} sx={{color: blueGrey[500], textDecoration: "none"}}  >  Already a member ? Login </Typography>
                          
                        </Box>

                       

                        <Box p={2} >
                            <Container maxWidth="xs" >
                            <LoadingButton variant="contained"  loading={loginLoading}  type="submit" fullWidth  >
                                Sign Up
                            </LoadingButton>
                            </Container>
                           
                        </Box>
                    
                    </Paper>
                
                </Box>
                </form>
            </Box>
        }
        </Container>

        </>
    )
}



function SignUpSuccessfull(){


  return (
      <Grow in={true} >

          <Box width="100%" sx={{ display: "flex", justifyContent: "center", alignItems: 'center', minHeight: "50vh", flexDirection: "column" }}>
              <Container maxWidth="md" >

              <Stack  width="100%" rowGap={2} >
                  <Typography variant="h5" fontWeight={900}>Sign up successfull!</Typography>
                  <Typography variant="h6" fontWeight={600}> You have been sent a confirmation email</Typography>
              
                  <Box >
                      <MarkEmailReadRounded fontSize='large' color='success' sx={{width: 80, height: 80}} />
                  </Box>

                  <Typography variant="h6" fontWeight={600}> Check Your Inbox</Typography>
              </Stack>

              </Container>
              
          </Box>
      </Grow>
  )
}

