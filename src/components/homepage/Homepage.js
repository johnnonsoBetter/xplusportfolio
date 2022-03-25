import React from 'react'

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TopbarContent from './contents/top_section/TopSectionContent';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Chip } from '@mui/material';



export default function Homepage(props) {
  return (
    <Box height='calc(99.9vh - 2px)' overflow='auto' 
        style={{  
      
            backgroundImage: `url("/images/homepage_b.png")`,
            backgroundColor: "#f1f2f3",
            backgroundPosition: 'center',
        
            backgroundRepeat: 'repeat'
        }}      
    >
      <CssBaseline />
      
        <AppBar elevation={0} sx={{backgroundColor: '#f5f5f5'}}>
          <Toolbar>
            <Box width="100%" display="flex" position='relative' alignItems="center" justifyContent="space-between" >
                <Box flexGrow={2} display='flex' justifyContent='flex-start'  >
                    <Link to='/xpo' >
                        <Box component="img" srcSet="/images/xlogo.png" alt="logo" width={120} maxWidth="80%" />
                
                    </Link>
                    
                </Box>

                <Box display='flex' justifyContent='flex-end' >
                    <Chip label='Why Bother?' clickable color='info' />
                    <Chip label='Signup' clickable color='info' sx={{mx: 1}} />
                    <Chip label='Login' clickable color='info' />

                </Box>
            </Box>
          </Toolbar>
        </AppBar>
      
      <Toolbar />
     
        <Box  >
         <TopbarContent />
        </Box>
   
    </Box>
  );
}
