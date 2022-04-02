import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react' 
import { AuthContext } from '../../../../../context/AuthContext'
import { FetchContext } from '../../../../../context/FetchContext'
import ResourceList from './ResourceList'
import ResourcesLoader from './ResourcesLoader'



export default function JobBoards() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [jobboards, setJobBoards] = useState([])

    useEffect(() => {

        document.title = "Job Boards"
        authAxios.get('api/v1/resources',  {params: {resource_type: 'job_board'}}).then(res => {

            setJobBoards(res.data)
            setLoading(false)
        }).catch(err => {
            setSomethingWentWrong(true)
        })

        return () => {
            setSomethingWentWrong(false)
            setJobBoards([])
        }
    }, [])

    

    return (
        <Box my={2} sx={{mx: {xs: 2, sm: 2, md: 0}}} mb={5} height="calc(96vh - 45px)"  overflow='auto'>

        <Typography textAlign='left' variant='h6' sx={{ml: {xs: 2, sm: 2, md: 0}}}> JobBoards</Typography>
     
            {
                loading ?
                <ResourcesLoader /> : <ResourceList resources={jobboards} />
            }

        
        
        </Box>
    )
}







