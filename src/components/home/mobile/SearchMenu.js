import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { PsychologyRounded } from '@mui/icons-material';
import { blueGrey, grey } from '@mui/material/colors';
import DrawerContext from '../../../context/DrawerContext';

 function Search() {
  return (
    <Paper 
      
      sx={{ display: 'flex', mr: 1, alignItems: 'center', width: "90%", backgroundColor: 'grey'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search google maps' }}

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
            
        </Box>
    )
}