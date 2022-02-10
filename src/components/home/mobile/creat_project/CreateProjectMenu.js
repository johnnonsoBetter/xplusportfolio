import { LoadingButton, LocalizationProvider, DatePicker } from '@mui/lab'
import {  Box, Divider, Typography, Avatar, TextField, Chip, IconButton, CircularProgress, Grid, Autocomplete, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import {Paper} from '@mui/material/';
import InputBase from '@mui/material/InputBase';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FetchContext } from "../../../../context/FetchContext";
import { AddPhotoAlternateRounded, CloseRounded } from '@mui/icons-material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as yup from 'yup';
import { useFormik } from 'formik';
import isPast from 'date-fns/isPast'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import nextDay from 'date-fns/nextDay'
import MultipleImageUpload from './MultipleImageUpload'
import { AuthContext } from '../../../../context/AuthContext';




const validationSchema = yup.object({
    title: yup 
      .string("Please enter title")
      .required("Title is required"),
    description: yup
      .string("Please enter description")
      .required("Description is required"),
    githubLink: yup 
       .string("Please enter github link")
       .required("Github link is required"),
    liveLink: yup 
      .string("Please enter a live link")
      .required("Live link is required"),
    anticipation_id: null
});



 


function Input(props) {
  const {formik, img, textColor} = props
  return (
    <Paper
      component="form"
      sx={{  my: 2,  width: "100%", justifyContent: "center", display: 'flex', alignItems: 'center'}}
      autoComplete='off'
      elevation={3}
    >
    
      <InputBase
        
        sx={{ flex: 1, height: "100%", 
        backgroundColor: 'rgba(0,0,0,0.5)',
        pl: 1,
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        color: textColor,
        minHeight: 400, fontWeight: "bolder", textTransform: "capitalize", fontSize: "1.6em", width: "100%", }}
        placeholder="What are you working on?"
        type='text'
        inputProps={{ 'aria-label': 'search google maps' }}
        multiline
        fullWidth
        color='white'
        autoFocus
        
        type="body"
        name="body"
        value={formik.values.body}
        onChange={formik.handleChange}
        error={formik.touched.body && Boolean(formik.errors.body)}
        helperText={formik.touched.body && formik.errors.body}
        
      />
    
    </Paper>
  );
}




const Loader = () => {

  return (
    <Box minHeight={500} sx={{minWidth: {md: 400}}} display='flex' alignItems='center' justifyContent='center' width='100%'  >
        <CircularProgress />
    </Box>
  )
}










