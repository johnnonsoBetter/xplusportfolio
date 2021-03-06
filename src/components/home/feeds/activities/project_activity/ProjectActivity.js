


import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { HowToVoteOutlined, LinkRounded, OpenInNewOutlined} from '@mui/icons-material';
import { Badge, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../context/AuthContext';
import LikerButton from '../../../../shared/LikerButton';
import VoteButton from '../../../../shared/VoteButton';
import ActivityOwner from '../ActivityOwner';
import ActivityType from '../ActivityType';
import { autoPlay } from 'react-swipeable-views-utils';



const AutoSwipeableView = autoPlay(SwipeableViews)

function ProjectActivity({project, typePackge, showType}) {

  const {isCurrentUser} = useContext(AuthContext)
  const {owner_name, owner_slug, action_type} = typePackge 

  const {
    created_at, user,
    total_likes,
    total_votes,
    project_photos,
    live_link,
    title,
    liked,
    voted,
    total_suggestions,
    slug,
  } = project
  

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
        
          bgcolor: 'background.default',
          borderTopLeftRadius: "10px",
          borderTopRightRadius:"10px"
          
        }}
      >
         {
            showType && 

            <>

              {
                action_type === "project.create" ?
                <ActivityType owner_name={owner_name} owner_slug={owner_slug} created_at={typePackge.created_at} text='made this ????' /> :
                action_type === "project.like" ? 
                <ActivityType owner_name={owner_name} owner_slug={owner_slug} created_at={typePackge.created_at} text='likes this ????' /> :
                action_type === "project.vote" ? 
                <ActivityType owner_name={owner_name} owner_slug={owner_slug} created_at={typePackge.created_at} text='voted this project ???????' /> :
                action_type === "suggestion.create" ? 
                <ActivityType owner_name={owner_name} owner_slug={owner_slug} created_at={typePackge.created_at} text='contributed to this ???????' /> :
                null
                


              }

            
            </>


            
          }
        
        
          <Paper 
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
          
        
            
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
                        <LinkRounded />
                    </IconButton>

                    </a>
                </Tooltip>

                {
                  !isCurrentUser(user.slug) &&
                  <Tooltip title="Review project" >
                  <a rel="noopener noreferrer" href={`${window.location.origin}/project_review/${slug}`} target="_blank">

                      <IconButton size="small"  target="_blank" rel="noopener noreferrer" >
                          <OpenInNewOutlined fontSize='small' />
                      </IconButton>

                  </a>
                      
                  </Tooltip>

                }

                

                

                
            </Box>
        </Box>
      </Paper>
      <AutoSwipeableView
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {project_photos.map((step, index) => (
          <div key={step.img_url}>
            {Math.abs(activeStep - index) <= 2 ? (
            

              <Box
              component='img'
              alt={step.img_url}
              effect="blur"
              src={step.img_url}
              width='100%'
              sx={{
                height: 355,
                display: 'block',
                maxWidth: "100%",
                overflow: 'hidden',
                objectFit: {xs: 'contain', sm: 'cover'},
                width: '100%',
              }}
              
              
              />

     
            ) : null}
          </div>
        ))}
      </AutoSwipeableView>
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
            
          


              {
                isCurrentUser(user.slug) ?
                <Tooltip title={`${totalVotes} votes`} sx={{mr: 2}} >
                  <IconButton disabled={true} size="small" >
                      <Badge color="info" badgeContent={totalVotes} >
                      <HowToVoteOutlined fontSize='small' />
                      </Badge>
                  </IconButton>
                
                </Tooltip> :
                <VoteButton voteUrl={`/api/v1/projects/${project.slug}/voters`} voted={voted}  totalVotes={totalVotes} setTotalVotes={setTotalVotes}  />

              }
  
                <LikerButton likeUrl={`/api/v1/projects/${project.slug}/likes`} liked={liked}  totalLikes={totalLikes} setTotalLikes={setTotalLikes}  />
            
            </Box>
            <Box py={1} mx={1} display="flex" justifyContent="flex-end"  >

            <Link to={`/xpo/projects/${project.slug}`} style={{textDecoration: "none"}} >
              <Typography color="MenuText" variant="body2" noWrap={true} textAlign="left" sx={{mx: 2, py: 1}}>{total_suggestions} Suggestions</Typography>
            </Link>
            
           
            

            
            
            </Box>
            
        </Paper>
        </Paper>
      
      
    </Box>
  );
}

export default ProjectActivity;