import { Folder, HowToVoteOutlined } from '@mui/icons-material'
import { Avatar, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Project() {
    return (
        <Paper sx={{width: "100%", p: 1}} >
            
            <Box to="/xpo/projects/7"   sx={{textDecoration: "none", pl: 1}} component={Link}>
                    <Stack rowGap={1} >
                    
                    <Box width="100%"  display="flex" justifyContent="flex-start" >
                        <Typography marginBottom color="GrayText" sx={{maxWidth: "80%", my: 1}} variant="body2" noWrap={true} > Todo-Appliction</Typography>
                    </Box>

                    <Box  width="100%" display="flex" justifyContent="flex-start"  >
                        <Avatar > <Folder /> </Avatar>
                    </Box>

                    <Box my={2} width="100%" display="flex" justifyContent="flex-start" >
                        <Badge  badgeContent={12} color="warning" sx={{color: "rgb(0 0 0 / 50%)", mr: 3}} >
                            <HowToVoteOutlined color="warning" />
                        </Badge>
                        <Badge badgeContent={12} color="info" sx={{color: "rgb(0 0 0 / 50%)"}} >
                            <ThumbUpOutlined color="info" />
                        </Badge>
                        
                    </Box>

                </Stack>
            </Box>
        </Paper>
    )
}