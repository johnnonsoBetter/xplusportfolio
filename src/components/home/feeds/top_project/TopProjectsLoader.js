import { Box, List, ListItem, MenuItem, Skeleton, Stack } from '@mui/material'
import React from 'react'


export default function TopProjectsLoader() {
    const loaders = [1, 2, 3, 4, 5]
    return (
        <>
            {
                loaders.map(loader => (
                    <ListItem key={loader}>
                        <Box display="flex" width="100%" alignItems="center" >
                            <Skeleton variant="circular" width={50} height={50} sx={{mr: 2}}/>
                            <Stack width="70%" >
                                <Skeleton variant="text" type="text" width="40%"  />
                                <Skeleton variant="text" type="text" width="66%"  />
                                
                              
                            </Stack>
                        </Box>
                    </ListItem>
                ))
            }

        </>
        
    )
}