import { Box, ButtonBase, Grid, Paper, Typography } from '@mui/material'
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
        <Box my={2} height="calc(98vh - 45px)" overflow='auto'>
         
        {
            loading ?
            <ResourcesLoader /> : <ResourceList resources={agencies} />
        }

    
    
        </Box>
    )
}







