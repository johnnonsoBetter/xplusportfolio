import { Avatar, Box, List, ListItem, ListItemIcon, ListSubheader, Menu, MenuItem, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TopMembersLoader from './TopMembersLoader'


function Members({members}) {

    return (
        <>
            {
                members.map(member => (
                    <ListItem  key={member.id} divider>
                        <Link to="/xpo" style={{textDecoration: "none", width: "100%"}} >

                        
                            <Box display="flex" width="100%" alignItems="center" >
                                
                                <ListItemIcon>
                                    
                                    <Avatar src="/images/pics.jpg" alt="pics" />
                                </ListItemIcon>
                                <Stack width="80%" >
                                    <Typography sx={{textTransform: "capitalize"}} color="ButtonText" variant="body1"> {member.name}</Typography>
                                    <Typography sx={{textTransform: "capitalize"}} variant="body2" color="ButtonShadow" noWrap={true}> {member.about}</Typography>
                                    
                                
                                </Stack>
                            </Box>
                        </Link>

                    </ListItem>
                ))
            }

        </>
        
    )

}


export default function TopMembers() {

    const [members, setMembers] = useState([
        {id: 33, name: "julia kary", about: "Ruby on rails, React"},
        {id: 35, name: "julia oluwa", about: "Javascript, React"},
        {id: 13, name: "julia", about: "Ruby on rails, React"},
        {id: 73, name: "julia", about: "Ruby on rails, React"},
        {id: 883, name: "julia", about: "Ruby on rails, React"},
       
    ])


    return (
        
            <List sx={{ width: '100%', maxWidth: 360, minHeight: 350, bgcolor: 'background.paper', borderRadius: "10px" }} component="nav" 
                subheader={<ListSubheader  component="div" sx={{textAlign: "left"}} > Top Members </ListSubheader>}  >
                <Members members={members} />
            </List>
     
    )
}