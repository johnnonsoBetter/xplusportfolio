import { Box, Grid, Paper, Skeleton } from '@mui/material'
import React from 'react' 



export default function ResourcesLoader() {

    return (
        <Box m={2} >
          
            <Skeleton animation='wave' variant='text' width='30%' />
            
            <Box mb={2} >
                <Skeleton animation='wave' variant='text' width='90%' />
                <Skeleton animation='wave' variant='text' width='90%' />
                 <Skeleton animation='wave' variant='text' width='90%' />
            </Box>

            
            <Grid container spacing={3}  >
                <Grid item xs={12} sm={12} >
                   

                    <Paper elevation={0} sx={{borderRadius: '12px' }} >
                        <Box  height={150} display='flex' alignItems='center' justifyContent='center' >
                            <Skeleton  sx={{borderTopRightRadius: '12px',borderTopLeftRadius: '12px'}} animation='wave' variant='' width='100%' height={150} />
                        </Box>

                        <Box p={1} width={260}  >
                            <Skeleton animation='wave' variant='text' width='30%' />                        
                        
                            <Box >
                                <Skeleton animation='wave' variant='text' width='90%' />
                                <Skeleton animation='wave' variant='text' width='90%' />
                                <Skeleton animation='wave' variant='text' width='90%' />
                            </Box>
                        </Box>
                    </Paper>


                  
                    
                </Grid>


                
            </Grid>
        </Box>
    )
}