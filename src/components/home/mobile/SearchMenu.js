import { Avatar, Box, Button, List, ListItem, ListItemIcon, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Folder, PsychologyOutlined, PsychologyRounded } from '@mui/icons-material';
import { blueGrey, grey, purple, red } from '@mui/material/colors';
import DrawerContext from '../../../context/DrawerContext';
import { Link } from 'react-router-dom';

 function Search() {
  return (
    <Paper 
      
      sx={{ display: 'flex', mr: 1, alignItems: 'center', width: "90%", backgroundColor: 'grey'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search google maps' }}
        size="small"
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
  );
}


export default function MobileSearch() {

    const {closeDrawer} = useContext(DrawerContext)

    return (
        <Box mx={1} sx={{p: "2px"}} >
           
            
            <Box display="flex" justifyContent="space-between" alignItems="center"  >
                <Search />
                <Button onClick={closeDrawer} disableRipple size="small" color="inherit" sx={{color: grey[600]}} >
                    Cancel
                </Button>
            </Box>

            <List sx={{my: 2}} >
                <ListItem  >
                    <Link to={`/xpo/projects/${4}`} style={{textDecoration: "none", width: "100%"}} >

                        <Box display="flex" width="100%" alignItems="center" >
                            
                            <ListItemIcon>
                            <Avatar sx={{backgroundColor: purple[300]}} > <Folder  /> </Avatar>
                                
                            </ListItemIcon>
                            <Stack  >
                                
                                
                                <Box  maxWidth="90" >
                                    <Typography variant="body2" sx={{textTransform: "capitalize"}} color="ButtonText"> Todo application</Typography>
                                </Box>
                                <Box maxWidth="95%" >
                                <Typography  variant="body2" color="ButtonShadow" noWrap={true}> A todo list application that helps "</Typography>
                                </Box>
                            
                            </Stack>
                        </Box>
                    </Link>

                </ListItem>

                <ListItem  >
                    <Link to={`/xpo/projects/${4}`} style={{textDecoration: "none", width: "100%"}} >

                        <Box display="flex" width="100%" alignItems="center" >
                            
                            <ListItemIcon>
                            <Avatar sx={{backgroundColor: purple[300]}} > <Folder  /> </Avatar>
                                
                            </ListItemIcon>
                            <Stack  >
                                
                                
                                <Box  maxWidth="90" >
                                    <Typography sx={{textTransform: "capitalize"}} color="ButtonText" variant="body2"> Todo application</Typography>
                                </Box>
                                <Box maxWidth="95%" >
                                <Typography  variant="body2" color="ButtonShadow" noWrap={true}> A todo list application that helps "</Typography>
                                </Box>
                            
                            </Stack>
                        </Box>
                    </Link>

                </ListItem>

                <ListItem  >
                    <Link to={`/xpo/projects/${4}`} style={{textDecoration: "none", width: "100%"}} >

                        <Box display="flex" width="100%" alignItems="center" >
                            
                            <ListItemIcon>
                            <Avatar src="/images/selfie.jpeg" sx={{backgroundColor: purple[200]}} />
                                
                            </ListItemIcon>
                            <Stack  >
                                
                                
                                <Box maxWidth="90" >
                                    <Typography sx={{textTransform: "capitalize"}} color="ButtonText" variant="body2"> Chukwuma obi kemi</Typography>
                                </Box>
                                <Box maxWidth="95%" >
                                <Typography  variant="body2" color="ButtonShadow" noWrap={true}>  A Ruby on rails developer </Typography>
                                </Box>
                            
                            </Stack>
                        </Box>
                    </Link>

                </ListItem>

                <ListItem  >
                    <Link to={`/xpo/projects/${4}`} style={{textDecoration: "none", width: "100%"}} >

                        <Box display="flex" width="100%" alignItems="center" >
                            
                            <ListItemIcon>
                            <Avatar sx={{backgroundColor: red[300]}} > <PsychologyOutlined  /> </Avatar>
                                
                            </ListItemIcon>
                            <Stack  >
                                
                                
                                <Box  maxWidth="90" >
                                    <Typography sx={{textTransform: "capitalize"}} color="ButtonText" variant="body2"> Todo application</Typography>
                                </Box>
                                <Box maxWidth="95%" >
                                <Typography  variant="body2" color="ButtonShadow" noWrap={true}> A todo list application that helps "</Typography>
                                </Box>
                            
                            </Stack>
                        </Box>
                    </Link>

                </ListItem>

                
            </List>
            
        </Box>
    )
}