


import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

import { ChatBubbleOutlined, ChatBubbleOutlineRounded, CropFreeOutlined, EmojiObjectsOutlined, HowToVoteOutlined, InsertLinkOutlined, ModeCommentOutlined, PushPinOutlined, ThumbUpOutlined } from '@mui/icons-material';
import { Badge, IconButton, Tooltip } from '@mui/material';
import ProjectActivityOwner from '../project_activity/ProjectActivityOwner';
import { Link } from 'react-router-dom';








const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function ProjectActivity() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <Box my={2} sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
          
        }}
      >
          <Box >
          <ProjectActivityOwner />
            </Box>
        
        <Box display="flex" width="100%" justifyContent="flex-end" >
            
            <Box mx={1}  >
                
                
                <Tooltip title="Review later" >
                    <IconButton size="small" >
                        <PushPinOutlined />
                    </IconButton>
                </Tooltip>

                <Tooltip title="View live" >
                    <IconButton  size="small">
                        <InsertLinkOutlined />
                    </IconButton>
                </Tooltip>

                <Tooltip title="View repo" >
                    <IconButton size="small"  >
                        <img src="/images/repo.png" alt="repo" />
                    </IconButton>
                </Tooltip>

                

                
            </Box>
        </Box>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
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
      <Paper elevation={0} >
        <Link to="/xpo/projects/90" style={{textDecoration: "none"}} >
        <Typography color="MenuText" fontWeight={600} noWrap={true} textAlign="left" sx={{mx: 2, py: 1}}> Todo-Application</Typography>
        </Link>
        
      </Paper>
      
        <Paper  elevation={0} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box py={1} mx={2} display="flex" justifyContent="flex-end"  >
            
            <Tooltip title="vote" sx={{mr: 2}} >
                <IconButton size="small">
                    <Badge color="info" badgeContent={25} >
                        <HowToVoteOutlined fontSize='small' />
                    </Badge>
                </IconButton>

            </Tooltip>

            

            <Tooltip title="suggestions" sx={{mr: 2}} >
                <IconButton size="small" >
                    <Badge color="warning" badgeContent={25} >
                        <EmojiObjectsOutlined   fontSize='small'/>
                    </Badge>
                </IconButton>
            </Tooltip>

            <Tooltip title="like"  >
                <IconButton size="small" >
                    <Badge  color="info" badgeContent={25} >
                        <ThumbUpOutlined  fontSize='small' />
                    </Badge>
                </IconButton>
                
            </Tooltip> 
            </Box>
            <Box py={1} mx={1} display="flex" justifyContent="flex-end"  >

            <Link to="/xpo/kpo" style={{textDecoration: "none"}} >
              <Typography color="MenuText" variant="body2" noWrap={true} textAlign="left" sx={{mx: 2, py: 1}}>22 comments</Typography>
            </Link>
            
           
            

            
            
            </Box>
            
        </Paper>

      
      
    </Box>
  );
}

export default ProjectActivity;