import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Avatar, Chip } from '@mui/material';
import { CheckBoxRounded, CheckCircleRounded } from '@mui/icons-material';

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function SuggestionList() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper orientation="vertical">
        <Step active >
            <StepLabel
              StepIconComponent={()=> <Avatar src="/images/selfie.jpeg" />}
            >
              John Paul
            </StepLabel>
            <StepContent>
              <Typography textAlign="left" variant="body2">

              For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.
              </Typography>
              <Box sx={{ mb: 2 }}>
               
              </Box>
            </StepContent>
        </Step>

        <Step active >
            <StepLabel
              StepIconComponent={()=> <Avatar src="/images/pics.jpg" />}
            >
              John Paul
            </StepLabel>
            <StepContent>
              <Typography textAlign="left" variant="body2">

                For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.
              </Typography>
              <Box sx={{ my: 2 }}>
                    <Chip  color="success" icon={<CheckCircleRounded color="success" />} label="completed" variant="outlined" />
              </Box>
            </StepContent>
        </Step>

          
      </Stepper>
     
    </Box>
  );
}
