import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../../../../context/AuthContext'
import { FetchContext } from '../../../../context/FetchContext'
import AnticipationList from './AnticipationList'
import AnticipationListLoader from './AnticipationListLoader'

export default function  AncticipationContainer() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [anticipations, setAnticipations] = useState([])
    const {slug} = useParams()
    const [totalAnticipations, setTotalAnticipations] = useState(0)
    const [page, setPage] = useState(0)
    const [totalMembers, setTotalMembers] = useState(0)



    const fetchMoreData = () => {
        
        authAxios.get(`/api/v1/users/${slug}/anticipations`, {params: {page: page}}).then(res => {
            const {data} = res 
            setAnticipations(data)
            setPage(page + 1)
            setTotalAnticipations(anticipations.length)
       }).catch(err => {
        
           console.log(err)
        
       })
    }



  

    useEffect(() => {   
        console.log("Making")

        authAxios.get(`/api/v1/users/${slug}/anticipations`).then(res => {
            console.log(res)
            setAnticipations(res.data)
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
                <AnticipationList anticipations={anticipations} fetchMoreData={fetchMoreData} totalAnticipations={totalAnticipations} />

            }
        </Box>
    )
}