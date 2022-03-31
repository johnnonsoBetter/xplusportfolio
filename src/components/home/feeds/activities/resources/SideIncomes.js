import { Box, ButtonBase, Grid, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react' 
import { AuthContext } from '../../../../../context/AuthContext'
import { FetchContext } from '../../../../../context/FetchContext'
import ResourceList from './ResourceList'
import ResourcesLoader from './ResourcesLoader'



export default function SideIncomes() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [sideIncomes, setSideIncomes] = useState([])

    useEffect(() => {

        document.title = "Side Incomes"
        authAxios.get('api/v1/resources',  {params: {resource_type: 'side_income'}}).then(res => {

            setSideIncomes(res.data)
            setLoading(false)
        }).catch(err => {
            setSomethingWentWrong(true)
        })

        return () => {
            setSomethingWentWrong(false)
            setSideIncomes([])
        }
    }, [])

    

    return (
        <Box my={2} height="calc(98vh - 45px)" overflow='auto'>
         
        {
            loading ?
            <ResourcesLoader /> : <ResourceList resources={sideIncomes} />
        }

    
    
    </Box>
    )
}







