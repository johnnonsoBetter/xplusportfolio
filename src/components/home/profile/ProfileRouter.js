import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {
  Route,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';

import { Switch } from 'react-router-dom';
import { ListSubheader } from '@mui/material';
import { Redirect } from 'react-router-dom';
import Followers from './followers/Followers';
import Following from './following/Following';
import ProjectContainer from './projects/ProjectContainer';
import AncticipationContainer from './anticipations/AnticipationContainer';
import { NavLink } from 'react-router-dom';
import SuggestionContainer from './suggestions/SuggestionContainer';
import MainProfile from './main/MainProfile';


function MyTabs({slug}) {

  return (
    <Tabs 
    variant="scrollable"
    scrollButtons
    
    aria-label="scrollable force tabs example" 
    >
      <Tab label="Profile"  value="?profile" to={`/xpo/members/${slug}`} component={NavLink} />
      <Tab label="Projects" value="?projects" to={`/xpo/members/${slug}/projects`} component={NavLink} />
      <Tab label="Anticipations" value="?anticipations" to={`/xpo/members/${slug}/anticipations`} component={NavLink} />
      <Tab label="Suggestions" value="?suggestions" to={`/xpo/members/${slug}/suggestions`} component={NavLink} />
      <Tab label="Followers" value="?followers" to={`/xpo/members/${slug}/followers`} component={NavLink} />
      <Tab label="Following" value="?following" to={`/xpo/members/${slug}/following`} component={NavLink} />
      
    </Tabs>
  );
}


export default function ProfileRouter({slug, isCurrentUser}) {
  const {path} = useRouteMatch()
  const {pathname} = useLocation

  return (
    
      <Box sx={{ width: '100%' }} my={2}>
        
        
        <ListSubheader  sx={{borderRadius: "0px", bgcolor: "white", zIndex: 500}}>
          <MyTabs slug={slug}/>
        </ListSubheader>
        <Switch>
   
          <Route path={`/xpo/members/${slug}/following`} render={ () => <Following />} />
          <Route path={`/xpo/members/${slug}/followers`} render={ () => <Followers />} />
          <Route path={`/xpo/members/${slug}/suggestions`} render={ () => <SuggestionContainer />} />
          <Route path={`/xpo/members/${slug}/anticipations`} render={ () => <AncticipationContainer />} />
          <Route path={`/xpo/members/${slug}/projects`} render={ () => <ProjectContainer />} />
          <Route exact path={`/xpo/members/${slug}`} render={ () => <MainProfile isCurrentUser={isCurrentUser} />} />
          <Redirect to="/404" />
          
        </Switch>
      </Box>
    
  ); 
}
