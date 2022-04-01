import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react' 
import { AuthContext } from '../../../../../context/AuthContext'
import { FetchContext } from '../../../../../context/FetchContext'
import ResourceList from './ResourceList'
import ResourcesLoader from './ResourcesLoader'

export default function Agencies() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [agencies, setAgencies] = useState([])

    useEffect(() => {

        document.title = "Agencies"
        authAxios.get('api/v1/resources',  {params: {resource_type: 'agency'}}).then(res => {

            setAgencies(res.data)
            setLoading(false)
        }).catch(err => {
            setSomethingWentWrong(true)
        })

        return () => {
            setSomethingWentWrong(false)
            setAgencies([])
        }
    }, [])

    

    return (
        <Box my={2} mb={5} height="calc(96vh - 45px)" overflow='auto'>

        <Typography textAlign='left' variant='h6' sx={{ml: {xs: 2, sm: 2, md: 0}}}> Agencies</Typography>
        {
            loading ?
            <ResourcesLoader /> : <ResourceList resources={agencies} />
        }

        </Box>
    )
}







