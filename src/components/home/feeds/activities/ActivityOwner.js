


import { VerifiedRounded } from '@mui/icons-material'
import { Avatar, Box, ListItemIcon, Stack, Tooltip, Typography } from '@mui/material'
import moment from 'moment'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthContext'
import { stringAvatar } from '../../../../utils/stringUtil'



export default function ActivityOwner({created_at, user}) {

    const date_created = moment(created_at).fromNow()
    const {isCurrentUser} = useContext(AuthContext)
    const {name, image, slug} = user


    return (
        <Box  my={1} display="flex" width="100%" alignItems="center" justifyContent="space-between" >

            {

                isCurrentUser(slug) ?
                
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
                    
                   
                    <Avatar  {...stringAvatar(name, 35, 35)} sx={{width: 35, height: 35,  fontSize: "0.9em"}} src={image} alt="pics" width={40} height={40} />
                    
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

