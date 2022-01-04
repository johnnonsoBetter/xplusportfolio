import { Box, List, ListSubheader, Menu, MenuItem, Paper, Typography } from '@mui/material'
import React from 'react'
import TopProjectsLoader from './TopProjectsLoader'

export default function TopProjects() {


    return (
        
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: "10px" }} component="nav" 
                subheader={<ListSubheader  component="div" sx={{textAlign: "left"}} > Top Projects </ListSubheader>}  >
                <TopProjectsLoader />
            </List>
     
    )
}