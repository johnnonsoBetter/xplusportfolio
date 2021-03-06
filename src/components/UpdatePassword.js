import { LoadingButton } from '@mui/lab'
import { Alert, Avatar, Box, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Snackbar, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { publicFetch } from '../utils/fetch';
import { AuthContext } from '../context/AuthContext';
import { Redirect } from 'react-router-dom';
import { BadgeRounded, Visibility, VisibilityOff } from '@mui/icons-material';
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
    .string('Enter your name')
    
    .required('Name is required'),
    password: yup
      .string('Enter your password')
      .min(0, 'Password should be of minimum 7 characters length')
      .required('Password is required'),
  });
  
  

export default function UpdatePassword(){

  const [loginLoading, setLoginLoading] = useState(false)
  const [redirectOnLogin, setRedirectOnLogin] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const {setAuthState} = useContext(AuthContext)
  const [checked] = useState(false)
  const [ setOpenSnack] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [snackInfo, setSnackInfo] = useState({
    message: '',
    severity: ''
  })
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
        
        const token = response.headers['access-token']
        const expiry = response.headers['expiry']
        const client = response.headers['client']
        const uid = response.headers['uid']
        const userInfo = response.data['data']  

        window.location.href = '/xpo'
        setAuthState({token, expiresAt: expiry, userInfo, client, uid, rememberDevice: checked})
        setRedirectOnLogin(true)
     
          
      }).catch((err) => {                                             
        
       
        const {status, data} = err.response
        const {errors} = data
        const newSnackInfo = Object.assign(snackInfo, {})
        newSnackInfo.message = "Something went wrong"
        setSnackInfo(newSnackInfo)
        setLoginLoading(false)
        setLoginError(true)

      })
    }

    useEffect(() => {

      return () => {
        setRedirectOnLogin(false)
      }
    }, [])


    return (
        <>
        {redirectOnLogin && <Redirect to="/xpo" /> }
        <Container maxWidth="xs" >
          <Snackbar open={loginError} anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={2000} onClose={handleClose}>
              <Alert onClose={handleClose} severity='error'  sx={{ width: '100%' }}>
                {snackInfo.message}
                
              </Alert>
            </Snackbar>
            <Box  sx={{ display: "flex", justifyContent: "center", minHeight: "100vh", flexDirection: "column" }} >
            <form onSubmit={formik.handleSubmit}> 
                <Box  width="100%">
                    <Paper elevation={matches ? 0 : 2} sx={{backgroundColor: "inherit", py: 3}}  >
                        
                        <Box p={2} textAlign="center"  >
                             <Typography variant="h6" sx={{letterSpacing: "0em", fontWeight: "450"}}> Change your password</Typography>

                        </Box>

                       

                        

                        <Box p={2} >
                        <FormControl sx={{width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
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

                        <Box p={2} >
                        <FormControl sx={{width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
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

                        
                        <Box mb={4}  mx={3} display="flex" justifyContent="space-between">
                          <Typography variant="body2" textAlign="center" to="/xpo#login" component={Link} sx={{color: blueGrey[500], textDecoration: "none"}}  > Login </Typography>
                          <Typography variant="body2" to="/sign_up" textAlign="center" component={Link} sx={{color: blueGrey[500], textDecoration: "none"}}  > Sign Up </Typography>
                          
                        </Box>

                       

                        <Box p={2} >
                            <Container maxWidth="xs" >
                            <LoadingButton variant="contained"  loading={loginLoading}  type="submit" fullWidth  >
                                Change my password
                            </LoadingButton>
                            </Container>
                           
                        </Box>
                    
                    </Paper>
                
                </Box>
                </form>
            </Box>
        </Container>
        </>
    )
}