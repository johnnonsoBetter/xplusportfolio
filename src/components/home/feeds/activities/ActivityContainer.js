import {  Box } from '@mui/material'
import React from 'react'

import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import ActivityPage from './ActivityPage';

export default function ActivityContainer() {

    const {path} = useRouteMatch()


    return (
        <Box width="100%">
            
            <Switch >
                <Route path={`${path}/projects/:slug`} render={() => <p> project</p>} />
                <Route  path={`${path}/members`} render={() => <p> members</p>} />
                <Route exact path={path}  render={() => <ActivityPage /> } />
                <Redirect to="/404"  />
            </Switch>
        </Box>
    )
}

