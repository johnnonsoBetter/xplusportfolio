import { LoadingButton } from '@mui/lab'
import { Alert, Avatar, Box, Chip, Container, FormControl, Grid, Grow, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { publicFetch } from '../utils/fetch';
import { AuthContext } from '../context/AuthContext';
import { Redirect } from 'react-router-dom';
import { BadgeRounded, InboxRounded, KeyboardArrowLeftRounded, MarkEmailReadRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { blue, blueGrey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SlideShow from './shared/SlideShow';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    name: yup
    .string('Enter your full name')
    
    .required('full name is required'),
    avatar_url: yup
    .string('avatar_url').nullable(),
    github_url: yup
    .string('github url').nullable(),
    password: yup
      .string('Enter your password')
      .required('Password is required')
      .min(0, 'Password should be of minimum 7 characters length')
      
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
  const history = useHistory()


  const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
        name: '',
        github_url: null,
        avatar_url: null,

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
                      <SlideShow message="Sign Up"/>
                </Grid>

                <Grid item xs={12} sm={12} md={5} lg={4}  >


                {
                    successfull ? <SignUpSuccessfull /> :

                  
                    <Box  position='relative' sx={{ display: "flex", minHeight: "calc(99vh - 4px)", justifyContent: "center", flexDirection: "column", backgroundColor: "#f5f5f5", }} >
                    <Box position='absolute'  right={0} top={20}>
                      <Chip color='info' onClick={() => history.push('/')}  avatar={<Avatar sx={{ backgroundColor: blue[600]}} > <KeyboardArrowLeftRounded sx={{color: "white"}} /> </Avatar>}  label="Visit homepage"  />

                    </Box>
                    <form onSubmit={formik.handleSubmit}> 
                        <Box  width="100%">
                            <Paper elevation={0} sx={{backgroundColor: "inherit", py: 1}}  >
                                <Box px={2} textAlign="center" display="flex" justifyContent="center"  marginBottom={0} >
                                <Box px={2}  textAlign="center" display="flex" justifyContent="center"  marginBottom={0} >
                                  
                                <Link to='/' >
                                  <Box  component='img' src='/images/logo.png' />
                                </Link>

                              </Box>

                                </Box>
                                <Box p={2} textAlign="center"  >
                                    <Typography variant="h6" sx={{letterSpacing: "0em", fontWeight: "450"}}> Please Signup!</Typography>

                                </Box>

                                


                                <Box p={1} >
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

                                <Box p={1} >
                                    <TextField 
                                        fullWidth  
                                        label="Full name"  
                                        id="fullWidth"
                                        type="text"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                    />

                                </Box>

                                <Box p={1} >
                                    <TextField 
                                        fullWidth  
                                        label="github url (optional)"  
                                        id="fullWidth"
                                        type="text"
                                        name="github_url"
                                        value={formik.values.github_url}
                                        onChange={formik.handleChange}
                                        error={formik.touched.github_url && Boolean(formik.errors.github_url)}
                                        helperText={formik.touched.github_url && formik.errors.github_url}
                                    />

                                </Box>


                                <Box p={1} >
                                    <TextField 
                                        fullWidth  
                                        label="avatar url (optional)"  
                                        id="fullWidth"
                                        type="text"
                                        name="avatar_url"
                                        value={formik.values.avatar_url}
                                        onChange={formik.handleChange}
                                        error={formik.touched.avatar_url && Boolean(formik.errors.avatar_url)}
                                        helperText={formik.touched.avatar_url && formik.errors.avatar_url}
                                    />

                                </Box>

                                
                                <Box p={1} >
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

                                
                                <Box mb={2}  mx={1} display="flex" justifyContent="center">
                                  <Typography variant="body2" textAlign="center" to="/xpo#login" component={Link} sx={{color: blueGrey[500], textDecoration: "none"}}  >  Already a member ? Login </Typography>
                                  
                                </Box>

                              

                                <Box p={1} >
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
                  



                </Grid>
            </Grid>

            </Box>
         
        
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

