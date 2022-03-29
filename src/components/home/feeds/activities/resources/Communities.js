import { OpenInNewOutlined } from '@mui/icons-material'
import { Box, Button, ButtonBase, Grid, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react' 
import ReactPlayer from 'react-player/youtube'
import { AuthContext } from '../../../../../context/AuthContext'
import { FetchContext } from '../../../../../context/FetchContext'
import Resource from './Resource'
import ResourceList from './ResourceList'
import ResourcesLoader from './ResourcesLoader'



export default function Communities() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [communities, setCommunites] = useState([])




    useEffect(() => {

        document.title = "Communities"

        authAxios.get('api/v1/resources',  {params: {resource_type: 'community'}}).then(res => {

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
        <Box my={2} height="calc(98vh - 45px)" overflow='auto'>

            <Typography textAlign='left' variant='h6'> Communities</Typography>
         
            {
                loading ?
                <ResourcesLoader /> : <ResourceList resources={communities} />
            }

           
        
        </Box>
       
    )
}





