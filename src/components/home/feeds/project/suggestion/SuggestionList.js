import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import Typography from '@mui/material/Typography';
import { Avatar, Badge, IconButton, Tooltip } from '@mui/material';
import { CheckCircleRounded, ThumbUpOutlined } from '@mui/icons-material';


export default function SuggestionList() {

 

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper  orientation="vertical">
        <Step active >
            <StepLabel
              StepIconComponent={()=> <Avatar src="/images/selfie.jpeg" />}
            >
            

              <Box display="flex" justifyContent="space-between" alignItems="center"  sx={{mr: 3}} >
                <Typography variant="body2"> John Paul</Typography>
                
                    <Box sx={{ mb: 2, my: 2, mr: 2 }} display="flex" alignItems="center"  justifyContent="flex-end">
                    <Tooltip title="like" sx={{mr: 2}}  >
                        <IconButton size="small" >
                            <Badge color="info" badgeContent={13} >
                                <ThumbUpOutlined />
                            </Badge>
                        </IconButton>
                        
                    </Tooltip> 

                    <CheckCircleRounded color="success" />
                </Box>
              </Box>
            </StepLabel>
            <StepContent>
              <Typography textAlign="left" variant="body2">

              For each ad campaign that you create, 
              </Typography>
              
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
              <Box sx={{ mb: 2 }}>

              </Box>
            </StepContent>
        </Step>

          
      </Stepper>
     
    </Box>
  );
}
