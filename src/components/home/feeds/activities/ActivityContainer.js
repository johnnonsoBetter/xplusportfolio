import {  Box } from '@mui/material'
import React from 'react'

import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import MembersContainer from '../../members/MembersContainer';
import MyProfileContainer from '../../my_profile/MyProfileContainer';
import ProfileContainer from '../../profile/ProfileContainer';
import ProjectContainer from '../project/ProjectContainer';
import ActivityPage from './ActivityPage';

export default function ActivityContainer() {

    const {path} = useRouteMatch()


    return (
        <Box width="100%">
            
            <Switch >
                <Route path={`/xpo/projects/:slug`} render={() => <ProjectContainer />} />
                <Route path={`/xpo/members/:slug`} render={() => <ProfileContainer slug="john-doe" />} />
                <Route  path={`/xpo/members`} render={() => <MembersContainer />} />
                <Route  path={`/xpo/my_profile`} render={() => <MyProfileContainer />} />
                <Route exact path={path}  render={() => <ActivityPage /> } />
                <Route exact path="*"  render={() => <Redirect to="/404" /> } />
                <Redirect to="/404"  />
            </Switch>
        </Box>
    )
}

