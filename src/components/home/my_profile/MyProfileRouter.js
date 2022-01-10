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
import { StaticRouter } from 'react-router-dom/server';
import { Switch } from 'react-router-dom';
import { ListSubheader } from '@mui/material';
import { Redirect } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

import Following from '../profile/following/Following';
import Followers from '../profile/followers/Followers';
import AncticipationContainer from '../profile/anticipations/AnticipationContainer';
import ProjectContainer from '../profile/projects/ProjectContainer';
import MainProfile from '../profile/main/MainProfile';
import SuggestionContainer from '../profile/suggestions/SuggestionContainer';



function MyTabs({slug}) {

  return (
    <Tabs 
    variant="scrollable"
    scrollButtons
    
    aria-label="scrollable force tabs example" 
    >
      <Tab label="Profile"  value="?profile" to={`/xpo/my_profile/${slug}`} component={NavLink} />
      <Tab label="Projects" value="?projects" to={`/xpo/my_profile/${slug}/projects`} component={NavLink} />
      <Tab label="Anticipations" value="?anticipations" to={`/xpo/my_profile/${slug}/anticipations`} component={NavLink} />
      <Tab label="Suggestions" value="?suggestions" to={`/xpo/my_profile/${slug}/suggestions`} component={NavLink} />
      <Tab label="Followers" value="?followers" to={`/xpo/my_profile/${slug}/followers`} component={NavLink} />
      <Tab label="Following" value="?following" to={`/xpo/my_profile/${slug}/following`} component={NavLink} />
      
    </Tabs>
  );
}


export default function MyProfileRouter({slug}) {
  const {path} = useRouteMatch()
  const {pathname} = useLocation

  return (
    
      <Box sx={{ width: '100%' }} my={2}>
        
        
        <ListSubheader  sx={{borderRadius: "5px", bgcolor: "white", zIndex: 500}}>
          <MyTabs slug={slug}/>
        </ListSubheader>
        <Switch>
   
          <Route path={`/xpo/my_profile/${slug}/following`} render={ () => <Following />} />
          <Route path={`/xpo/my_profile/${slug}/followers`} render={ () => <Followers />} />
          <Route path={`/xpo/my_profile/${slug}/suggestions`} render={ () => <SuggestionContainer />} />
          <Route path={`/xpo/my_profile/${slug}/anticipations`} render={ () => <AncticipationContainer />} />
          <Route path={`/xpo/my_profile/${slug}/projects`} render={ () => <ProjectContainer />} />
          <Route exact path={`/xpo/my_profile/${slug}`} render={ () => <MainProfile isCurrentUser={true} />} />
          <Redirect to="/404" />
          
        </Switch>
      </Box>
    
  ); 
}
