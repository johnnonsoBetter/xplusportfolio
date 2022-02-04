import { AddRounded, ArrowDropUpRounded, ArrowUpwardRounded, BuildRounded, FolderRounded, HiveOutlined, HowToVoteRounded, LightbulbRounded, PeopleAltRounded, PsychologyRounded } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Avatar, Badge, Box, Chip, Divider, Grid, IconButton, Paper, Stack, Tooltip, Typography } from '@mui/material'
import { blue, green, orange, pink, purple } from '@mui/material/colors'
import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function MainProfile({isCurrentUser}) {
    const {path} = useRouteMatch()
    const history = useHistory()
    return (
        <Box my={1} mx={1} >
            <Grid container spacing={1} >
                <Grid item xs={6} md={3}  >
                    <Paper  sx={{minHeight: 130, display: 'flex', alignItems: 'center'}}  >
                        <Box p={1} >
                            <Stack >
                                <Box width="100%" display="flex" justifyContent="center" >
                                    
                                    <HiveOutlined sx={{color: green[500]}} />
                                </Box>
                                <Box p={1} >
                                    <Typography variant="body2" > 200 Repu Coins</Typography>
                                </Box>
                            </Stack>
                            
                        </Box>
                    </Paper>
                </Grid>

                

                

                <Grid item  xs={6} md={3}  >
                    <Paper   sx={{minHeight: 130, display: 'flex', alignItems: 'center'}} >
                        <Box p={1} >
                            <Stack  >
                                <Box width="100%" display="flex" justifyContent="center" >
                                    
                                    <Avatar sx={{bgcolor: "white"}} > <HowToVoteRounded sx={{color: pink[500]}} /> </Avatar>
                                </Box>
                                <Box p={1} >
                                    <Typography variant="body2" > 95 Project Votes</Typography>
                                </Box>
                            </Stack>
                            
                        </Box>
                    </Paper>
                </Grid>

                <Grid item  xs={12} md={6}  >
                    <Paper sx={{p: 1, minHeight: 130, display: 'flex', alignItems: 'center'}}   >
                        <Stack width="100%">
                            <Box display="flex" justifyContent="space-around">
                                <Box component={Link} to={`${path}/followers`}   sx={{textDecoration: 'none'}}>
                                    <PeopleAltRounded color="action" />
                                    <Typography color="GrayText" marginBottom variant="body2"   > 23 followers</Typography>
                                </Box>

                                <Divider sx={{ height: 48, m: 0.5 }} orientation="vertical" />

                                <Box component={Link} to={`${path}/following`}   sx={{textDecoration: 'none'}}>
                                    <PeopleAltRounded color="action" />
                                    <Typography marginBottom variant="body2" color="GrayText"> 23 following</Typography>
                                </Box>
                                
                            </Box>
                            

                            {
                                isCurrentUser ? 
                                
                                <Box  >
                                   
                                    
                                    <Grid container spacing={2} >
                                        <Grid item xs={6}  >
                                            {/* <LoadingButton color="success" disableRipple variant="contained" fullWidth  sx={{mt: 2}} endIcon={<FolderRounded />}  > New </LoadingButton> */}
                                            <Tooltip title="Add Project">
                                                <IconButton disableRipple>  
                                                    <FolderRounded />
                                                    <AddRounded fontSize="0.6em" />
                                                </IconButton> 
                                            </Tooltip>
                                            
                                        </Grid>
                                        <Grid item xs={6} >
                                            
                                        <Tooltip title="Anticipate">
                                                <IconButton onClick={() => history.push('#create_anticipation')} disableRipple>  
                                                    <PsychologyRounded />
                                                    <AddRounded />
                                                </IconButton> 
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                </Box> :
                                <Box  >
                                    <LoadingButton  disableRipple variant="contained" fullWidth  sx={{mt: 2}}  > Follow </LoadingButton>
                                </Box> 

                            }
                        </Stack>
                    </Paper>
                </Grid>


                <Grid item  xs={12} md={12}  >
                    <Paper    >
                        <Box display="flex" alignItems="center"  p={1} >
                           <BuildRounded color="action" fontSize="1.2rem" />
                           <Typography sx={{ml: 1}} variant="body2" > Skills</Typography>
                            
                        </Box>
                        <Box display="flex" flexWrap="wrap" >
                            <Chip label="Ruby on rails" variant="outlined" sx={{mx: 1, my: 1}}/>
                            <Chip label="React" variant="outlined" sx={{mx: 1, my: 1}}/>
                            <Chip label="Heroku" variant="outlined" variant="outlined" sx={{mx: 1, my: 1}}/>
                            <Chip label="Git" variant="outlined" sx={{mx: 1, my: 1}}/>
                            <Chip label="Github" variant="outlined" sx={{mx: 1, my: 1}}/>
                            <Chip label="Ruby on rails" variant="outlined" sx={{mx: 1, my: 1}}/>
                        
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={4} sm={4} md={4}  >
                    <Paper   component={Link} to={`${path}/anticipations`}   sx={{minHeight: 130, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                        <Box p={1} >
                            <Stack >
                                <Box width="100%" display="flex" justifyContent="center" >
                                    
                                    
                                    
                                    <Tooltip title="Fufilled" >
                                        <Badge badgeContent={2} anchorOrigin={{vertical: 'top', horizontal: "left"}}>
                                            <ArrowDropUpRounded color="success"/>
                                        </Badge>
                                    </Tooltip>
                                    <Avatar sx={{bgcolor: "white"}} > <PsychologyRounded sx={{color: blue[500]}} /> </Avatar>
                                    <Tooltip title="Expired" >
                                        <Badge badgeContent={8} >
                                            <ArrowDropUpRounded color="error" />
                                        </Badge>
                                    </Tooltip>
                                </Box>
                                <Box p={1} >
                                    <Typography variant="body2" > 13 Anticipations</Typography>
                                </Box>
                            </Stack>
                            
                        </Box>
                    </Paper>
                </Grid>


                <Grid item xs={4} sm={4} md={4}  >
                    <Paper   component={Link} to={`${path}/suggestions`}   sx={{minHeight: 130, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                        <Box p={1}   >
                            <Stack width="100%" justifyContent="center" alignItems="center">
                                <Box width="100%" display="flex" justifyContent="center" >
                                    
                                    <Avatar sx={{bgcolor: "white"}} > <LightbulbRounded sx={{color: purple[500]}} /> </Avatar>
                                </Box>
                                <Box p={1} >
                                    <Typography variant="body2" > 7 Suggestions</Typography>
                                </Box>
                            </Stack>
                            
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={4} md={4} spacing={2} >
                    <Paper component={Link} to={`${path}/projects`}   sx={{minHeight: 130, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                        <Box p={1} >
                            <Stack >
                                <Box width="100%" display="flex" justifyContent="center" >
                                    
                                    <Avatar sx={{bgcolor: "white"}} > <FolderRounded sx={{color: orange[500]}}  /> </Avatar>
                                </Box>
                                <Box p={1} >
                                    <Typography variant="body2" > 12 Projects</Typography>
                                </Box>
                            </Stack>
                            
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}