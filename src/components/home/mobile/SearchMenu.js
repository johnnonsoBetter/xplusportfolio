import { BottomNavigation, BottomNavigationAction, Box} from '@mui/material'
import React, { useContext } from 'react'
import Paper from '@mui/material/Paper';
import { ArrowBackIosNewRounded} from '@mui/icons-material';
import DrawerContext from '../../../context/DrawerContext';
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