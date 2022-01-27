import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MemberList from './MemberList'
import MembersLoader from './MembersLoader'
import {useContext} from 'react'
import {FetchContext} from '../../../context/FetchContext'


export default function MembersContainer() {

    const {authAxios, somethingWentWrong} = useContext(FetchContext)

    const [loading, setLoading] = useState(false)
    const [failed, setFailed] = useState(false)
    const [users, setUsers] = useState([])

    

    

    useEffect(() => {
        authAxios.get('api/v1/users').then(res => {
             const {data} = res 
             setUsers(data)


        }).catch(err => {
            console.log(err)
        })

    }, [])
    
    return (
        <Box >
           <MemberList users={users} />
            
        </Box>
    )
}

                            
