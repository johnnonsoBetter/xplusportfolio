import { UpdateRounded, UploadFile } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Box, Fab, Paper } from '@mui/material'
import React from 'react'


export default function EditProfile() {

    return (
        <Box >
            Edit my profile

            
            <Fab variant="extended" color="primary" aria-label="add">
              <UpdateRounded sx={{ mr: 1 }} />
               Update
           </Fab>
        </Box>

    )
}