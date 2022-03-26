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
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Avatar, Chip, Divider } from '@mui/material';
import {KeyboardArrowDownRounded} from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import FeaturesSection from './contents/features_section/FeaturesSection';
import Footer from './contents/Footer';



export default function Homepage(props) {

  const history = useHistory()

  return (
    <Box height='calc(99.9vh - 2px)' overflow='auto' 
        style={{  
      
            
            backgroundColor: "#f5f5f5",
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
                    {/* <Chip label='Why Bother?' clickable color='info' /> */}
                    <Chip label='Signup' onClick={() => history.push('/sign_up')} clickable color='info' sx={{mx: 1}} />
                    <Chip label='Login' onClick={() => history.push('/login')} clickable color='info' />

                </Box>
            </Box>
          </Toolbar>
        </AppBar>
        
        <Toolbar />
      
     
        <Box   >
         <TopbarContent />
         <Box display='flex' alignItems='center' justifyContent='space-around' p={2} >
           <Divider sx={{width: '30%'}} />
           <Chip avatar={<Avatar sx={{backgroundColor: "white", color: "black"}} > <KeyboardArrowDownRounded /> </Avatar>} sx={{backgroundColor: "#313131", color: 'white'}} label="Explore how below"  />
           <Divider sx={{width: '30%'}} />
         </Box>

         <FeaturesSection />
        </Box>

        <Footer />
   
    </Box>
  );
}
