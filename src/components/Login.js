import { LoadingButton } from '@mui/lab'
import { Alert, Box, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Snackbar, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { publicFetch } from '../utils/fetch';
import { AuthContext } from '../context/AuthContext';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';
import { useTheme } from '@emotion/react';
import SlideShow from './shared/SlideShow';


const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(0, 'Password should be of minimum 7 characters length')
      .required('Password is required'),
  });
  
  

export default function Login(){

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [loginLoading, setLoginLoading] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const {setAuthState} = useContext(AuthContext)
  const [checked] = useState(false)
  const [setOpenSnack] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [snackInfo, setSnackInfo] = useState({
    message: '',
    severity: ''
  })

  const formik = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {

        console.log(values)
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


  useEffect(() => {

    document.title = "Login" 


    return () => document.title = "Xplusportfolio"

  }, [])





    const submitCredentials = (values) => {

      setLoginLoading(true)
        
      publicFetch.post(
        `/api/v1/auth/sign_in`,
        values
      ).then((response) => {
        
        const token = response.headers['access-token']
        const expiry = response.headers['expiry']
        const client = response.headers['client']
        const uid = response.headers['uid']
        const userInfo = response.data['data']
       
         window.location.href = '/xpo'
         setAuthState({token, expiresAt: expiry, userInfo, client, uid, rememberDevice: checked})
       
      }).catch((err) => {                                             
        
       
        const {status, data} = err.response
        const {errors} = data
        const newSnackInfo = Object.assign(snackInfo, {})
        

        if (status === 401 && errors[0] === "Invalid login credentials. Please try again."){
          newSnackInfo.message = errors[0]
        }else{
          newSnackInfo.message = "Something went wrong"
        }

        setSnackInfo(newSnackInfo)


        setSnackInfo(newSnackInfo)
        setLoginLoading(false)
        setLoginError(true)

      })
    }


    return (
        <>
        
        <Container maxWidth="lg"
        
        style={{  
      
            
          backgroundColor: "#f5f5f5",
          backgroundPosition: 'center',
          backgroundImage: 'url(/images/homepage_b.png)',
      
          backgroundRepeat: 'repeat'
      }}      
        >
            <Snackbar open={loginError} anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={2000} onClose={handleClose}>
              <Alert onClose={handleClose} severity='error'  sx={{ width: '100%' }}>
                {snackInfo.message}
                
              </Alert>
            </Snackbar>


            <Box display='flex'  sx={{height: "calc(99vh - 4px)", overflow: 'auto'}} >

            <Grid  container alignItems='center'  >
                <Grid item xs={12} sm={12} md={7} sx={{display: {xs: 'none', sm: 'none', md: 'block'}}} >
                      <SlideShow message="Login" />
                </Grid>

                <Grid item xs={12} sm={12} md={5} lg={4}  >

                
                <Box sx={{  justifyContent: "center", flexDirection: "column", backgroundColor: '#f5f5f5'  }}  >
                <form onSubmit={formik.handleSubmit}> 
                    <Box  width="100%">
                        <Paper elevation={0} sx={{backgroundColor: "inherit", p: 3}}   >
                          
                            <Box p={2}  textAlign="center" display="flex" justifyContent="center" m={5} marginBottom={0} >
                                <Link to='/' >
                                  <Box  component='img' src='/images/logo.png' />
                                </Link>
                              

                            </Box>
                            <Box p={2} textAlign="center"  >
                                <Typography variant="h6" sx={{letterSpacing: "0em", fontWeight: "450"}}> Please Login!</Typography>

                            </Box>
                            <Box py={2} >
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

                            <Box py={2} >
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

                            <Box mb={4}  mx={1} display="flex" justifyContent="space-between">
                              <Typography variant="body2" to="/xpo#reset-password" textAlign="center" component={Link} sx={{color: blueGrey[500], textDecoration: "none"}}  > Forgot Password? </Typography>
                              <Typography variant="body2" to="/sign_up" textAlign="center" component={Link} sx={{color: blueGrey[500], textDecoration: "none"}}  > Sign Up </Typography>
                              
                            </Box>

                          
                            <Box my={2} >
                                
                                
                                <LoadingButton variant="contained"  loading={loginLoading}  type="submit" fullWidth  >
                                    Login
                                </LoadingButton>
                              
                              
                            </Box>
                        
                        </Paper>
                    
                    </Box>
                    </form>
                  </Box>
              </Grid>

            </Grid>



            </Box>

            
        </Container>
        </>
    )
}