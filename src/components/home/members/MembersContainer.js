import { Box } from '@mui/material'
import React from 'react'
import MemberList from './MemberList'
import MembersLoader from './MembersLoader'
import {useContext} from 'react'
import {FetchContext} from '../../../context/FetchContext'


export default function MembersContainer() {

    const {authAxios} = useContext(FetchContext)
    

    authAxios.get('api/v1/users').then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    
    return (
        <Box >
            <MemberList />
            
        </Box>
    )
}

                            
