import { Avatar, Badge, Box, List, ListItem, ListItemButton, ListItemIcon, ListSubheader, Menu, MenuItem, Paper, Stack, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function TopProjects() {

    const [projects, setProjects] = useState([{id: 2, title: "Todo Application", desc: "A Todo dfsfsdsfsfsfsfsdfsfsappl"},
     {id: 2, title: "Todo Application", desc: "A Todo applsdfsfsdfsdf"}, {id: 2, title: "Todo Application", desc: "A Todo sdfssfsfsdfsdffsfsdfsdfsappl"},
     {id: 2, title: "Todo Application", desc: "A Todo applsdfsdfsdfs"},
     {id: 2, title: "Todo Application", desc: "A Todo appsdfsl"}
    ])


    function Projects({projects}) {

        return (
            <>
                {
                    projects.map(project => (
                        <ListItem key={project.id} divider>
                            <Link to="/xpo" style={{textDecoration: "none", width: "100%"}} >

                            
                                <Box display="flex" width="100%" alignItems="center" >
                                    
                                    <ListItemIcon>
                                        
                                        <Badge badgeContent={25}  color="primary" >
                                            <img width="32"  src="/images/portfolio.png" alt="portfolio" />
                                        </Badge>
                                    </ListItemIcon>
                                    <Stack width="80%" >
                                        <Typography zer color="ButtonShadow" variant="body1"> {project.title}</Typography>
                                        <Typography variant="body2" color="ButtonShadow" noWrap={true}> {project.desc}</Typography>
                                        
                                    
                                    </Stack>
                                </Box>
                            </Link>

                        </ListItem>
                    ))
                }
    
            </>
            
        )
    
    }

    return (
        
            <List sx={{ width: '100%', maxWidth: 360, minHeight: 400, bgcolor: 'background.paper', borderRadius: "10px" }} component="nav" 
                subheader={<ListSubheader  component="div" sx={{textAlign: "left"}} > Top Projects </ListSubheader>}  >
                 <Projects projects={projects} />
            </List>
     
    )
}



