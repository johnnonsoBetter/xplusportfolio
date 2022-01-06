import { AccountBoxOutlined, HowToVoteOutlined, PsychologyRounded } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Avatar, Badge, Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function Member() {
    const {path} = useRouteMatch()
    return (
        <Paper elevation={0} sx={{minHeight: 260, borderRadius: "10px"}} >
            <Link to={`${path}/john-doe`} style={{textDecoration: 'none'}} >
                <Stack rowGap={2} >
                    <Box  width="100%" display="flex" justifyContent="center" >
                       <Avatar src="/images/pics.jpg" alt="pics" sx={{width: 70, height: 70, my: 3}} />
                    </Box>
                    <Box width="100%" display="flex" justifyContent="center" >
                        <Typography marginBottom color="GrayText" sx={{maxWidth: "80%"}} variant="body2" noWrap={true} > Joy Anichebe</Typography>
                    </Box>
                    <Box  width="100%" display="flex" justifyContent="space-around" >
                        <Badge badgeContent={12} sx={{color: "rgb(0 0 0 / 50%)"}} >
                            <HowToVoteOutlined color="disabled" />
                        </Badge>
                        <Badge badgeContent={12} sx={{color: "rgb(0 0 0 / 50%)"}} >
                            <PsychologyRounded color="disabled" />
                        </Badge>
                        <Badge badgeContent={12} sx={{color: "rgb(0 0 0 / 50%)"}} >
                            <AccountBoxOutlined color="disabled" />
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