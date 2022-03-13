import React, { useContext } from 'react' 
import { Grid, IconButton, Paper, Divider, Box } from '@mui/material';
import { ArrowLeftRounded, ArrowRightRounded, RefreshRounded } from '@mui/icons-material';
import ProjectReviewContext from '../../../context/ProjectReviewContext';
import UrlDisplay from './UrlDisplay';
import { Canvas } from '../canvas/Canvas';

export default function  ProjectIframe() {

    const {screenPoint, setScreenPoint} = useContext(ProjectReviewContext)

    return (

         
   
      <Grid container justifyContent='center' >
      <Grid item  sm={screenPoint} zeroMinWidth   >
        
           <Paper  elevation={10} sx={{height: 'calc(99vh - 20px)', mt: 1, mb: 1, mx: 1, borderRadius: "15px"}} >
            <Box sx={{borderRadius: "15px"}} display='flex' alignItems='center' justifyContent='flex-start' >
              <IconButton >
                <ArrowLeftRounded />
              </IconButton>

              <IconButton >
                <ArrowRightRounded />
              </IconButton>

              <IconButton >
                <RefreshRounded />
              </IconButton>

              <Box >
                <UrlDisplay />
              </Box>
            </Box>
            <Divider />

            <Box width='100%' height="100%" sx={{position: 'relative'}} >

            <iframe  src="https://codeyplus.com/" style={{border: 0, borderBottomRightRadius: "15px", borderBottomLeftRadius: "15px"}} height="95%" width="100%" >

            </iframe>

            <Box width='100%' sx={{position: 'absolute', left: 0, right: 0, bottom: 40, top: 0}} >
                        <Canvas  />
                    </Box>

                
                <Grid container justifyContent='center'   >

                    <Grid item sm={screenPoint} >
                    


                    </Grid>


                </Grid>




            </Box>
          


           </Paper>

          
      
   
      </Grid>

    

    </Grid>


    )
}