import { AddRounded, ArrowDropUpRounded, BuildRounded, FolderRounded, HiveOutlined, HowToVoteRounded, LightbulbRounded, PeopleAltRounded, PsychologyRounded } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Avatar, Badge, Box, Chip, Divider, Grid, IconButton, Paper, Skeleton, Stack, Tooltip, Typography } from '@mui/material'
import { blue, green, orange, pink, purple } from '@mui/material/colors'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import {AuthContext} from '../../../../context/AuthContext'
import {FetchContext} from '../../../../context/FetchContext'
import FollowButton from '../../../shared/FollowButton'

export default function MainProfile() {

    const {setSomethingWentWrong} = useContext(AuthContext)
    const {authAxios} = useContext(FetchContext)
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const {slug} = useParams()


    useEffect(() => {
        setLoading(true)
        authAxios.get(`api/v1/users/${slug}`).then(res => {
  
            const {user} = res.data 
            setProfile(user)
            setLoading(false)
        }).catch(err => {
            setSomethingWentWrong(true)
        })


        return () => {
            setSomethingWentWrong(false)
            setProfile(null)
            setLoading(true)
        }
    }, [slug])
   
    

    return (
        <>
            {
                loading ?
                <Loader /> :
                <Profile  profile={profile}/>
            }
        </>
    )
}

