import { Box, MenuItem, Skeleton, Stack } from '@mui/material'
import React from 'react'


export default function PinnedProjectLoader({length = 5}) {
    const loaders = []

    for(var i = 0; i < length; i++){
        loaders.push(i)
    }
    return (
        <>
            
            {
                loaders.map(loader => (
                    <MenuItem key={loader} >
                
                        <Box display="flex" width="100%" alignItems="center" >
                            <Skeleton variant="circular" width={50} height={50} sx={{mr: 2}}/>
                            <Stack width="80%" >
                                <Skeleton variant="text" type="text" width="40%"  />
                                <Skeleton variant="text" type="text" width="66%"  />
                                <Skeleton variant="text" type="text" width="80%"  />
                              
                            </Stack>
                        </Box>
                    </MenuItem>
                ))
            }

        </>
        
    )
}