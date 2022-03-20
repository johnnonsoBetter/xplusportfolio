import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MemberList from './MemberList'
import MembersLoader from './MembersLoader'
import {useContext} from 'react'
import {FetchContext} from '../../../context/FetchContext'
import { AuthContext } from '../../../context/AuthContext'
import HomeInfoContext from '../../../context/HomeInfoContext'


export default function MembersContainer() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [totalMembers, setTotalMembers] = useState(0)
    const {appIsOffline} = useContext(HomeInfoContext)



    const fetchMoreData = () => {
        
        authAxios.get('api/v1/users', {params: {page: page}}).then(res => {
            const {data} = res 
            
            setPage(page + 1)
            setUsers(users.concat(data))
            setTotalMembers(users.length)
       }).catch(err => {
        
           
        
       })
    }


   

    useEffect(() => {
        document.title = "Members"
        setLoading(true)
        authAxios.get('api/v1/users', {params: {page: 1}}).then(res => {
             const {data} = res 
             setUsers(data)
             setLoading(false)
             setPage(page + 1)
        }).catch(err => {
         
            setSomethingWentWrong(true)
         
        })


        return () => {
            setLoading(true)
            setSomethingWentWrong(false)
            setUsers([])
        }

    }, [appIsOffline])
    
    return (
        <Box px={1} >
            {
                loading ?
                <MembersLoader /> 
                : 
                <MemberList users={users} fetchMoreData={fetchMoreData} totalMembers={totalMembers}/>
            }
           
        </Box>
    )
}

                            
