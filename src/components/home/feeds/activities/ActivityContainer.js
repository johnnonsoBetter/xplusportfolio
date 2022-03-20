import {  Box } from '@mui/material'
import React, {useRef} from 'react'

import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import NotificationPage from '../../all_notifications/NotificationPage';
import MembersContainer from '../../members/MembersContainer';
import EditProfile from '../../my_profile/edit/EditProfile';
import MyProfileContainer from '../../my_profile/MyProfileContainer';
import ProfileContainer from '../../profile/ProfileContainer';
import ProjectContainer from '../project/ProjectContainer';
import ActivityPage from './ActivityPage';
import Agencies from './resources/Agencies';
import Communities from './resources/Communities';
import JobBoards from './resources/JobBoards';
import Learning from './resources/Learning';
import SideIncomes from './resources/SideIncomes';

export default function ActivityContainer() {

    const {path} = useRouteMatch()


    return (
        <Box width="100%" >
            
            <Switch >
                <Route path={`/xpo/communities`} render={() => <Communities />} />
                <Route path={`/xpo/job_boards`} render={() => <JobBoards />} />
                <Route path={`/xpo/side_incomes`} render={() => <SideIncomes />} />
                <Route path={`/xpo/recruitment_agencies`} render={() => <Agencies />} />
                <Route path={`/xpo/learning`} render={() => <Learning />} />
                <Route path={`/xpo/projects/:slug`} render={() => <ProjectContainer />} />
                <Route path={`/xpo/members/:slug`} render={() => <ProfileContainer  />} />
                <Route  path={`/xpo/members`} render={() => <MembersContainer />} />
                <Route  path={`/xpo/my_profile/:slug`} render={() => <MyProfileContainer />} />
                <Route path={'/xpo/edit_profile'}  render={() => <EditProfile /> }/> 
                <Route path={'/xpo/notifications'}  render={() => <NotificationPage /> }/> 
                <Route exact path={path}  render={() => <ActivityPage /> } />
                <Route exact path="*"  render={() => <Redirect to="/404" /> } />
                <Redirect to="/404"  />
            </Switch>
        </Box>
    )
}

