import { AccountBoxOutlined, BadgeOutlined, FolderRounded, HiveRounded, HowToVoteOutlined, PsychologyRounded } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Avatar, Badge, Box, Paper, Stack, Typography } from '@mui/material'
import { blue, green, orange } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Member({user}) {
    const {name, slug, total_projects, total_anticipations, repu_coin} = user

    return (
        <Paper elevation={0} sx={{minHeight: 260, borderRadius: "10px"}} >
            <Link to={`/xpo/members/john-doe`} style={{textDecoration: 'none'}} >
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
            
            <Box width="100%" my={3} display="flex" justifyContent="center" >
                <LoadingButton size="small" sx={{mx: 1}} fullWidth variant="outlined" > Follow </LoadingButton>
            </Box>
        </Paper>
    )
}