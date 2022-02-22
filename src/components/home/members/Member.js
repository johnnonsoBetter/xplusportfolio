import { FolderRounded, HiveRounded, PsychologyRounded } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Avatar, Badge, Box, Paper, Stack, Typography } from '@mui/material'
import { blue, green, orange } from '@mui/material/colors'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FetchContext } from '../../../context/FetchContext'


export default function Member({user, noFollow}) {
    const {name, slug, total_projects, total_anticipations, repu_coin, is_following} = user

    return (
        <Paper  elevation={0} sx={{minHeight: 260, borderRadius: "10px"}} >
            <Link to={`/xpo/members/${slug}`}  style={{textDecoration: 'none'}} >
                <Stack rowGap={2} >
                    <Box  width="100%" display="flex" justifyContent="center" >
                       <Avatar src="/images/pics.jpg" alt="pics" sx={{width: 70, height: 70, my: 3}} />
                    </Box>
                    <Box width="100%" display="flex" justifyContent="center" >
                        <Typography marginBottom color="GrayText" sx={{maxWidth: "80%"}} variant="body2" noWrap={true} > {name}</Typography>
                    </Box>
                    <Box  width="100%" display="flex" justifyContent="space-around" >
                        <Badge badgeContent={repu_coin} sx={{color: "rgb(0 0 0 / 50%)"}} >
                            <HiveRounded sx={{color: green[400]}} color={green[400]} />
                          
                        </Badge>
                        <Badge badgeContent={total_anticipations} sx={{color: "rgb(0 0 0 / 50%)"}} >
                            <PsychologyRounded sx={{color: blue[400]}} />
                        </Badge>
                        <Badge badgeContent={total_projects} sx={{color: "rgb(0 0 0 / 50%)"}} >
                            <FolderRounded sx={{color: orange[400]}} />
                        </Badge>
                    </Box>

                </Stack>
            
            </Link>
            
            <Box width="100%"  my={2} display="flex" justifyContent="center" >
                {
                    noFollow ? null :
                    <FollowButton is_following={is_following} slug={slug} />
                }
               
            </Box>
        </Paper>
    )
}


function FollowButton({is_following, slug}) {

    const [isFollowing, setIsFollowing] = useState(is_following)
    const {authAxios} = useContext(FetchContext)
    const [followTrue, setFollowTrue] = useState(false)
    const [unFollowTrue, setunFollowTrue] = useState(false)


    const followMember = () => {
        setunFollowTrue(false)
        setIsFollowing(true)


        setFollowTrue(true)

        authAxios.post(`/api/v1/users/${slug}/followings`, {id: slug}).then(res => {
            console.log(res)
        }).catch(err => {
            setIsFollowing(false)
            setFollowTrue(false)
        })

    }


    const unfollowMember = () => {
        setFollowTrue(false)
        setIsFollowing(false)

        setunFollowTrue(true)

        authAxios.delete(`/api/v1/users/${slug}/followings`, {id: slug}).then(res => {
            console.log(res)
        }).catch(err => {
            setIsFollowing(true)
            setunFollowTrue(false)
        })

    }

    return (
        <>
        {
           
            isFollowing ?
            <LoadingButton disabled={unFollowTrue} size="small" sx={{mx: 1}} fullWidth variant="outlined" onClick={unfollowMember} > Unfollow </LoadingButton> 
            :
            <LoadingButton disabled={followTrue} disableElevation size="small" sx={{mx: 1}} fullWidth variant="outlined" onClick={followMember}  > Follow </LoadingButton>
           
        }
        </>
    )
}



