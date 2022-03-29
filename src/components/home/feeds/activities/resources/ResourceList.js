
 

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
import Resource from './Resource';




function ResourceList({resources}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = resources.length;

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
    <Box position='relative'>

        <Box my={2} display='flex' justifyContent='flex-end' >
            <Fab color=""  aria-label="prev" onClick={handleBack} disabled={activeStep === 0} sx={{mx: 2}}>
                <KeyboardArrowLeft />
            </Fab>
            <Fab color="" aria-label="next" onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{mx: 2}}>
                <KeyboardArrowRight />
            </Fab>
        </Box>
      
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={6000}
      >
        {resources.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
                  <Resource resource={step}  />
            ) : null}
          </div>
        ))}
      </SwipeableViews>

      
    </Box>
  );
}

export default ResourceList;
