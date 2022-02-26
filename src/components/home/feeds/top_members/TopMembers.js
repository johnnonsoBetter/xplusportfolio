import { PersonAddOutlined } from '@mui/icons-material'
import { Avatar, Box, IconButton, List, ListItem, ListItemIcon, ListSubheader, Menu, MenuItem, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TopMembersLoader from './TopMembersLoader'


function Members({members}) {

    return (
        <>
            {
                members.map(member => (
                    <ListItem  key={member.id} divider>
                    
                        
                            <Box display="flex" width="100%" alignItems="center" justifyContent="space-between" >
                                <Link to="/xpo/members/john-doe"  style={{textDecoration: "none", display: "flex", alignItems: "center"}} width="100%" alignItems="center" >
                            
                                <ListItemIcon >
                                    
                                    <Avatar src="/images/pics.jpg" alt="pics" />
                                </ListItemIcon>
                                <Stack  >
                                   
                                    <Box maxWidth={120} >
                                    <Typography sx={{textTransform: "capitalize"}} color="ButtonText" variant="body1" noWrap={true}> {member.name}</Typography>
                                    
                                    </Box>
                                   

                                
                                </Stack>
                                </Link>
                                <Box flexGrow={1} ml={1} display="flex" justifyContent="flex-end"  >
                                    <IconButton  >
                                        <PersonAddOutlined />
                                    </IconButton>

                                </Box>
                                
                                
                            </Box>
                           
                       
                    </ListItem>
                ))
            }

        </>
        
    )

}


export default function TopMembers() {

    const [members, setMembers] = useState([
        {id: 33, name: "julia kary", about: "Ruby on rails, React"},
        {id: 35, name: "julia oluwa", about: "Javascript, React hoemaker is going to add some littiel     ssdfsfsfsdfsdf"},
        {id: 13, name: "julia", about: "Ruby on rails, React, python"},
        {id: 73, name: "julia", about: "Ruby on rails, React"},
        {id: 883, name: "julia", about: "Ruby on rails, React"},
       
    ])
    const {path} = useRouteMatch()


    return (
        
            <List sx={{ width: '100%', maxWidth: 360, minHeight: 350, bgcolor: 'background.paper', borderRadius: "10px" }} component="nav" 
                subheader={<ListSubheader  component={
                    () => (
                    <Box p={2} display="flex" justifyContent="space-between">
                        
                        <Typography color="ButtonText" variant="body2" sx={{textAlign: "left"}}> Members</Typography>
                        <Link   to={`/xpo/members`}> <Typography   color="ButtonText" variant="body2" sx={{textAlign: "left"}}> more</Typography></Link>
                    </Box> )
                
                } sx={{textAlign: "left"}} >  </ListSubheader>}  >
                <Members members={members} />
            </List>
     
    )
}