
 

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Paper,Grid, Typography, Chip, Fab, Avatar } from '@mui/material'
import { brown, green, grey, orange, pink, purple, yellow } from '@mui/material/colors';
;












const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const topContentComponents = [
  {
    id: 'intotech',
    title: 'Trying to get into the tech industry ?',
    body: 'Sometimes building useful projects can seem challenging to build, maybe because of lack of ideas, skills and motivation.',
    chipColor: purple[600],
    imgUrl: '/images/tech.png',
    chipLabel: 'Experts Advice'
   
     
  }, 
  {
    id: 'whattodo',
    title: 'Make your portfolio stand out by buiding real world projects',
    body: 'Experts in the tech industry advices to have a solid portfolio with proof of real world projects. This helps showcase the potential of problem solving ability and learning.',
    chipColor: orange[600],
    imgUrl: '/images/frustration.png',
    chipLabel: 'But its hard!'
   
     
  }
  , 
  {
    id: 'challenging',
    title: 'Building useful project requires effort and time, Its difficult and challenging',
    body: 'Sometimes building useful projects can seem challenging to build, maybe because of lack of ideas, skills and motivation.',
    chipColor: pink[600],
    imgUrl: '/images/solid-portfolio.png',
    chipLabel: 'How about this?'
   
  }, 
  {
    id: 'seekhelp',
    title: 'Seek help, get feedback and put in the work!',
    body: 'Passionate tech folks who understands these challenges are out there seeking to help you manage these challenges.',
    chipColor: "#022c51",
    imgUrl: '/images/seekhelp.png',
    chipLabel: 'Whats the catch?'
   
  }, 
  {
    id: 'teamhelp',
    title: 'What if you dont have to start from scratch',
    body: 'How about we come together as a platform and help take your existing projects to a much better level by giving you fresh ideas to work on, point out improvement areas and all you have to do is build upon these concepts.',
    chipColor: green[600],
    imgUrl: '/images/team_help.png', 
    chipLabel: 'Explore how below'
   
  }
];

function TopSectionContent() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = topContentComponents.length;

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
    <Box
    style={{  
      
      background: `#f5f5f5`,
      backgroundColor: "#f5f5f5",
      backgroundPosition: 'center',
  
      backgroundRepeat: 'repeat'
    }}    
    sx={{ maxWidth: "100%", ml: {sm: 2, md: 4}, flexGrow: 1, position: 'relative'}}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={6000}
      >
        {topContentComponents.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
                  <Box m={2} >
                      <Grid container  spacing={2}>

                            <Grid item xs={12} sm={10} md={5} >
                                <Box display='flex'   alignItems='flex-start' sx={{minHeight: {xs: 'auto', sm: 'auto', md: 450}, alignItems: {sm: 'flex-start', md: 'center'}, justifyContent: {xs: 'flex-start', sm: 'flex-start', md: 'center'}}} flexDirection='column' >
                                  <Typography marginTop lineHeight='1.3'  fontWeight={700} fontFamily='Quicksand'  sx={{color: '#222d39', textAlign: {xs: 'left', sm: 'left', md: 'center'}, fontSize: {xs: '1.7rem', sm: '1.8', md: '2.1rem'}}}>
                                        
                                        {step.title}
                                    </Typography>
        
                                    <Typography marginTop={2}   marginBottom   maxWidth="70%" fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39', fontSize: {xs: '0.9rem', sm: '1rem', md: '1.1rem'}, textAlign: {xs: 'left', sm: 'left', md: 'center'}}}>
                                      {step.body}
                                    </Typography>
                                    <Chip   avatar={<Avatar sx={{backgroundColor: "white", color: "black"}} > <KeyboardArrowRight /> </Avatar>} sx={{backgroundColor: step.chipColor, color: 'white', display: {xs: 'none', sm: 'none', md: 'flex'}}} label="How about this?" clickable />

                                </Box>
                                <Box display='flex'>
                                <Chip  avatar={<Avatar sx={{backgroundColor: "white", color: "black"}} > <KeyboardArrowRight /> </Avatar>} sx={{backgroundColor: step.chipColor, color: 'white', display: {xs: 'flex', sm: 'flex', md: 'none'}}} label={step.chipLabel} clickable />

                                </Box>
                                
                            </Grid>
        
                            <Grid item xs={12} sm={12} md={5} >
                                <Box display='flex'   sx={{minHeight: {xs: 'auto', sm: 'auto', md: 450}, alignItems: {xs: 'flex-start', sm: 'flex-start', md: 'center'}}} justifyContent='center' >
                                    
                                        <img src={step.imgUrl} style={{maxWidth: '100%', borderRadius: '15px'}} />
                                    
                                </Box>
                            </Grid>
                      </Grid>
                  </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <Box position='absolute' sx={{top: {xs: '37%', sm: '30%'}, right: {xs: "5%", sm: "10%"}}} top="20%" right={35}>
            
       
        <Box display='flex' >
            <Fab color=""  aria-label="prev" onClick={handleBack} disabled={activeStep === 0} sx={{mx: 2}}>
                <KeyboardArrowLeft />
            </Fab>
            <Fab color="" aria-label="next" onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{mx: 2}}>
                <KeyboardArrowRight />
            </Fab>
        </Box>

      </Box>
      
    </Box>
  );
}

export default TopSectionContent;
