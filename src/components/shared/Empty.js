import { InboxOutlined } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react' 



export default function Empty({emptyDetail, sx}) {
    return (
        <Box sx={sx}>

                <Typography sx={{textTransform: "capitalize"}} fontWeight={800} > {emptyDetail}  </Typography>
                

        </Box>
    )
}