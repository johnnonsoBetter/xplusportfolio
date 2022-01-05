import { Avatar, Badge, Box, List, ListItem, ListItemButton, ListItemIcon, ListSubheader, Menu, MenuItem, Paper, Stack, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Projects({projects}) {

    const {path} = useRouteMatch()

    return (
        <>
            {
                projects.map(project => (
                    <ListItem key={project.id} divider>
                        <Link to={`${path}/projects/${project.id}`} style={{textDecoration: "none", width: "100%"}} >

                            <Box display="flex" width="100%" alignItems="center" >
                                
                                <ListItemIcon>
                                    
                                    <Badge badgeContent={25}  color="primary" >
                                        <img width="32"  src="/images/portfolio.png" alt="portfolio" />
                                    </Badge>
                                </ListItemIcon>
                                <Stack  >
                                    
                                    
                                    <Box maxWidth={140} >
                                        <Typography sx={{textTransform: "capitalize"}} color="ButtonText" variant="body1"> {project.title}</Typography>
                                    </Box>
                                    <Box maxWidth={140} >
                                    <Typography  variant="body2" color="ButtonShadow" noWrap={true}> {project.desc}</Typography>
                                    </Box>
                                
                                </Stack>
                            </Box>
                        </Link>

                    </ListItem>
                ))
            }

        </>
        
    )

}

export default function TopProjects() {

    const [projects, setProjects] = useState([{id: 2, title: "Todo Application", desc: "A Todo dfsfsdsfsfsfsfsdfsfsappl"},
     {id: 42, title: "Todo Application", desc: "A Todo applsdfsfsdfsdf"}, {id: 2, title: "Todo Application", desc: "A Todo sdfssfsfsdfsdffsfsdfsdfsappl"},
     {id: 52, title: "Todo Application", desc: "A Todo applsdfsdfsdfs"},
     {id: 92, title: "Todo Application", desc: "A Todo appsdfsl"}
    ])


    return (
        
            <List sx={{ width: '100%', maxWidth: 360, minHeight: 350, bgcolor: 'background.paper', borderRadius: "10px" }} component="nav" 
                subheader={<ListSubheader  component={
                    () => (
                    <Box p={2} >
                         <Typography color="ButtonText" variant="body2" sx={{textAlign: "left"}}> Top Projects</Typography>
                    </Box> )
                
                }
               
               >  </ListSubheader>}  >
                 <Projects projects={projects} />
            </List>
     
    )
}



