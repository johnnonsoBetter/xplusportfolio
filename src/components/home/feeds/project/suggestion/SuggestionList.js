import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { Avatar} from '@mui/material';
import SuggestionLabel from './SuggestionLabel';


export default function SuggestionList({suggestions, project}) {

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper  orientation="vertical">      

        {
          suggestions.map(suggestion => {
            const {user, created_at, id, content} = suggestion
            return (
              <Step active key={id} >
                  <StepLabel
                    StepIconComponent={()=> <Avatar src="/images/selfie.jpeg" />}
                  >
                    <SuggestionLabel suggestion={suggestion}  project={project} created_at={created_at} user={user} />

                  </StepLabel>
                  <StepContent>
                    <Typography textAlign="left" variant="body2">

                        {content}
                    </Typography>

                  </StepContent>
              </Step>
            )
          })
        }
      </Stepper>
     
    </Box>
  );
}
