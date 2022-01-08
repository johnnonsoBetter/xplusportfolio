import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import { Apps, PeopleOutlineRounded, Search } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';


export default function BottomNav() {
  const [value, setValue] = React.useState(1);
  const ref = React.useRef(null);
  const {pathname} = useLocation()


  return (
    
      <Paper  sx={{ position: 'fixed', zIndex: 500, bottom: 0, left: 0, right: 0, display: {xs: "block", sm: "none"}}} elevation={3}>
        <BottomNavigation
          showLabels
          
          component={Link}
          sx={{
              textDecoration: "none"
          }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
            <BottomNavigationAction disableRipple LinkComponent={Link} to="/xpo" label="Feeds" type="link" icon={<Apps />} />
          <BottomNavigationAction disableRipple LinkComponent={Link} to={`xpo/members`} label="Members" icon={<PeopleOutlineRounded />} />
          
          <BottomNavigationAction disableRipple LinkComponent={Link} to={`${pathname}#search`} label="Search" icon={<Search />} />
          
                        {/* <IconButton onClick={openMobileSearch}  sx={{display: {xs: "block", sm: "none"}, mt: 1}}>
                            <SearchIcon />
                        </IconButton>
                    </Link> */}
        </BottomNavigation>
      </Paper>
    
  );
}