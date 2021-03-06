import { Box} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
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
    const {showFriendsActivities, setShowFriendsActivites, appIsOffline, totalNotifications} = useContext(HomeInfoContext)


    const fetchMoreData = () => {
        
        authAxios.get(  showFriendsActivities ? 'api/v1/friends_activities'  :'api/v1/all_activities', {params: {page: page}}).then(res => {
            const {data} = res 
            setPage(page => page + 1)
            setActivities(activities.concat(data))
            setTotalActivities(activities.length)
       }).catch(err => {

           const {status} = err.response 

           if(status === 500){
            
               setFinished(true)
           }
                
        
       })
    }


    useEffect(() => {
        document.title = totalNotifications >= 1 ? `Feeds (${totalNotifications})`: "Feeds"
        
        setLoading(true)
       
        authAxios.get(showFriendsActivities ? 'api/v1/friends_activities'  :'api/v1/all_activities', {params: {page: 1}}).then(res => {
             const {data} = res 
             setActivities(data)
             setLoading(false)
             setPage(page => page + 1)
             
             setShowFriendsActivites(false)
           
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

    }, [showFriendsActivities, appIsOffline])

    return (
        <Box className="activity-container" >
                <ActivityList loading={loading} finished={finished} totalActivities={totalActivities} activities={activities} fetchMoreData={fetchMoreData} />
        </Box>
    )
}




