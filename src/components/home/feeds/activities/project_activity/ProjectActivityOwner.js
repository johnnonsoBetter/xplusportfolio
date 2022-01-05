import { Avatar, Box, ListItemIcon, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



export default function ProjectActivityOwner() {


    return (
        <Box  my={1} display="flex" width="100%" alignItems="center" justifyContent="space-between" >
            <Link to="/xpo"  style={{textDecoration: "none", display: "flex", alignItems: "center"}} width="100%" alignItems="center" >
        
            <ListItemIcon >
                
                <Avatar src="/images/pics.jpg" alt="pics" />
            </ListItemIcon>
            <Stack  >
                
                <Box maxWidth={120} >
                <Typography sx={{textTransform: "downcase", fontSize: "0.8em"}} color="ButtonText" variant="body2" noWrap={true}> John Paul</Typography>
                
                </Box>
                <Box maxWidth={120} >
                    <Typography sx={{textTransform: "downcase", fontSize: "0.8em"}} variant="body2" color="ButtonShadow" noWrap={true}> 7days ago</Typography>
                
                </Box>

            </Stack>
            </Link>
        </Box>
    )
}
