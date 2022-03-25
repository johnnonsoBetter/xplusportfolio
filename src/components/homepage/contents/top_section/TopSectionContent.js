
 

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Paper,Grid, Typography, Chip, Fab } from '@mui/material'
import { orange, purple } from '@mui/material/colors';
import GettingIntoTech from './GettingIntoTech';
import WhatTodo from './WhatTodo';
import Challenging from './Challenging';
import SeekHelp from './SeekHelp';
import TeamHelp from './TeamHelp';












const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const topContentComponents = [
  {
    id: 'intotech',
    component: () => <GettingIntoTech />
     
  },
  {
    id: 'whattodo',
    component: () => <WhatTodo />
     
  },
  {
    id: 'challenging',
    component: () => <Challenging />
     
  },
  {
    id: 'seekhelp',
    component: () => <SeekHelp />
     
  },
  {
    id: 'teamhelp',
    component: () => <TeamHelp />
     
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
    sx={{ maxWidth: "100%", ml: 4, flexGrow: 1, position: 'relative'}}>
      
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
              step.component()
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <Box position='absolute' top="30%" right={35}>
            
       
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
