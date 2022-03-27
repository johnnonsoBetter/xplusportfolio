import React, { useState, useContext, useEffect} from 'react'
import {  Box, Button,Grid, InputAdornment, InputBase, Paper, Skeleton, TextField } from '@mui/material'
import UploadLoading from '../../mobile/creat_project/UploadLoading'
import * as yup from 'yup';
import { useFormik } from 'formik';
import {AuthContext} from '../../../../context/AuthContext'
import { FetchContext } from '../../../../context/FetchContext';





const validationSchema = yup.object({
    name: yup
    .string('Enter your full name')
    .required('full name is required'),
    avatar_url: yup
    .string('avatar_url').nullable(),
    github_url: yup
    .string('github url').nullable(),
      
  });

export default function EditProfile() {

    const [done, setDone] = useState(false)
    const [loadingBtn, setLoadingBtn] = React.useState(false)
    const {authState, setSomethingWentWrong} = useContext(AuthContext)
    const {authAxios} = useContext(FetchContext)
    const {userInfo} = authState
    const {slug} = JSON.parse(userInfo)
    const [name, setName] = useState(null)
    const [githubUrl, setGithubUrl] = useState(null)
    const [avatarUrl, setAvatarUrl] = useState(null)
    const [loading, setLoading] = useState(false)
    const [initialValues, setInitialValues] = useState({})




    useEffect(() => {

        document.title = "Edit Profile"
        setLoading(true)
        authAxios.get(`api/v1/users/${slug}`).then(res => {
          
            const {user} = res.data 
            const {github_url, avatar_url, name} = user
            setGithubUrl(github_url)
            setAvatarUrl(avatar_url)
            setName(name)

            const newInitialValue = Object.assign({}, initialValues)
            newInitialValue.github_url = github_url
            newInitialValue.avatar_url = avatar_url 
            newInitialValue.name = name 

            setInitialValues(newInitialValue)
        }).catch(err => {
            setSomethingWentWrong(true)
        })


        return () => {
            setSomethingWentWrong(false)
            setLoading(true)
        }
    }, [slug])



    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
          
          console.log(values)
        },
    });
    


    return (
        <Box px={2} >
        
        <form onSubmit={formik.handleSubmit} >
            <Box display='flex' justifyContent='flex-end' >
                        <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        
                        inputComponent={Button}
                        
                        size="small"
                        sx={{p: 0, border: 'none', maxWidth: 200}}
                        type='file' accept='image/*' className="form-control" 
                        />

            </Box>
            <Box my={1} component='img'  sx={{ objectFit: 'cover', borderRadius: "7px", minWidth: {xs: '100%', sm: 400, md: 540}}} width='100%' maxWidth='100%' maxHeight={150} height={150} src='/images/cover_default.png' /> 

            <Box mt={2}>

                <Grid container spacing={3} justifyContent='center' >
                    <Grid item xs={12} sm={6} >
                        <Box >
                       
                            <TextField 
                                
                                variant='outlined' 
                                label="full name" 
                                fullWidth 
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}

                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <Box >
                        <TextField 
                                
                                variant='outlined' 
                                label="avatar url" 
                                fullWidth 
                                name='avatar_url'
                                value={formik.values.avatar_url}
                                onChange={formik.handleChange}
                                error={formik.touched.avatar_url && Boolean(formik.errors.avatar_url)}
                                helperText={formik.touched.avatar_url && formik.errors.avatar_url}

                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <Box >
                        <TextField 
                                
                                variant='outlined' 
                                label="github url" 
                                fullWidth 
                                name='github_url'
                                value={formik.values.github_url}
                                onChange={formik.handleChange}
                                error={formik.touched.github_url && Boolean(formik.errors.github_url)}
                                helperText={formik.touched.github_url && formik.errors.github_url}

                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} >
                        <Box >
                            

                            {
                                loadingBtn ?   
                                <UploadLoading done={false} />
                                :
                                <Button type='submit' variant='contained' fullWidth > Update </Button>
                            }
                        </Box>
                    </Grid>
                </Grid>



            </Box>
            

        </form>
        </Box>

    )
}



const Loader = () => {
    

    return (
        <Box  mx={1}   >
            <Box position="relative" >

            
                <Skeleton width="100%" height={250}
                sx={{
                    height: 150,
                    display: 'block',
                    maxWidth: "100%",
                    overflow: 'hidden',
                    width: '100%',
                    borderRadius: "7px"
                    }}
                />

            </Box>
            

            <Box  >
                <Skeleton type='text' width="60%" /> 
                <Skeleton type='text' width="40%" /> 
                
            </Box>
            <Box mt={1} mb={2} >
                <Skeleton type='text' width="60%" /> 
                
                
            </Box>

            </Box>
    )
}
