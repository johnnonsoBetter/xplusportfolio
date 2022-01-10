import { HowToVoteRounded, LightbulbRounded, PsychologyRounded } from '@mui/icons-material'
import { Avatar, Box, Grid, Paper, Stack, Typography } from '@mui/material'
import { blue, green, orange } from '@mui/material/colors'
import React from 'react'

export default function MainProfile() {

    return (
        <Box my={1} >
            <Grid container spacing={1} >
                <Grid item xs={12} sm={3} md={3}  >
                    <Paper  sx={{minHeight: 130, display: 'flex', alignItems: 'center'}}  >
                        <Box p={1} >
                            <Stack >
                                <Box width="100%" display="flex" justifyContent="center" >
                                    
                                    <Avatar src="/images/coiner.png" alt="coin" />
                                </Box>
                                <Box p={1} >
                                    <Typography variant="body2" > 200 Repu Coins</Typography>
                                </Box>
                            </Stack>
                            
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={3} md={3} spacing={2} >
                    <Paper   sx={{minHeight: 130, display: 'flex', alignItems: 'center'}} >
                        <Box p={1} >
                            <Stack >
                                <Box width="100%" display="flex" justifyContent="center" >
                                    
                                    <Avatar sx={{bgcolor: "white"}} > <HowToVoteRounded sx={{color: green[500]}} /> </Avatar>
                                </Box>
                                <Box p={1} >
                                    <Typography variant="body2" > 95 Project Votes</Typography>
                                </Box>
                            </Stack>
                            
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={3} md={3} spacing={2} >
                    <Paper   sx={{minHeight: 130, display: 'flex', alignItems: 'center'}} >
                        <Box p={1} >
                            <Stack >
                                <Box width="100%" display="flex" justifyContent="center" >
                                    
                                    <Avatar sx={{bgcolor: "white"}} > <PsychologyRounded sx={{color: blue[500]}} /> </Avatar>
                                </Box>
                                <Box p={1} >
                                    <Typography variant="body2" > 13 Anticipations</Typography>
                                </Box>
                            </Stack>
                            
                        </Box>
                    </Paper>
                </Grid>


                <Grid item xs={12} sm={3} md={3} spacing={2} >
                    <Paper   sx={{minHeight: 130, display: 'flex', alignItems: 'center'}} >
                        <Box p={1} >
                            <Stack >
                                <Box width="100%" display="flex" justifyContent="center" >
                                    
                                    <Avatar sx={{bgcolor: "white"}} > <LightbulbRounded sx={{color: orange[500]}} /> </Avatar>
                                </Box>
                                <Box p={1} >
                                    <Typography variant="body2" > 7 Suggestions</Typography>
                                </Box>
                            </Stack>
                            
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}