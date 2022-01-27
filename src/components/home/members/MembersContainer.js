import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MemberList from './MemberList'
import MembersLoader from './MembersLoader'
import {useContext} from 'react'
import {FetchContext} from '../../../context/FetchContext'
import { AuthContext } from '../../../context/AuthContext'


export default function MembersContainer() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        setLoading(true)
        authAxios.get('api/v1/users').then(res => {
             const {data} = res 
             setUsers(data)
             setLoading(false)
        }).catch(err => {
         
            setSomethingWentWrong(true)
         
        })

    }, [])
    
    return (
        <Box >
            {
                loading ?
                <MembersLoader /> 
                : 
                <MemberList users={users} />
            }
           
        </Box>
    )
}

                            
