


import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

import { InsertLinkOutlined, LinkOffOutlined, OpenInNewOutlined} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../context/AuthContext';
import LikerButton from '../../../../shared/LikerButton';
import VoteButton from '../../../../shared/VoteButton';
import ActivityOwner from '../ActivityOwner';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';



function ProjectActivity(props) {
  const {project} = props
  const {
    created_at, user,
    total_likes,
    total_votes,
    project_photos,
    github_link,
    live_link,
    title,
    liked,
    voted,
    total_suggestions,
    slug,
  } = project
  


  const {authState, isCurrentUser} = React.useContext(AuthContext)

  const [totalLikes, setTotalLikes] = useState(total_likes)
  const [totalVotes, setTotalVotes] = useState(total_votes)
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = project_photos.length;
  
  const params = useHistory()

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
          borderTopLeftRadius: "10px",
          borderTopRightRadius:"10px"
          
        }}
      >
          <Box >
          <ActivityOwner created_at={created_at} user={user} />
            </Box>
        
        <Box display="flex" width="100%" justifyContent="flex-end" >
            
            <Box mx={1}  >


                <Tooltip title="View live" >
                    
                    <a rel="noopener noreferrer" href={live_link} target="_blank">

                    <IconButton  size="small">
                        <LinkOffOutlined />
                    </IconButton>

                    </a>
                </Tooltip>

                <Tooltip title="Review project" >
                <a rel="noopener noreferrer" href={`${window.location.origin}/project_review/${slug}`} target="_blank">

                    <IconButton size="small"  target="_blank" rel="noopener noreferrer" >
                        <OpenInNewOutlined fontSize='small' />
                    </IconButton>

                </a>
                    
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
        {project_photos.map((step, index) => (
          <div key={step.img_url}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                loading='lazy'
                sx={{
                  height: 355,
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.img_url}
              
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
        <Link to={`/xpo/projects/${project.slug}`} style={{textDecoration: "none"}} >
        <Typography color="MenuText" fontWeight={600} noWrap={true} textAlign="left" sx={{mx: 2, py: 1}}> {title}</Typography>
        </Link>
        
      </Paper>
      
        <Paper  elevation={0} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box py={1} mx={2} display="flex" justifyContent="flex-end"  >
            
          

              <VoteButton voteUrl={`/api/v1/projects/${project.slug}/voters`} voted={voted}  totalVotes={totalVotes} setTotalVotes={setTotalVotes}  />
            
  
                <LikerButton likeUrl={`/api/v1/projects/${project.slug}/likes`} liked={liked}  totalLikes={totalLikes} setTotalLikes={setTotalLikes}  />
            
            </Box>
            <Box py={1} mx={1} display="flex" justifyContent="flex-end"  >

            <Link to={`/xpo/projects/${project.slug}`} style={{textDecoration: "none"}} >
              <Typography color="MenuText" variant="body2" noWrap={true} textAlign="left" sx={{mx: 2, py: 1}}>{total_suggestions} Suggestions</Typography>
            </Link>
            
           
            

            
            
            </Box>
            
        </Paper>

      
      
    </Box>
  );
}

export default ProjectActivity;