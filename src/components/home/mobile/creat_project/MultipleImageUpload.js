
import React, { Component, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Avatar, IconButton, Input, InputBase, Tooltip } from '@mui/material';
import { AddPhotoAlternateRounded, CloseRounded, Menu } from '@mui/icons-material';

export default function MultipleImageUpload (props) {

  
    const {images, imageURLs, setImageURLs, setImages} = props
    const [changed, setChanged] = useState(false)

    useEffect(() => {
      if(images.length < 1) 
      return 

      const newImageURLs = []

      images.forEach(image => newImageURLs.push({
        url: URL.createObjectURL(image),
        name: image.name
        
      }))
      setImageURLs(newImageURLs)
  
        

    }, [changed])


    function uploadMultipleFiles(e) {
        e.preventDefault()
        const newImages = images.concat(e.target.files[0])
        console.log(newImages[0])
        setImages( [...new Set(newImages)])
        setChanged(!changed)


        
    }


    return (

        <>

        <Box display='flex' justifyContent='center' >
            <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                  >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <AddPhotoAlternateRounded />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search Google Maps"
                     
                      inputProps={{ 'aria-label': 'search google maps' }}
                      type='file' accept='image/*' className="form-control" onChange={uploadMultipleFiles} multiple
                    />
                  
                   
                  </Paper>
        </Box>
                <div className="form-group multi-preview">
                   
                 
                    {
                        images.length >= 1 && 
                        <Box p={2} >
                            <Images imageURLs={imageURLs.reverse()} setImageURLs={setImageURLs} images={images} setImages={setImages} />
                        </Box>
                        
                    }
                </div>
               
              
       </ >
    )
}






function Images({imageURLs, setImageURLs, setImages, images}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const maxSteps = imageURLs.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };



  return (
    <Paper square  elevation={3} sx={{ flexGrow: 1, borderRadius: 4, p: 1}}>
     
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {imageURLs.map((img, index) => (
          <div key={img.url + index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
              sx={{
                minHeight: 300,
                
                maxWidth: "100%",
                overflow: 'hidden',
                width: '100%',
                backgroundImage: `url(${img.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                
            }}
              
              >

                <Box display='flex' justifyContent='flex-end' >
                  <Tooltip title="Remove" >  
                  <IconButton onClick={() => {
                    console.log(images)
                    const newImageURLs = imageURLs.filter(img_ => img_.name !== img.name)
                    const newImages = images.filter(img_ => img_.name !== img.name)
                    setImages(newImages)
                    setImageURLs(newImageURLs)
                  }} >
                  <Avatar ><CloseRounded /> </Avatar>
                  </IconButton>

                  </Tooltip>
                 

                </Box>
                

                
                
           


              </Box>
              
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Paper>
  );
}








