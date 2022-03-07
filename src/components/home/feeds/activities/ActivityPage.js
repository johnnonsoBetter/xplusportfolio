import { PsychologyRounded } from '@mui/icons-material';
import { Avatar, Box, Divider, IconButton, InputBase, Paper, Skeleton, Stack } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ActivityLoader from './ActivityLoader';
import AnticipationActivity from './anticipation_activity/AnticipationActivity';
import ProjectActivity from './project_activity/ProjectActivity';
import '../../../../App.css'
import {useHistory} from 'react-router-dom'
import FeedLoader from '../../../shared/FeedLoader';
import { FetchContext } from '../../../../context/FetchContext';
import { AuthContext } from '../../../../context/AuthContext';
import ActivityList from './ActivityList';
import HomeInfoContext from '../../../../context/HomeInfoContext';



export default function ActivityPage() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [finished, setFinished] = useState(false)
    const [loading, setLoading] = useState(false)
    const [activities, setActivities] = useState([])
    const [page, setPage] = useState(1)
    const [totalActivities, setTotalActivities] = useState(0)
    const {showFriendsActivities, setShowFriendsActivites, setNewPostAvailable} = useContext(HomeInfoContext)



    const fetchMoreData = () => {
        
        authAxios.get(  showFriendsActivities ? 'api/v1/friends_activities'  :'api/v1/all_activities', {params: {page: page}}).then(res => {
            const {data} = res 


            
            setPage(page + 1)
            setActivities(activities.concat(data))
            setTotalActivities(activities.length)
       }).catch(err => {
        
           console.log(err.response)

           const {exception, status} = err.response 

           console.log(exception)

           if(status === 500){
               console.log("Stop it")
               setFinished(true)
           }
                
        
       })
    }


   

    useEffect(() => {
        setLoading(true)
        setNewPostAvailable(false)
        authAxios.get(showFriendsActivities ? 'api/v1/friends_activities'  :'api/v1/all_activities', {params: {page: 1}}).then(res => {
             const {data} = res 
             setActivities(data)
             setLoading(false)
             setPage(page + 1)
             setNewPostAvailable(false)
             setShowFriendsActivites(false)
             setNewPostAvailable(false)
        }).catch(err => {
         
            setSomethingWentWrong(true)
         
        })


        return () => {
            setLoading(true)
            setSomethingWentWrong(false)
            setActivities([])
            setShowFriendsActivites(false)
            setFinished(false)
        }

    }, [showFriendsActivities])

    return (
        <Box className="activity-container" sx={{width: "100%",  height: "calc(99vh - 85px)", scrollbarWidth: {display: "none"}, overflowY: "auto"}}>
                <ActivityList loading={loading} finished={finished} totalActivities={totalActivities} activities={activities} fetchMoreData={fetchMoreData} />
        </Box>
    )
}




