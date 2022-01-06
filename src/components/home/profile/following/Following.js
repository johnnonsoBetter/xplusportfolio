import { Box } from '@mui/material'
import React from 'react'
import MemberList from '../../members/MemberList'
import MembersLoader from '../../members/MembersLoader'


export default function Following() {

    return (
        <Box my={2} >
            {/* <MembersLoader /> */}
            <MemberList />
        </Box>  
        
    )
}