import { LoadingButton, LocalizationProvider, DatePicker } from '@mui/lab'
import {  Box, Divider, Typography, Avatar, TextField, Chip, IconButton, CircularProgress, Grid, Autocomplete } from '@mui/material'
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






export default function CreateProjectMenu() {

  const {authAxios} = useContext(FetchContext)
  const [loading, setLoading] = useState(true)
  const [anticipationCovers, setAnticipationCovers] = useState([])
  const [textColor, setTextColor] = useState('')
  const [img, setImg] = useState('')
  const history = useHistory()
  const [anticipationCoverId, setAnticipationCoverId] = useState(0)
  const [dueDate, setDueDate] = useState(nextDay(new Date(), -1))
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [images, setImages] = useState([])
  const [imageURLs, setImageURLs] = useState([])
 
  const {setSomethingWentWrong} = useContext(AuthContext)


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
                                <TextField id="outlined-basic" fullWidth label="Title" variant="outlined" />
                                
                            </Box>

                        </Box>

                    </Grid>
                
                    <Grid item xs={12}  >
                         <Box  mx={2} my={1} >

                                    
                            <Box display="flex" alignItems="center"   justifyContent="space-between" >
                                    <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    defaultValue="Default Value"
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
                                    options={top100Films}
                                    getOptionLabel={(option) => option.title}
                                    defaultValue={[top100Films[13]]}
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

           
            

            

            
           
            

            <Box  mx={1}  style={{
            }}   justifyContent='center' display='flex' alignItems="center" >
                             <AnticipationCoverSelectors setAnticipationCoverId={setAnticipationCoverId} setImg={setImg} setTextColor={setTextColor} anticipationCovers={anticipationCovers} />

            </Box>


          
            <Box m={2}>

            </Box>
            </form>
            </>

          }
        </Box>
    )
}







const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
      title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
      title: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];