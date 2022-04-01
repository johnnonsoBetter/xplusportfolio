import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'


export default function ActivityLoader() {


    return (

       <Box my={1} >
           
           <CircularProgress  color="inherit"  />
           <Typography> Loading...</Typography>
       </Box>
    )
}