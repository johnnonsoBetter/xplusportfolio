import { LoadingButton, LocalizationProvider, DatePicker } from '@mui/lab'
import {  Box, Divider, Typography, Avatar, TextField, Chip, IconButton, CircularProgress } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import {Paper} from '@mui/material/';
import InputBase from '@mui/material/InputBase';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FetchContext } from "../../../context/FetchContext";
import { CloseRounded } from '@mui/icons-material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as yup from 'yup';
import { useFormik } from 'formik';
import isPast from 'date-fns/isPast'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import nextDay from 'date-fns/nextDay'
import { AuthContext } from '../../../context/AuthContext';




const validationSchema = yup.object({
    body: yup
      .string('Please type in an anticipation')
      .required('anticipation body cannot be empty')
});




const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
 


function AnticipationCoverSelectors(props) {

  const {anticipationCovers, setImg, setTextColor, setAnticipationCoverId} = props

  return (
    <Carousel responsive={responsive} >
             
    {
      anticipationCovers.map(cover => {
        const {name, id, image, text_color} = cover 
        return (
          <Box key={id} px={4} m={2} >
              <Chip  variant='outlined' label={name} clickable avatar={<Avatar src={image} />} 
            onClick={() => {
              setAnticipationCoverId(id)
              setImg(image)
              setTextColor(text_color)
            }}
            />
          </Box>
          
          
        )
      })
    }
    </Carousel>
  )
}

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

function CustomDate(props) {
  const { dueDate, setDueDate} = props
 

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="fulfillment date"
        shouldDisableDate={isPast}
        views={['day']}
        value={dueDate}
        onChange={(newValue) => {
          setDueDate(newValue);
        }}
        renderInput={(params) => <TextField sx={{width: 150}} {...params} size='small' variant="standard" />}
       
      />
    </LocalizationProvider>
  );
}


const Loader = () => {

  return (
    <Box minHeight={500} sx={{minWidth: {md: 400}}} display='flex' alignItems='center' justifyContent='center' width='100%'  >
        <CircularProgress />
    </Box>
  )
}






export default function CreateAnticipationMenu() {

  const {authAxios} = useContext(FetchContext)
  const [loading, setLoading] = useState(true)
  const [anticipationCovers, setAnticipationCovers] = useState([])
  const [textColor, setTextColor] = useState('')
  const [img, setImg] = useState('')
  const history = useHistory()
  const [anticipationCoverId, setAnticipationCoverId] = useState(0)
  const [dueDate, setDueDate] = useState(nextDay(new Date(), -1))
  const [loadingBtn, setLoadingBtn] = useState(false)
  const { setSomethingWentWrong} = useContext(AuthContext)



  const formik = useFormik({
    initialValues: {
      body: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoadingBtn(true)
      authAxios.post('api/v1/anticipations', {
        anticipation: {
          body: values.body,
          anticipation_cover_id: anticipationCoverId,
          due_date: dueDate
        }
      }).then(res => {
        setDueDate(nextDay(new Date(), -1))
        setLoadingBtn(false)
        formik.resetForm()
      }).catch(err => {
        setLoadingBtn(false)
      })
    
      
    },
  });

  

  useEffect(() => {

   
    authAxios.get('api/v1/anticipation_covers').then(res => {

      const {data} = res
      const {image, text_color, id} = data[0]
      setAnticipationCovers(data)
      setAnticipationCoverId(id)
      setImg(image)
      setTextColor(text_color)
      setLoading(false)

    }).catch(err => {
      setSomethingWentWrong(true)
    })
  }, [])

  


    

    return (
        <Box position="relative" height="100%" >
          <Box display='flex' justifyContent='space-between' alignItems='center' >
              <Typography variant='h6' mx={2}  color="ButtonText" fontWeight={700}>
                Create Anticipation
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

           
            <Box  mx={2} my={1} >

             
              <Box display="flex" alignItems="center"   justifyContent="space-between" >
                  <CustomDate dueDate={dueDate} setDueDate={setDueDate} />
                  
                  <LoadingButton loading={loadingBtn} type="submit"  size='small' variant='contained' color='info'> Create</LoadingButton>

                  
              </Box>


            </Box>

           
           
            

            <Box  mx={1} style={{
            }}   justifyContent='center' display='flex' alignItems="center" >
                <Input formik={formik} textColor={textColor} img={img} />
            </Box>


          
            <Box m={2}>
              <AnticipationCoverSelectors setAnticipationCoverId={setAnticipationCoverId} setImg={setImg} setTextColor={setTextColor} anticipationCovers={anticipationCovers} />
            </Box>
            </form>
            </>

          }
        </Box>
    )
}