export default function CreateProjectMenu() {

  const {authAxios} = useContext(FetchContext)
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  const [dueDate, setDueDate] = useState(nextDay(new Date(), -1))
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [images, setImages] = useState([])
  const [imageURLs, setImageURLs] = useState([])
  const [technologies, setTechnologies] = useState([])
  const [tools, setTools] = useState([])

 
  const {setSomethingWentWrong} = useContext(AuthContext)
 


  const formik = useFormik({
    initialValues: {
      title: '',
      liveLink: '',
      githubLink: '',
      description: '',
      anticipation_id: null
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)



      var postData = JSON.stringify(values);
      var formData = new FormData();
      formData.append("project", postData);
      formData.append('tools', tools)
      
      images.forEach((img , index) => formData.append('image' + index, img))

      authAxios.post('api/v1/projects', formData).then(res => {
        console.log(res)
        setDueDate(nextDay(new Date(), -1))
        setLoadingBtn(false)
        formik.resetForm()
      }).catch(err => {
        console.log(err)
        setLoadingBtn(false)
      })
    
      
    },
  });

  

  useEffect(() => {

   
    authAxios.get('api/v1/technologies').then(res => {

      const {data} = res
    
      setTechnologies(data)
      setLoading(false)

    }).catch(err => {
      setSomethingWentWrong(true)
    })
  }, [])

  


    

    return (
        <Box position="relative" height="100%" sx={{width: {sm: 550}}} >
          <Box display='flex' justifyContent='space-between' alignItems='center' >
              <Typography variant='h6' mx={2}  color="ButtonText" fontWeight={700}>
                New Project
              </Typography>
             

              <Box px={2} my={1} >
              <IconButton  onClick={() => history.goBack() } >
                <CloseRounded />
              </IconButton>
              </Box>
              
            </Box>
          {

            loading ?
           <Loader />:


            <>
            
            
            <Divider variant='horizontal' />
            <form onSubmit={formik.handleSubmit} >

                <Grid container>
                    <Grid item xs={12} >
                        <Box  mx={2} my={1} >

                            <Box display="flex" alignItems="center"   justifyContent="space-between" >
                                <TextField 
                                  fullWidth
                                  label="Title" 
                                  variant="outlined"
                                  type="text"
                                  name="title"
                                  value={formik.values.title}
                                  onChange={formik.handleChange}
                                  error={formik.touched.title && Boolean(formik.errors.title)}
                                  helperText={formik.touched.title && formik.errors.title}
                                 
                                 />
                                
                            </Box>

                        </Box>

                    </Grid>

                    <Grid item xs={6} >
                        <Box  mx={2} my={1} >

                            <Box display="flex" alignItems="center"   justifyContent="space-between" >
                            <TextField
                                fullWidth
                                label="Live Link" 
                                variant="outlined"
                                type="text"
                                name="liveLink"
                                value={formik.values.liveLink}
                                onChange={formik.handleChange}
                                error={formik.touched.liveLink && Boolean(formik.errors.liveLink)}
                                helperText={formik.touched.liveLink && formik.errors.liveLink}
                               
                               />
                                
                            </Box>

                        </Box>

                    </Grid>

                    <Grid item xs={6} >
                        <Box  mx={2} my={1} >

                            <Box display="flex" alignItems="center"   justifyContent="space-between" >
                              <TextField
                                  fullWidth
                                  label="Github Link" 
                                  variant="outlined"
                                  type="text"
                                  name="githubLink"
                                  value={formik.values.githubLink}
                                  onChange={formik.handleChange}
                                  error={formik.touched.githubLink && Boolean(formik.errors.githubLink)}
                                  helperText={formik.touched.githubLink && formik.errors.githubLink}
                                
                                />
                                
                            </Box>

                        </Box>

                    </Grid>
                
                    <Grid item xs={12}  >
                         <Box  mx={2} my={1} >

                                    
                            <Box display="flex" alignItems="center"   justifyContent="space-between" >
                              <TextField
                                  fullWidth
                                  multiline
                                  rows={4}
                                  label="Description" 
                                  variant="outlined"
                                  type="text"
                                  name="description"
                                  value={formik.values.description}
                                  onChange={formik.handleChange}
                                  error={formik.touched.description && Boolean(formik.errors.description)}
                                  helperText={formik.touched.description && formik.errors.description}
                                
                                />
                            </Box>


                            </Box>

                    </Grid>

                    <Grid item xs={12}  >
                         <Box  mx={2} my={1} >

                                    
                            <Box display="flex" alignItems="center"   justifyContent="space-between" >
                                <Autocomplete
                                    multiple
                                    id="tags-outlined"
                                    options={technologies}
                                    getOptionLabel={(option) => option.name}
                                    onChange={(event, value) => setTools(value.map(t => t.id))}
                                    filterSelectedOptions
                                    sx={{minWidth: 250}}
                                    
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        label="Select tools"
                                        placeholder="Select tools you implemented project with"
                                        
                                    />
                                    )}
                                />
                            </Box>


                            </Box>

                    </Grid>

                    

                  

                    <Grid item xs={12} >
                      <MultipleImageUpload images={images} imageURLs={imageURLs} setImages={setImages} setImageURLs={setImageURLs} />
                    </Grid>
                </Grid>

            <Box m={2}>
                <Box mx={2} my={1} >
                    <Button type='submit' fullWidth variant='contained' >Create Project</Button>
                </Box>
            </Box>
            </form>
            </>

          }
        </Box>
    )
}





