import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../../../../context/AuthContext'
import { FetchContext } from '../../../../context/FetchContext'
import AnticipationList from './AnticipationList'
import AnticipationListLoader from './AnticipationListLoader'
import Empty from '../../../shared/Empty'

export default function  AncticipationContainer() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [anticipations, setAnticipations] = useState([])
    const {slug} = useParams()
    const [totalAnticipations, setTotalAnticipations] = useState(0)
    const [page, setPage] = useState(1)



    const fetchMoreData = () => {
        
        authAxios.get(`/api/v1/users/${slug}/anticipations`, {params: {page: page}}).then(res => {
            const {data} = res 
            setAnticipations(data)
            setPage(page + 1)
            
       }).catch(err => {
        
           console.log(err)
        
       })
    }



  

    useEffect(() => {   
       

        authAxios.get(`/api/v1/users/${slug}/anticipations`, {params: {page: page}}).then(res => {
            console.log(res)
            setAnticipations(res.data)
            setTotalAnticipations(res.data.length)
            setLoading(false)
        }).catch(err => {
    
            console.log(err)
            setSomethingWentWrong(true)
        })


        return () => {
            setAnticipations([])
            setLoading(true)
        }
    }, [])



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
                    <AnticipationList anticipations={anticipations} fetchMoreData={fetchMoreData} totalAnticipations={totalAnticipations} />

                }
                
                </>
               
            }
        </Box>
    )
}