import { Box, List, ListItem, MenuItem, Skeleton, Stack } from '@mui/material'
import React from 'react'


export default function TopMembersLoader() {
    const loaders = [1, 2, 3, 4, 5]
    return (
        <>
            {
                loaders.map(loader => (
                    <ListItem key={loader}>
                        <Box display="flex" width="100%" alignItems="center" alignItems="center" >
                            <Skeleton variant="circular" width={50} height={50} sx={{mr: 2}}/>
                            <Stack width="60%" >
                                <Skeleton variant="text" type="text" width="65%"  />
                                <Skeleton variant="text" type="text" width="40%"  />
                            
                            </Stack>
                            <Skeleton variant="circular" width={20} height={20} />
                        </Box>
                    </ListItem>
                ))
            }

        </>
        
    )
}