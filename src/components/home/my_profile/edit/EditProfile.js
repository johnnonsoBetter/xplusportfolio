import React, { useState, useContext, useEffect, useRef} from 'react'
import {  Avatar, Box, Button,Grid, IconButton, InputAdornment, InputBase, Paper, Skeleton, TextField, Tooltip } from '@mui/material'
import UploadLoading from '../../mobile/creat_project/UploadLoading'
import * as yup from 'yup';
import { useFormik } from 'formik';
import {AuthContext} from '../../../../context/AuthContext'
import { FetchContext } from '../../../../context/FetchContext';
import { UploadRounded } from '@mui/icons-material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';





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
    const [name, setName] = useState('')
    const [githubUrl, setGithubUrl] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [backcoverUrl, setBackCoverUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const fileRef = useRef(null)
    const [image, setImage] = useState(JSON.parse(null))



    const updateBackgroundPhoto = (e) => {

        e.preventDefault()
        const newImage = e.target.files[0]
        console.log(newImage)
        setImage(newImage)
        setBackCoverUrl(URL.createObjectURL(newImage))
        
    }
 



    useEffect(() => {

        document.title = "Edit Profile"
        setLoading(true)
        authAxios.get(`api/v1/users/${slug}`).then(res => {
          
            const {user} = res.data 
            const {github_url, avatar_url, name, backcover_imgurl} = user
            setBackCoverUrl(backcover_imgurl)
            setGithubUrl(github_url ? github_url : '')
            setAvatarUrl(avatar_url ? avatar_url : '')
            setName(name)
            setLoading(false)
        }).catch(err => {
            setSomethingWentWrong(true)
        })


        return () => {
            setSomethingWentWrong(false)
            setLoading(true)
        }
    }, [slug])

    const openFilePicker = () => {

        const file = fileRef.current

        file.click()
        
    }


    const handleChange = (e) => {

        e.preventDefault()
        let name = e.target.name 

        if(name === 'name') 
            setName(e.target.value)
        else if (name === 'avatar_url')
            setAvatarUrl(e.target.value)
        else if (name === 'github_url')
            setGithubUrl(e.target.value)
    }



    const handleSubmit = (e) => {

        e.preventDefault()
        setLoadingBtn(true)

        if(name === ''){
            setLoadingBtn(false)
            return
        }
             

        const form = new FormData()


        
        form.append('name', name)
        
        if(image)form.append('backcover_imgurl', image)
        form.append('avatar_url', avatarUrl)
        form.append('github_url', githubUrl)


        authAxios.put(`api/v1/users/${slug}`, form).then(res => {
            history.push(`/xpo/my_profile/${slug}`)
        }).catch(err => {
            setLoadingBtn(false)
            setSomethingWentWrong(true)
        })

    }


    return (
        <>
            {
                loading ?
                <Loader /> :
                <Box px={2} >
        
        <form onSubmit={handleSubmit} >
            <Box display='flex' justifyContent='flex-end' position='relative' >
                       
                    <Box my={1} component='img'  sx={{ objectFit: 'cover', borderRadius: "7px", minWidth: {xs: '100%', sm: 400, md: 540}}} width='100%' maxWidth='100%' maxHeight={150} height={150} src={backcoverUrl ? backcoverUrl : '/images/cover_default.png'}   /> 


                    <Box position="absolute" top={10} right={5} >
                        <Tooltip title="Edit Cover Photo" >  
                        <IconButton size='small' onClick={openFilePicker} >
                                <Avatar sx={{width: 32, height: 32}} ><UploadRounded color='action' fontSize='0.5rem'/> </Avatar>
                        </IconButton>

                        </Tooltip>
                    </Box>

                       
              <input onChange={updateBackgroundPhoto} type='file' style={{display: 'none'}} accept='image/*' ref={fileRef} id="file" name="file" />

            </Box>
            
            <Box mt={2}>

                <Grid container spacing={3} justifyContent='center' >
                    <Grid item xs={12} sm={6} >
                        <Box >
                       
                            <TextField 
                                
                                variant='outlined' 
                                label="full name" 
                                fullWidth 
                                name='name'
                                value={name}
                                onChange={handleChange}

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
                                value={avatarUrl}

                                onChange={handleChange}
                                
                               
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
                                value={githubUrl}
                                onChange={handleChange}
                                
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

            }
        </>
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
            
            <Grid container spacing={3} justifyContent='center' >
                    <Grid item xs={12} sm={6} >
                    <Skeleton type='text' width="100%" /> 
                
                
                    </Grid>

                    <Grid item xs={12} sm={6} >
                    <Skeleton type='text' width="100%" /> 
                    </Grid>

                    <Grid item xs={12} sm={6} >
                    <Skeleton type='text' width="100%" /> 
                    </Grid>

                    <Grid item xs={12} >
                    <Skeleton type='text' width="100%" /> 
                    </Grid>
                </Grid>

            </Box>
    )
}
