import  React, { useEffect, useRef, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ReviewToolbar from './ReviewToolbar';
import { ProjectReviewContextProvider } from '../../context/ProjectReviewContext';
import ActivitiyDialog from './ActivitiyDialog';
import ProjectIframe from './project/ProjectIframe';
import { Box } from '@mui/material';











 export default function ProjectPreview() {


  const [screenPoint, setScreenPoint] = React.useState(12)
  const [resizeValue, setResizeValue] = useState(100)
  const [open, setOpen] = React.useState(false);

  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef(null);
  const contextRef = useRef(null);



  const prepareCanvas = () => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d")
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }



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
          handleClickOpen,
          handleClose,
          setResizeValue,
          setScreenPoint,
          canvasRef,
          contextRef,
          prepareCanvas,
          startDrawing,
          finishDrawing,
          clearCanvas,
          draw,
          
        }}
      
      >

        <ActivitiyDialog />

        <ProjectIframe />
        


        <ReviewToolbar />

    
      </ProjectReviewContextProvider>
    </Box>
  );
}
