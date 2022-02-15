


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

import {  HowToVoteOutlined, InsertLinkOutlined, ModeCommentOutlined, PushPinOutlined, ThumbUpOutlined } from '@mui/icons-material';
import { Badge, IconButton, Tooltip } from '@mui/material';
import ProjectActivityOwner from '../project_activity/ProjectActivityOwner';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../context/AuthContext';
import LikerButton from '../../../../shared/LikerButton';
import VoteButton from '../../../../shared/VoteButton';



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
  } = project



  const {authState} = React.useContext(AuthContext)
  const {slug} = JSON.parse(authState.userInfo)
  const isCurrentUser = user.slug === slug 
  const [totalLikes, setTotalLikes] = useState(total_likes)
  const [totalVotes, setTotalVotes] = useState(total_votes)
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = project_photos.length;

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
          <ProjectActivityOwner created_at={created_at} isCurrentUser={isCurrentUser} user={user} />
            </Box>
        
        <Box display="flex" width="100%" justifyContent="flex-end" >
            
            <Box mx={1}  >
                
                
                {/* <Tooltip title="Review later" >
                    <IconButton size="small" >
                        <PushPinOutlined />
                    </IconButton>
                </Tooltip> */}

                <Tooltip title="View live" >
                    
                    <a rel="noopener noreferrer" href={live_link} target="_blank">

                    <IconButton  size="small">
                        <InsertLinkOutlined />
                    </IconButton>

                    </a>
                </Tooltip>

                <Tooltip title="View repo" >
                <a rel="noopener noreferrer" href={github_link} target="_blank">

                    <IconButton size="small"  target="_blank" rel="noopener noreferrer" >
                        <img src="/images/repo.png" alt="repo" />
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
        <Link to="/xpo/projects/90" style={{textDecoration: "none"}} >
        <Typography color="MenuText" fontWeight={600} noWrap={true} textAlign="left" sx={{mx: 2, py: 1}}> {title}</Typography>
        </Link>
        
      </Paper>
      
        <Paper  elevation={0} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box py={1} mx={2} display="flex" justifyContent="flex-end"  >
            
          

              <VoteButton voteUrl={`/api/v1/projects/${project.slug}/voters`} voted={voted}  totalVotes={totalVotes} setTotalVotes={setTotalVotes}  />
            
  
                <LikerButton likeUrl={`/api/v1/projects/${project.slug}/likes`} liked={liked}  totalLikes={totalLikes} setTotalLikes={setTotalLikes}  />
            
            </Box>
            <Box py={1} mx={1} display="flex" justifyContent="flex-end"  >

            <Link to="/xpo/kpo" style={{textDecoration: "none"}} >
              <Typography color="MenuText" variant="body2" noWrap={true} textAlign="left" sx={{mx: 2, py: 1}}>{total_suggestions} Suggestions</Typography>
            </Link>
            
           
            

            
            
            </Box>
            
        </Paper>

      
      
    </Box>
  );
}

export default ProjectActivity;