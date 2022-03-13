import  React, { useEffect, useRef, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ReviewToolbar from './ReviewToolbar';
import { ProjectReviewContextProvider } from '../../context/ProjectReviewContext';
import ActivitiyDialog from './ActivitiyDialog';
import ProjectIframe from './project/ProjectIframe';
import { Box, Slide } from '@mui/material';











 export default function ProjectPreview() {


  const [screenPoint, setScreenPoint] = React.useState(12)
  const [resizeValue, setResizeValue] = useState(100)
  const [open, setOpen] = React.useState(false);
  const [canvasObject, setCanvasObject] = useState({brushColor: "grey"}) 
  const [isDrawMode, setIsDrawMode] = useState(false)
  const [fullWidth, setFullWidth] = useState(true)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {

    return () => {
      setScreenPoint(12)
      setResizeValue(100)
      setOpen(false)
    }
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ProjectReviewContextProvider 

        value={{
          screenPoint,
          resizeValue,
          open,
          canvasObject,
          isDrawMode,
          fullWidth,
          setFullWidth,
          setIsDrawMode,
          handleClickOpen,
          handleClose,
          setResizeValue,
          setScreenPoint,
          setCanvasObject,
          
        }}
      
      >

        <ActivitiyDialog />



        <ProjectIframe />
      

        
       
        {
          fullWidth && 
          <Slide in={true} direction='left'>
            <Box >
              <ReviewToolbar />
            </Box>
          </Slide>

        }

       

    
      </ProjectReviewContextProvider>
    </Box>
  );
}
