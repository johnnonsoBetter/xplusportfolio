import React, {useContext, useEffect, useState} from 'react';
import {Box, TextField, Typography} from '@mui/material';
import Menu from '@mui/material/Menu';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {  CloseOutlined, InsertCommentRounded, Link, NoteAddRounded, ScreenshotRounded} from '@mui/icons-material';
import Paper from '@mui/material/Paper';

import { LoadingButton } from '@mui/lab';

import SuggestionUpload from '../suggestion/SuggestionUpload'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { FetchContext } from '../../../context/FetchContext';
import ProjectReviewContext from '../../../context/ProjectReviewContext';
import UploadLoading from '../../home/mobile/creat_project/UploadLoading';



const validationSchema = yup.object({
  content: yup 
    .string("Please enter suggestion")
    .required("your note is required"),
});







export default function Note() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [imageUrl, setImageUrl] = React.useState(null)
  const [image, setImage] = React.useState(null)
  const [loadingBtn, setLoadingBtn] = React.useState(false)
  const {authAxios} = useContext(FetchContext)
  const {project} = useContext(ProjectReviewContext)
  const [done, setDone] = useState(false)
  const {user} = project
  const {name} = user



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {

    return () => {
      setImageUrl(null)
      setImage(null)
      setLoadingBtn(false)
      setDone(false)
    }
  }, [open])





  const formik = useFormik({
    initialValues: {
      content: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      
      setLoadingBtn(true)

      authAxios.post('api/v1/notes', {
        note: {
          project_id: project ? project.id : null,
          content: values.content
        }
      }).then(res => {

       
        setDone(true)
        formik.resetForm()

      }).catch(err => {
        
        setLoadingBtn(false)
      })
    
      
    },
  });




  return (
    <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          
        
            <Tooltip title="Add Note" size="small"  >

              <IconButton onClick={handleClick} >
                <NoteAddRounded />
              </IconButton>
            </Tooltip>
        </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
       
        
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            borderRadius: "10px",
            maxWidth: 290,
            width: 290,
            
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 35,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       <Box p={1} width={290} maxWidth={290} >
           
           <Box display='flex' alignItems='center' justifyContent='space-between'>
          
           <Box>
            <NoteAddRounded  color='disabled'/>
          </Box>
              <IconButton onClick={handleClose}>
                  <CloseOutlined />
              </IconButton>


           </Box>


          



          <form onSubmit={formik.handleSubmit}>

            <Box my={2}>

              <Paper

                sx={{  display: 'flex', alignItems: 'center', width: "100%" }}
                elevation={0}
                >
                <TextField
                  sx={{  flex: 1 }}
                  multiline

                  rows={7}
                  placeholder="Share your thoughts on this project"
                  autoCapitalize
                  autoFocus
                  
                  name="content"
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  error={formik.touched.content && Boolean(formik.errors.content)}
                  helperText={formik.touched.content && formik.errors.content}
                />

              
              </Paper>
            </Box>

        <Box >
            {
              loadingBtn ?

              <UploadLoading uploadText="New note created" done={done}/>
              :

              <LoadingButton loading={loadingBtn} type='submit' variant='contained' fullWidth color='info' >
                Add Note
              </LoadingButton>


            }
           
            
          </Box> 



          </form>
          </Box>

      </Menu>
    </React.Fragment>
  );
}





