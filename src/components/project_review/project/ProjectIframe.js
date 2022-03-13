import React, { useContext } from 'react' 
import { Grid, IconButton, Paper, Divider, Box } from '@mui/material';
import { ArrowLeftRounded, ArrowRightRounded, FiberManualRecordRounded, RefreshRounded } from '@mui/icons-material';
import ProjectReviewContext from '../../../context/ProjectReviewContext';
import { Canvas } from '../canvas/Canvas';

export default function  ProjectIframe() {

    const {screenPoint, isDrawMode} = useContext(ProjectReviewContext)

    return (

         
   
      <Grid container justifyContent='center' >
      <Grid item  sm={screenPoint} zeroMinWidth   >
        
           <Paper  elevation={10} sx={{height: 'calc(99vh - 20px)', mt: 1, mb: 1, mx: 1, borderRadius: "15px"}} >
            <Box sx={{borderRadius: "15px"}} display='flex' alignItems='center' justifyContent='space-between' >
              
              <Box >
                <IconButton onClick={() => window.history.back()} >
                  <ArrowLeftRounded />
                </IconButton>

                <IconButton onClick={() => window.history.forward()} >
                  <ArrowRightRounded />
                </IconButton>

              </Box>


              <Box mx={1}>
                <FiberManualRecordRounded color={isDrawMode ? "success" : "error"} />
              </Box>

            </Box>
            <Divider />

            <Box width='100%' height="100%" sx={{position: 'relative'}} id="capture" >

            <iframe name='iframe' id='iframe'  src="https://www.tutorialrepublic.com" style={{border: 0, borderBottomRightRadius: "15px", borderBottomLeftRadius: "15px"}} height="95%" width="100%" >

            </iframe>
            {
              isDrawMode && 
              <Box width='100%' display='flex' justifyContent='center' sx={{position: 'absolute', left: 0, right: 0, bottom: 40, top: 0}} >
                  <Canvas  />
              </Box>

            }
            

               
            </Box>
          


           </Paper>

          
      
   
      </Grid>

    

    </Grid>


    )
}