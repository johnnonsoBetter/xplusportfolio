import { Box, ButtonBase, Grid, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react' 
import { AuthContext } from '../../../../../context/AuthContext'
import { FetchContext } from '../../../../../context/FetchContext'
import ResourcesLoader from './ResourcesLoader'



export default function Learning() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [communities, setCommunites] = useState([])

    useEffect(() => {

        document.title = "Learning"
        authAxios.get('api/v1/resources',  {params: {resources_type: 'learning'}}).then(res => {

            setCommunites(res.data)
            setLoading(false)
        }).catch(err => {
            setSomethingWentWrong(true)
        })

        return () => {
            setSomethingWentWrong(false)
            setCommunites([])
        }
    }, [])

    

    return (
       <ResourcesLoader />
    )
}







