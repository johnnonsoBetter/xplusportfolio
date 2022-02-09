
import { VerifiedRounded } from '@mui/icons-material'
import { Avatar, Box, ListItemIcon, Stack, Tooltip, Typography } from '@mui/material'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'



export default function AnticipationActivityOwner({created_at, user, isCurrentUser}) {

    const date_created = moment(created_at).fromNow()
    const {name, image, slug} = user

    return (
        <Box  my={1} display="flex" width="100%" alignItems="center" justifyContent="space-between" >

            {

                isCurrentUser ?
                
                    <Box display='flex' alignItems='center' >
                  
                        <Tooltip title='Me'>
                        <VerifiedRounded color='info' />
                        </Tooltip>
                   
                    <Box mx={1} >
                        <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} variant="body2" color="ButtonShadow" noWrap={true}> {date_created}</Typography>

                    </Box>
                    </Box>

                :
                <Link to={`/xpo/members/${slug}`}  style={{textDecoration: "none", display: "flex", alignItems: "center"}} width="100%" alignItems="center" >
        
                <ListItemIcon >
                    
                    <Avatar src={image} alt={name} > {name[0]}</Avatar>
                </ListItemIcon>
                <Stack  >
                    
            
                    <Box maxWidth={120}>
                        <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} color="ButtonText" variant="body2" noWrap={true}> {name}</Typography>

                    </Box><Box maxWidth={120}>
                        <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} variant="body2" color="ButtonShadow" noWrap={true}> {date_created}</Typography>

                    </Box>
                     
                </Stack>
                </Link>


            }
            
        </Box>
    )
}
