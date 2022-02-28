import { Avatar, BottomNavigation, BottomNavigationAction, Box, Button, List, ListItem, ListItemIcon, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowBackIosNewRounded, Folder, PsychologyOutlined, PsychologyRounded } from '@mui/icons-material';
import { blueGrey, grey, purple, red } from '@mui/material/colors';
import DrawerContext from '../../../context/DrawerContext';
import { Link } from 'react-router-dom';
import Search from '../Search';


export default function MobileSearch() {

    const {closeDrawer} = useContext(DrawerContext)

    return (
        <Box mx={1} sx={{p: "2px"}} >
           
            
            <Box   >
                <Search />
               
            </Box>

            <Paper  sx={{ position: 'fixed', zIndex: 500, bottom: 0, left: 0, right: 0, display: {xs: "block", sm: "block", md: "none" }}} elevation={0}>
                <BottomNavigation
                showLabels
            
                sx={{
                    textDecoration: "none"
                }}
                value={0}
              
                >

                <BottomNavigationAction disableRipple onClick={closeDrawer}  label="Go Back" icon={<ArrowBackIosNewRounded />} />
                   
                </BottomNavigation>
            </Paper>

           
            
        </Box>
    )
}