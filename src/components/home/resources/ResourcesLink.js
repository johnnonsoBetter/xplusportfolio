import { Avatar, Box, List, ListItem, ListItemIcon, ListSubheader, Menu, MenuItem, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'




export default function ResourcesLink() {

    const resourcesPageLinks = [
        {link: 'communities', name: 'Communities', imgPath: 'communities.png'},
        {link: 'learning', name: 'Learning', imgPath: 'book.png'},
        {link: 'job_boards', name: 'Job Boards', imgPath: 'suitcase.png'},
        {link: 'side_incomes', name: 'Side Income', imgPath: 'passive-income.png'},
        {link: 'recruitment_agencies', name: 'Agencies', imgPath: 'contract.png'},

       
    ]
    
    return (
            
            
            <List  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: "10px" }} component="nav" 
                subheader={<ListSubheader  component={
                    () => (
                    <Box p={2} display="flex" justifyContent="space-between">
                        
                        <Typography color="ButtonText" variant="body2" fontWeight={600} sx={{textAlign: "left"}}> Resources</Typography>
                    </Box> )
                
                } sx={{textAlign: "left"}} >  </ListSubheader>}  >
               
                {
                    resourcesPageLinks.map(pageLink => (
                        <ListItem  key={pageLink.link} >
                    
                        
                            <Box display="flex" width="100%" alignItems="center" justifyContent="space-between" >
                                <Link to={`/xpo/${pageLink.link}`}  style={{textDecoration: "none", display: "flex", alignItems: "center"}} width="100%" alignItems="center" >
                            
                                <ListItemIcon  >
                                    
                                    <img src={`/images/${pageLink.imgPath}`}   alt={pageLink.name} />
                                </ListItemIcon>
                                <Stack  >
                                   
                                    <Box  >
                                    <Typography sx={{textTransform: "capitalize"}} color="ButtonText" variant="body2" noWrap={true}> {pageLink.name}</Typography>
                                    
                                    </Box>
                                   

                                
                                </Stack>
                                </Link>
                                
                                
                                
                            </Box>
                           
                       
                    </ListItem>
                    ))
                }

            </List>
     
    )
}