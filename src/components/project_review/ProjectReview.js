import  React, { useContext, useEffect, useRef, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ReviewToolbar from './ReviewToolbar';
import { ProjectReviewContextProvider } from '../../context/ProjectReviewContext';
import ActivitiyDialog from './ActivitiyDialog';
import ProjectIframe from './project/ProjectIframe';
import { Box, Container, Slide, Typography } from '@mui/material';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { FetchContext } from '../../context/FetchContext';











 export default function ProjectPreview() {


  const [screenPoint, setScreenPoint] = React.useState(12)
  const [resizeValue, setResizeValue] = useState(100)
  const [open, setOpen] = React.useState(false);
  const [canvasObject, setCanvasObject] = useState({brushColor: "red"}) 
  const [isDrawMode, setIsDrawMode] = useState(false)
  const [fullWidth, setFullWidth] = useState(true)
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const {slug} = useParams()
  const [error, setError] = useState(false)
  const {authAxios} = useContext(FetchContext)



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  useEffect(() => {

    document.title = "Reviewing" + project ? project.title : null
    authAxios.get(`/api/v1/projects/${slug}`).then(res => {
      const {project} = res.data
    
      setProject(project)
      setLoading(false)
    }).catch(err => {
        
        setError(true)
        setLoading(false)
    })

    return () => {
      setProject(null)
      setLoading(true)
      setError(false)
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
          project,
          
        }}
      
      >

        <ActivitiyDialog />



        

        {

          loading ?
        
          <Box width='100%' display='flex' justifyContent='center' alignItems='center' minHeight="calc(99vh - 60px)" >
            <img src='/images/review_loader.gif' width={64} height={64} />
            
          </Box>
          : error ?

          <Box width='100%' display='flex' justifyContent='center' flexDirection='column' alignItems='center' minHeight="calc(99vh - 60px)" >
            

            <Container maxWidth='xs' sx={{display: 'flex', justifyContent: 'center'}} >
              <img style={{maxWidth: "100%"}} src='/images/wrong.png' />
            </Container>
            <Typography variant='h5'> Ooops, Couldn't Load Project!!</Typography>
            
          </Box>
          : 
          <>
            {project &&  
            
            
            

            <>

              <ProjectIframe />

              {
                fullWidth && 
               
                <Slide in={true} direction='left'>
                  <Box >
                    <ReviewToolbar project={project} />
                  </Box>
                </Slide>

              }


            </>
            
            
            }
          </>
          
          

        }
      

        
      

       

     
    
      </ProjectReviewContextProvider>
    </Box>
  );
}
