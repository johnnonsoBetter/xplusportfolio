import { LoadingButton } from '@mui/lab'
import {  Box, Divider, Typography, TextField, CircularProgress, Grid, Autocomplete} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import 'react-multi-carousel/lib/styles.css';
import { FetchContext } from "../../../../context/FetchContext";
import { ArrowBackIosRounded } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as yup from 'yup';
import { useFormik } from 'formik';
import MultipleImageUpload from './MultipleImageUpload'
import { AuthContext } from '../../../../context/AuthContext';
import MyAnticipations from './MyAnticipations';
import AnticipationToggle from './AnticipationToggle';
import UploadLoading from './UploadLoading';

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
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [images, setImages] = useState([])
  const [imageURLs, setImageURLs] = useState([])
  const [technologies, setTechnologies] = useState([])
  const [tools, setTools] = useState([])
  const [checked, setChecked] = useState(false)
  const [anticipationId, setAnticipationId] = useState(null)
  const [done, setDone] = useState(false)
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
      
      const newValues = Object.assign({},values)
      newValues.anticipation_id = anticipationId
      if(images.length < 1 || tools.length < 1)
        return


      setLoadingBtn(true)
  
      var postData = JSON.stringify(newValues);
      var formData = new FormData();
      formData.append("project", postData);
      formData.append('tools', tools)
      
      images.forEach((img , index) => formData.append('image' + index, img))

      authAxios.post('api/v1/projects', formData).then(res => {
        
        setDone(true)
        setLoadingBtn(false)
        setImageURLs([])
        setImages([])
        setTools([])
        formik.resetForm()
        history.goBack()
      }).catch(err => {
        
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
         

            <Box  display='flex' alignItems='center' justifyContent='flex-start'>


              <Box p={1} sx={{color: "black", textDecoration: 'none'}} display='flex' component={Link} alignItems='center' >
                  
                  <ArrowBackIosRounded onClick={()=> history.goBack()} fontSize='small' />

                  <Typography mx={1} color="ButtonText" fontWeight={700}>
                  
                    {checked ? "Fulfill Anticipation" : "New Project"}
                  </Typography>
                  
              </Box>
              <AnticipationToggle checked={checked} setChecked={setChecked} />
 


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

                            <Typography variant='body2' > Ensure that your project does not block an iframe</Typography>
                        </Box>

                    </Grid>


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

                    <Grid item xs={12}  >
                        {
                          checked && 
                          <MyAnticipations anticipationId={anticipationId} setAnticipationId={setAnticipationId} openAnticipationList={checked}  />

                        }

                    </Grid>

                    

                  

                    <Grid item xs={12} >
                      <MultipleImageUpload images={images} imageURLs={imageURLs} setImages={setImages} setImageURLs={setImageURLs} />
                    </Grid>
                </Grid>

            <Box m={2}>
                <Box mx={2} my={1} >
                    {
                      loadingBtn ? 
                      <UploadLoading done={done}/> 
                      : 
                      <LoadingButton  type='submit' fullWidth variant='contained' >Create Project</LoadingButton>

                    }
                </Box>
            </Box>
            </form>
            </>

          }
        </Box>
    )
}