const Loader = () => {
    const {pathname} = useLocation()
    

    return (
        <Box my={1} mx={1} >
        <Grid container spacing={1} >
            <Grid item xs={6} md={3}  >
                <Paper  sx={{minHeight: 130, display: 'flex', alignItems: 'center'}}  >
                    <Box p={1} >
                        <Stack width="100%" >
                             <Box p={1}  display="flex" justifyContent="center" >
                                    <Skeleton type="circular" width={40} height={40}  />
                                </Box>
                            <Box p={1}  display="flex" justifyContent="center" >
                               <Skeleton type="text" width={100}  />
                            </Box>
                        </Stack>
                        
                    </Box>
                </Paper>
            </Grid>

            

            

            <Grid item  xs={6} md={3}  >
                <Paper   sx={{minHeight: 130, display: 'flex', alignItems: 'center'}} >
                    <Box p={1} >
                        <Stack  >
                        <Box p={1}  display="flex" justifyContent="center" >
                                    <Skeleton type="circular" width={40} height={40}  />
                                </Box>
                            <Box p={1}  display="flex" justifyContent="center" >
                               <Skeleton type="text" width={100}  />
                            </Box>
                        </Stack>
                        
                    </Box>
                </Paper>
            </Grid>

            <Grid item  xs={12} md={6}  >
                <Paper sx={{p: 1, minHeight: 130, display: 'flex', alignItems: 'center'}}   >
                    <Stack width="100%">
                        <Box display="flex" justifyContent="space-around">
                            <Box component={Link} to={`${pathname}/followers`}   sx={{textDecoration: 'none'}}>
                               
                                
                                <Box p={1}  display="flex" justifyContent="center" >
                                    <Skeleton type="circular" width={40} height={40}  />
                                </Box>

                                <Skeleton type="text" width={100}  />
                            </Box>

                            <Divider sx={{ height: 48, m: 0.5 }} orientation="vertical" />

                            <Box component={Link} to={`${pathname}/following`}   sx={{textDecoration: 'none'}}>
                            <Box p={1}  display="flex" justifyContent="center" >
                                    <Skeleton type="circular" width={40} height={40}  />
                                </Box>
                                <Skeleton type="text" width={100}  />
                            </Box>
                            
                        </Box>
                        

                            
                          
                    </Stack>
                </Paper>
            </Grid>


     

            <Grid item xs={4} sm={4} md={4}  >
                <Paper   component={Link}  to={`${pathname}/anticipations`}   sx={{minHeight: 130, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                    <Box p={1} >
                        <Stack >
                            <Box width="100%" display="flex" justifyContent="center" >
                                
                                
                                
                            <Box p={1}  display="flex" justifyContent="center" >
                                    <Skeleton type="circular" width={40} height={40}  />
                                </Box>
                                
                            </Box>
                            <Box p={1} >
                            <Skeleton type="text" width={100}  />
                            </Box>
                        </Stack>
                        
                    </Box>
                </Paper>
            </Grid>


            <Grid item xs={4} sm={4} md={4}  >
                <Paper   component={Link} to={`${pathname}/suggestions`}   sx={{minHeight: 130, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                    <Box p={1}   >
                        <Stack width="100%" justifyContent="center" alignItems="center">
                                <Box p={1}  display="flex" justifyContent="center" >
                                    <Skeleton type="circular" width={40} height={40}  />
                                </Box>
                            <Box p={1} >
                            <Skeleton type="text" width={100}  />
                            </Box>
                        </Stack>
                        
                    </Box>
                </Paper>
            </Grid>

            <Grid item xs={4} md={4} spacing={2} >
                <Paper component={Link} to={`${pathname}/projects`}   sx={{minHeight: 130, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                    <Box p={1} >
                        <Stack >
                            <Box p={1}  display="flex" justifyContent="center" >
                                    <Skeleton type="circular" width={40} height={40}  />
                                </Box>
                            <Box p={1} >
                            <Skeleton type="text" width={100}  />
                            </Box>
                        </Stack>
                        
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </Box>
    )
}


const Profile = ({profile}) => {

    const {pathname} = useLocation()
    const history = useHistory()
    const {isCurrentUser} = useContext(AuthContext)
    const {slug} = useParams()
    
    const {total_anticipations, total_suggestions, total_projects, repu_coin, total_project_votes, total_followings, total_followers, is_following} = profile
    const [totalFollowersCount, setTotalFollowersCount] = useState(total_followers)



    const incrementFollowersCount =  () => {
        setTotalFollowersCount((totalFollowersCount) => totalFollowersCount + 1)
    }

    const decrementFollowersCount =  () => {
        setTotalFollowersCount((totalFollowersCount) => totalFollowersCount - 1)
    }


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
                                <Typography variant="body2" > {repu_coin} Repu Coins</Typography>
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
                                <Typography variant="body2" > {total_project_votes} Project Votes</Typography>
                            </Box>
                        </Stack>
                        
                    </Box>
                </Paper>
            </Grid>

            <Grid item  xs={12} md={6}  >
                <Paper sx={{p: 1, minHeight: 130, display: 'flex', alignItems: 'center'}}   >
                    <Stack width="100%">
                        <Box display="flex" justifyContent="space-around">
                            <Box component={Link} to={`${pathname}/followers`}   sx={{textDecoration: 'none'}}>
                                <PeopleAltRounded color="action" />
                                <Typography color="GrayText" marginBottom variant="body2"   > {totalFollowersCount} followers</Typography>
                            </Box>

                            <Divider sx={{ height: 48, m: 0.5 }} orientation="vertical" />

                            <Box component={Link} to={`${pathname}/following`}   sx={{textDecoration: 'none'}}>
                                <PeopleAltRounded color="action" />
                                <Typography marginBottom variant="body2" color="GrayText"> {total_followings} following</Typography>
                            </Box>
                            
                        </Box>
                        

                        {
                            isCurrentUser(slug) ? 
                            
                            <Box  >
                               
                                
                                <Grid container spacing={2} >
                                    <Grid item xs={6}  >
                                        {/* <LoadingButton color="success" disableRipple variant="contained" fullWidth  sx={{mt: 2}} endIcon={<FolderRounded />}  > New </LoadingButton> */}
                                        <Tooltip title="Add Project">
                                            <IconButton onClick={() => history.push('#create_project')} disableRipple>  
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
                            <FollowButton variant='contained' decrementFollowersCount={decrementFollowersCount} incrementFollowersCount={ incrementFollowersCount} mx={0} is_following={is_following} slug={slug}/>

                        }
                    </Stack>
                </Paper>
            </Grid>

            <Grid item xs={4} sm={4} md={4}  >
                <Paper   component={Link}  to={`${pathname}/anticipations`}   sx={{minHeight: 130, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
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
                                <Typography variant="body2" > {total_anticipations} Anticipations</Typography>
                            </Box>
                        </Stack>
                        
                    </Box>
                </Paper>
            </Grid>


            <Grid item xs={4} sm={4} md={4}  >
                <Paper   component={Link} to={`${pathname}/suggestions`}   sx={{minHeight: 130, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                    <Box p={1}   >
                        <Stack width="100%" justifyContent="center" alignItems="center">
                            <Box width="100%" display="flex" justifyContent="center" >
                                
                                <Avatar sx={{bgcolor: "white"}} > <LightbulbRounded sx={{color: purple[500]}} /> </Avatar>
                            </Box>
                            <Box p={1} >
                                <Typography variant="body2" > {total_suggestions} Suggestions</Typography>
                            </Box>
                        </Stack>
                        
                    </Box>
                </Paper>
            </Grid>

            <Grid item xs={4} md={4} spacing={2} >
                <Paper component={Link} to={`${pathname}/projects`}   sx={{minHeight: 130, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                    <Box p={1} >
                        <Stack >
                            <Box width="100%" display="flex" justifyContent="center" >
                                
                                <Avatar sx={{bgcolor: "white"}} > <FolderRounded sx={{color: orange[500]}}  /> </Avatar>
                            </Box>
                            <Box p={1} >
                                <Typography variant="body2" > {total_projects} Projects</Typography>
                            </Box>
                        </Stack>
                        
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </Box>
    )
}