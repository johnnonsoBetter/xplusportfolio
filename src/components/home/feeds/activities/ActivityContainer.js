import {  Box } from '@mui/material'
import React from 'react'

import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import MembersContainer from '../../members/MembersContainer';
import ProfileContainer from '../../profile/ProfileContainer';
import ProjectContainer from '../project/ProjectContainer';
import ActivityPage from './ActivityPage';

export default function ActivityContainer() {

    const {path} = useRouteMatch()


    return (
        <Box width="100%">
            
            <Switch >
                <Route path={`${path}/projects/:slug`} render={() => <ProjectContainer />} />
                <Route path={`${path}/members/:slug`} render={() => <ProfileContainer />} />
                <Route  path={`${path}/members`} render={() => <MembersContainer />} />
                <Route exact path={path}  render={() => <ActivityPage /> } />
                <Redirect to="/404"  />
            </Switch>
        </Box>
    )
}

