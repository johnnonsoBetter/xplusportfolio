import React, { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { Apps, BubbleChartRounded, PeopleOutlineRounded, Search } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { Box, Slide } from '@mui/material';
import ResourcesMobileLink from './resources/ResourcesMobileLink';


export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const location = useLocation()

  useEffect(() => {

    if (location.hash != "#search" && value === 2)
        setValue(-1)

    if (location.pathname !== "/xpo/members" && value === 1)
        setValue(-1)

    if (location.pathname !== "/xpo" && value === 0)
        setValue(-1)

    if (location.pathname === "/xpo/members")
        setValue(1)

    if (location.pathname === "/xpo")
        setValue(0)
  }, [location.hash, location.pathname ])


  return (
      <Slide in={true} direction='up' >

      <Paper  sx={{ position: 'fixed', zIndex: 500, bottom: 0, left: 0, right: 0, display: {xs: "block", sm: "none"}}} elevation={3}>
        <BottomNavigation
          showLabels
     
          sx={{
              textDecoration: "none"
          }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
            <BottomNavigationAction disableRipple LinkComponent={Link} to="/xpo" label="Feeds" type="link" icon={<Apps fontSize='24px' />} />
          <BottomNavigationAction disableRipple LinkComponent={Link} to={`/xpo/members`} label="Members" icon={<PeopleOutlineRounded fontSize='24px'/>} />
          
          
          <BottomNavigationAction disableRipple LinkComponent={Link} to={`#search`} label="Search" icon={<Search fontSize='24px' />} />
          
          <ResourcesMobileLink />
          
                     
        </BottomNavigation>
      </Paper>



      </Slide>
     
    
  );
}