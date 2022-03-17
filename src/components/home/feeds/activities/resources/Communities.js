import { Box, ButtonBase, Grid, Paper, Typography } from '@mui/material'
import React from 'react' 



export default function Communities() {

    return (
        <Box m={2} >
            <Typography variant='h6' marginBottom={1}  textAlign='left' > Communities </Typography>
            <Typography variant='body2' textAlign='left' marginBottom={3}   >

            If you like helping people solve problems, find forums that allow you to do so. Or if you want to share the backstory on a piece of code, write a blog. It’s often as simple as finding something that you think could be better and trying to solve it. It’s like an itch that needs to be scratched
            </Typography>
            
            <Grid container spacing={4} >
                <Grid item xs={12} sm={6} >
                    <ButtonBase >

                    <Paper sx={{borderRadius: '12px' }} >
                        <Box p={3} sx={{borderTopRightRadius: '12px',borderTopLeftRadius: '12px',  background: 'linear-gradient(86deg, rgba(7,3,124,1) 5%, rgba(242,242,242,1) 100%, rgba(0,212,255,1) 100%)'}} minHeight={150} display='flex' alignItems='center' justifyContent='center' >
                            <img style={{maxWidth: "100%"}} src='https://andela.com/wp-content/uploads/2016/01/Andela-logo-landscape-blue-400px.png' />
                        </Box>
                        <Box p={1}  >
                        <Typography variant='body1' marginBottom={1}  textAlign='left' > ALC </Typography>
                        <Typography variant='body2' sx={{maxHeight: 100, overflow: 'hidden'}}  textAlign='left' marginBottom={3}   >

                            If you like helping people solve problems, find forums that allow you to do so. Or if you want to share the backstory on a piece of code, write a blog. It’s often as simple as finding something that you think could be better and trying to solve it. It’s like an itch that needs to be scratched
                        </Typography>
                        </Box>
                    </Paper>


                    </ButtonBase>
                    
                </Grid>

                <Grid item xs={12} sm={6} >
                    <ButtonBase >

                    <Paper sx={{borderRadius: '12px' }} >
                        <Box p={3} sx={{borderTopRightRadius: '12px',borderTopLeftRadius: '12px',  background: 'linear-gradient(86deg, rgba(7,3,124,1) 5%, rgba(242,242,242,1) 100%, rgba(0,212,255,1) 100%)'}} minHeight={150} display='flex' alignItems='center' justifyContent='center' >
                            <img style={{maxWidth: "100%"}} src='https://andela.com/wp-content/uploads/2016/01/Andela-logo-landscape-blue-400px.png' />
                        </Box>
                        <Box p={1}  >
                        <Typography variant='body1' marginBottom={1}  textAlign='left' > ALC </Typography>
                        <Typography variant='body2' sx={{maxHeight: 100, overflow: 'hidden'}}  textAlign='left' marginBottom={3}   >

                            If you like helping people solve problems, find forums that allow you to do so. Or if you want to share the backstory on a piece of code, write a blog. It’s often as simple as finding something that you think could be better and trying to solve it. It’s like an itch that needs to be scratched
                        </Typography>
                        </Box>
                    </Paper>


                    </ButtonBase>
                    
                </Grid>
            </Grid>
        </Box>
    )
}