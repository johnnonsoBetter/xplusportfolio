import { Box, List, ListSubheader, Menu, MenuItem, Paper, Typography } from '@mui/material'
import React from 'react'
import TopMembersLoader from './TopMembersLoader'


export default function TopMembers() {


    return (
        
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: "10px" }} component="nav" 
                subheader={<ListSubheader  component="div" sx={{textAlign: "left"}} > Top Members </ListSubheader>}  >
                <TopMembersLoader />
            </List>
     
    )
}