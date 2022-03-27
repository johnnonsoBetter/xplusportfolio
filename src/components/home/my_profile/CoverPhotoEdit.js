import React, { useContext, useEffect, useRef, useState } from 'react'
import { ArrowBackIosNewRounded, UploadRounded} from '@mui/icons-material'

import { Box, Button, Grid, IconButton, InputAdornment, InputBase, TextField, Typography } from '@mui/material'
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min'
import HomeInfoContext from '../../../context/HomeInfoContext'
import UploadLoading from '../mobile/creat_project/UploadLoading'
import { FetchContext } from '../../../context/FetchContext'


export default function CoverPhotoEdit() {

    const {backcoverUrl, setBackCoverUrl }= useContext(HomeInfoContext)
    const history = useHistory()
    const [imageUrl, setImageUrl] = useState(backcoverUrl ? backcoverUrl : '/images/cover_default.png')
    const [image, setImage] = useState(null)
    const {authAxios} = useContext(FetchContext)
    const [done, setDone] = useState(false)
    const [loadingBtn, setLoadingBtn] = React.useState(false)
    const fileRef = useRef(null)


    useEffect(() => {

        return () => {
          setImageUrl(null)
          setImage(null)
          setLoadingBtn(false)
          setDone(false)
        }
      }, [])


    const uploadBackgroundPhoto = () => {

        setLoadingBtn(true)

        var formData = new FormData();
        formData.append('image', image)
        authAxios.put('api/v1/background_cover_photos', formData).then(res => {

            const {url} = res.data

            
            setDone(true)
            setBackCoverUrl(url)
            history.goBack()
            
            

        }).catch(err => {

            console.log(err)
            setLoadingBtn(false)
            
        })
  
    }


    const updateBackgroundPhoto = (e) => {

        e.preventDefault()
        const newImage = e.target.files[0]
        console.log(newImage)
        setImage(newImage)
        setImageUrl(URL.createObjectURL(newImage))
        
    }
 


    return (
        <Box px={2}>

            <Box p={1}  width="100%" justifyContent="space-between" alignItems="center"  >
                <Box sx={{color: "black", textDecoration: 'none'}} display='flex' component={Link} alignItems='center' >
                
                <ArrowBackIosNewRounded onClick={()=> history.goBack()} fontSize='small' />
                <Typography onClick={()=> history.goBack()} sx={{ml: 1}} fontWeight={700}>Edit Cover Photo</Typography>

                </Box>



                <Box width='100%'  mt={2} display='flex' alignItems='center' flexDirection='column' justifyContent='center' >
                    
                    <IconButton  onClick={() => {
                        const file = fileRef.current 

                        file.click()
                    }} ><UploadRounded /></IconButton>

                    <input onChange={updateBackgroundPhoto } type='file' style={{display: 'none'}} accept='image/*' ref={fileRef} id="file" name="file" />

               
               <Box my={1} component='img'  sx={{ objectFit: 'cover', borderRadius: "7px", minWidth: {xs: '100%', sm: 400, md: 540}}} width='100%' maxWidth='100%' maxHeight={150} height={150} src={imageUrl} /> 

                    <Box width='100%' mt={3} >
                       

                        {
                            loadingBtn ?

                            <UploadLoading done={done}/>
                            :

                            <Button disabled={imageUrl === backcoverUrl} onClick={uploadBackgroundPhoto} fullWidth variant='contained'  >Update</Button>


                        }
                    </Box>
                </Box>
                

            </Box>


          
       
        </Box>
    )
}


