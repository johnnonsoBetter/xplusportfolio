import { VerifiedRounded } from '@mui/icons-material'
import { ButtonBase, Chip, CircularProgress, Collapse, MobileStepper, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import {FetchContext} from '../../../../context/FetchContext'
import Empty from '../../../shared/Empty'
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@emotion/react'
import moment from 'moment'


export default function MyAnticipations ({openAnticipationList, setAnticipationId, anticipationId}) {

  const {authAxios} = useContext(FetchContext)
  const {setSomethingWentWrong} = useContext(AuthContext)
  const [anticipations, setAnticipations] = useState([])
  const [loading, setLoading] = useState(true)



  useEffect(() => {


    authAxios.get('api/v1/unfulfilled_anticipations').then(res => {
      setAnticipations(res.data)
      setLoading(false)
      setAnticipationId(res.data[0].id)
    }).catch(err => {
      setLoading(false)
      setSomethingWentWrong(true)
    })

    return () => {
      setSomethingWentWrong(false)
      setLoading(true)
      setAnticipations([])
      setAnticipationId(null)
    }
  }, [])


    return (
      <Collapse  in={openAnticipationList} timeout="auto" unmountOnExit >
      
        <Box  mx={2} my={1}  minWidth='100%' width='100%' > 
          
          {
              loading ?
              <Box display='flex' minHeight={250} alignItems='center' justifyContent='center'>
                  <CircularProgress />
              </Box>
              :
              <>

              {
              anticipations.length === 0 ?
              <Empty emptyDetail="No Unfulfilled Anticipation found" sx={{minHeight: "300px", display: "flex", alignItems: 'center', justifyContent: "center"}}/> : 
                  

                  <>
                    <AnticipationList anticipationId={anticipationId} anticipations={anticipations} setAnticipationId={setAnticipationId} />
                  </>
            }
              
              </>
          }
        </Box>
      </Collapse>
    )
  }
  
  

  const AnticipationList = (props) =>{
    const {anticipations, setAnticipationId, anticipationId} = props
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = anticipations.length;

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
        <>
        <Box minWidth='100%' width='100%' sx={{ maxWidth: "100%", flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
            width: '100%'
          }}
        >
         
        </Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {anticipations.map((anticipation, index) => (
            <div key={anticipation.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                 <Anticipation anticipationId={anticipationId} anticipation={anticipation} setAnticipationId={setAnticipationId} />
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
      </Box>

        </>
    )
  }


  const Anticipation = ({anticipation, setAnticipationId, anticipationId}) => {

    const {cover, due_date, id, body} = anticipation
    const {image, text_color} = cover
    const expires = moment().to(moment(due_date))

    return (
      <>
          <ButtonBase onClick={() => setAnticipationId(id)} >
      <Box  sx={{ flexGrow: 1 }}
        component={Paper}
        square
        elevation={2}
        minWidth='100%' width='100%'
      >
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
          width: '100%',
          
        }}
      >
           <Box display='flex' alignItems='center' >
                  
                  
                  {
                    anticipationId === id &&
                    <Chip size="small" avatar={<VerifiedRounded color='warning' />}  label="Selected" />


                  }
                  
                 
             
              <Box mx={1} minWidth='100%' width='100%' >
                  <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} variant="body2" color="ButtonShadow" noWrap={true}> expires in {expires} </Typography>
  
              </Box>
              </Box>
    
            </Paper>
      
        <Box
        

        sx={{
          minHeight: 255,
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
          overflow: 'hidden',
          width: '100%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          color: text_color
      }}
      > <Typography variant="h5" sx={{px: 1}} textAlign='center' > {body}</Typography> </Box>
      
      </Box>    
  
      </ButtonBase>
      </>
    )
  }
  
  
  
  
  