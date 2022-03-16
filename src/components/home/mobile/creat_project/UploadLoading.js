

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Chip, Slide, Typography, Zoom } from '@mui/material';
import { CheckCircleRounded } from '@mui/icons-material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


export default function UploadLoading({done}) {
    const [progress, setProgress] = React.useState(10);

    const progressMessage = () => {

        if (progress >= 10 && progress <= 40)
            return "Upload Started..."
        else if (progress >= 41 && progress <= 60)
            return "Please Wait..."
        else if (progress >= 61 )
            return "Almost Done..."
    }

    React.useEffect(() => {
        const timer = setInterval(() => {

            if (progress >= 90){
               
                clearInterval(timer)
                setProgress(90)
            }

            setProgress((progress) => (progress + 10))
                
            
        }, 1000);
        return () => {
        clearInterval(timer);
        };
    }, []);


  return (
    <Box sx={{ flexGrow: 1 }}>

      {

        done ?
        <Zoom in={true}  >
           <Box my={1} display='flex' justifyContent='center' flexDirection='column' alignItems='center' >
          <CheckCircleRounded color='success'/>
          <Typography variant='body2' > Upload Done!</Typography>
        </Box>

        </Zoom>
       

        : 

        <>

        <BorderLinearProgress variant="determinate" value={progress <= 90 ? progress : 90} />
            <Box my={1} display='flex' justifyContent='center' flexDirection='column' alignItems='center' >
            <Chip label={progress <= 90 ? progress + '%' : 90 + '%'} color='info' />
            <Typography variant='body2' sx={{my: 0.5, textTransform: 'downcase'}} >

                {
                    progressMessage() 
                }
            </Typography>
        </Box>
        
        </>
        
      }
   
      
      
    </Box>
  );
}


