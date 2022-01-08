import { CloseOutlined, DeleteOutline, Folder, PushPinOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, List, ListItem, ListItemIcon, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DrawerContext from '../../../context/DrawerContext'
import PinnedProjectLoader from '../pins/PinnedProjectLoader'


export default function PinnedProjectMenu() {

    const {closeDrawer} = useContext(DrawerContext)

    return (
            <Box mx={1} sx={{p: "2px"}} >
            
                
                <Box display="flex" justifyContent="space-between" alignItems="center"  >
                <Typography>Projects To Review</Typography>
                    <Button onClick={closeDrawer} disableRipple size="small" color="inherit" sx={{color: grey[600]}} >
                        Cancel
                    </Button>
                </Box>

                <List sx={{my: 2}} >
                <ListItem disablePadding  >
                    
                        
                    <Box display="flex" width="100%" alignItems="center" justifyContent="space-between" >
                        <Link to="/xpo/members/john-doe"  style={{textDecoration: "none", display: "flex", flexGrow: 2, alignItems: "center"}} width="100%" alignItems="center" >
                    
                        <ListItemIcon >
                            
                            <Avatar > <Folder /> </Avatar>
                        </ListItemIcon>
                        <Stack width="100%"  >
                           
                            <Box  >
                            <Typography sx={{textTransform: "capitalize"}} color="ButtonText" variant="body1" noWrap={true}> Todo Application </Typography>
                            
                            </Box>
                            <Box  >
                                <Typography sx={{textTransform: "capitalize"}} variant="body2" color="ButtonShadow" noWrap={true}> This is a todo Application </Typography>
                            
                            </Box>

                        
                        </Stack>
                        </Link>
                        <Box flexGrow={1} ml={1} display="flex" justifyContent="flex-end"  >
                            <IconButton  >
                                <DeleteOutline />
                            </IconButton>

                        </Box>
                        
                        
                    </Box>
                   
               
                </ListItem>

                    
                </List>
                
            </Box>
    )
}