
 

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { Fab } from '@mui/material'
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
    <Box position='relative' sx={{mx: {xs: 2, sm: 2, md: 0}}}>

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
