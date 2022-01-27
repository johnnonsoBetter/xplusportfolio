import { Box, Grid, Paper, Skeleton, Stack } from '@mui/material'
import React from 'react'


function Member() {

    return (
        <Paper sx={{minHeight: 250, borderRadius: "10px"}} >
            
            <Stack >
                <Box  width="100%" display="flex" justifyContent="center" >
                    <Skeleton sx={{my: 3}} variant="circular" width={70} height={70} />
                </Box>
                <Box width="100%" display="flex" justifyContent="center" >
                    <Skeleton  type="text" width="60%"  />
                </Box>
                <Box  width="100%" display="flex" justifyContent="space-around" >
                    <Skeleton sx={{my: 3}} variant="circular" width={20} height={20} />
                    <Skeleton sx={{my: 3}} variant="circular" width={20} height={20} />
                    <Skeleton sx={{my: 3}} variant="circular" width={20} height={20} />
                </Box>

            </Stack>
            <Box width="100%" display="flex" justifyContent="center" >
                    <Skeleton  type="text" width="90%" height={30}  />
            </Box>
        </Paper>
    )
}

export default function MembersLoader() {

    const loaders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <Box py={1} className="member-container" sx={{width: "100%", scrollbarColor: "red",  height: {sm: "calc(99vh - 60px)", xs: "calc(96vh - 85px)"}, scrollbarWidth: {display: "none"}, overflowY: "auto"}} >
           <Grid container spacing={1} >
               {
                   loaders.map(load => (
                    <Grid item xs={6} md={4} key={load} >
                        <Member />
                    </Grid>
                   ))
               }

           </Grid>
        </Box>
    )
}

