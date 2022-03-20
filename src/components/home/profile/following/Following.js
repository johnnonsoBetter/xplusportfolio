import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../../../../context/AuthContext'
import { FetchContext } from '../../../../context/FetchContext'
import HomeInfoContext from '../../../../context/HomeInfoContext'
import Empty from '../../../shared/Empty'
import MemberList from '../../members/MemberList'
import MembersLoader from '../../members/MembersLoader'


export default function Following() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const {slug} = useParams()
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(0)
    const [totalMembers, setTotalMembers] = useState(0)
    const {titleBarUserName, appIsOffline} = useContext(HomeInfoContext)

    const fetchMoreData = () => {
        
        authAxios.get(`/api/v1/users/${slug}/followings`, {params: {page: page}}).then(res => {
            const {data} = res 
            setUsers(users.concat(data))
            setPage(page + 1)
            setTotalMembers(users.length)
       }).catch(err => {
        
       
        
       })
    }



    useEffect(() => {
        document.title = titleBarUserName + ' (Following)'
        setLoading(true)
        authAxios.get(`/api/v1/users/${slug}/followings`, {params: {page: 1}}).then(res => {
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

    }, [slug, appIsOffline])


    
    return (
        <Box px={1} >
            {
                loading ?
                <MembersLoader /> 
                : 
                <>
                {
                     users.length === 0 ?
                     <Empty emptyDetail="No Followings" sx={{minHeight: "300px", display: "flex", alignItems: 'center', justifyContent: "center"}}/> : 
                        
                    <> 

                        <MemberList noFollow={false} users={users} fetchMoreData={fetchMoreData} totalMembers={totalMembers}/>
                    
                    </>
                   }
                
                </>
            }
           
        </Box>
    )
}