import { Box, Typography } from '@mui/material'
import React from 'react'
import PinnedProjectLoader from '../pins/PinnedProjectLoader'


export default function PinnedProjectMenu() {

    return (
        <Box >
            <Typography> PinnedProject is here waiting for me and you today</Typography>
           <PinnedProjectLoader length={5} />
        </Box>
    )
}