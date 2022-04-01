import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../../../../context/AuthContext'
import { FetchContext } from '../../../../context/FetchContext'
import AnticipationList from './AnticipationList'
import AnticipationListLoader from './AnticipationListLoader'
import Empty from '../../../shared/Empty'
import HomeInfoContext from '../../../../context/HomeInfoContext'

export default function  AncticipationContainer() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [finished, setFinished] = useState(false)
    const [anticipations, setAnticipations] = useState([])
    const {slug} = useParams()
    const [totalAnticipations, setTotalAnticipations] = useState(1)
    const [page, setPage] = useState(1)
    const {titleBarUserName, appIsOffline} = useContext(HomeInfoContext)



    const fetchMoreData = () => {
        
        authAxios.get(`/api/v1/users/${slug}/anticipations`, {params: {page: page}}).then(res => {
            const {data} = res 
            setPage(page + 1)
            setAnticipations(anticipations => anticipations.concat(data))
            setTotalAnticipations(anticipations.length)
            
            
       }).catch(err => {
        
            const {exception, status} = err.response 

           if(status === 500){
            
               setFinished(true)
           }
        
       })
    }



  

    useEffect(() => {   
        document.title = titleBarUserName + ' (Anticipations)'
        setLoading(true)
        authAxios.get(`/api/v1/users/${slug}/anticipations`, {params: {page: page}}).then(res => {
            
            
            setAnticipations(res.data)
            setPage(page => page + 1)
            setTotalAnticipations(res.data.length)
            setLoading(false)
        }).catch(err => {
    
            setSomethingWentWrong(true)
        })


        return () => {
            setAnticipations([])
            setLoading(true)
            setFinished(false)
            setTotalAnticipations(0)
            setSomethingWentWrong(false)
        }
    }, [slug, appIsOffline])








    return (
        <Box >
            {
                loading ?
                <AnticipationListLoader />
                : 
                <>
                {
                    anticipations.length === 0 ? 
                    <Empty emptyDetail="No Anticipation Yet" sx={{minHeight: "300px", display: "flex", alignItems: 'center', justifyContent: "center"}}/> : 
                    <AnticipationList anticipations={anticipations} fetchMoreData={fetchMoreData} totalAnticipations={totalAnticipations} finished={finished} loading={loading} />

                }
                
                </>
               
            }
        </Box>
    )
}