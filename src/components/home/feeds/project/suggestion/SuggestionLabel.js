


import {VerifiedRounded } from '@mui/icons-material'
import {Box, Stack, Tooltip, Typography } from '@mui/material'
import moment from 'moment'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../../context/AuthContext'
import SuggestionMaker from './SuggestionMarker'

export default function SuggestionLabel({created_at, user, project, suggestion}) {

    const date_created = moment(created_at).fromNow()
    const {name, slug} = user
    const [done, setDone] = useState(suggestion.done)
    const {isCurrentUser} = useContext(AuthContext)


    return (
        <Box  my={1} display="flex" width="100%" alignItems="center" justifyContent="space-between" >

          
                <Link to={`/xpo/members/${slug}`}  style={{textDecoration: "none", display: "flex", alignItems: "center"}} width="100%" alignItems="center" >
        
                
                <Stack  >
                    
            
                    <Box maxWidth={120}>
                        <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} color="ButtonText" variant="body2" noWrap={true}> {name}</Typography>

                    </Box><Box maxWidth={120}>
                        <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} variant="body2" color="ButtonShadow" noWrap={true}> {date_created}</Typography>

                    </Box>
                     
                </Stack>
                </Link>


                <Box display='flex' alignItems='center' >
                        
                        

                        {
                            isCurrentUser(project.user.slug) ?
                            <SuggestionMaker setDone={setDone} done={done} id={suggestion.id} /> :

                            <Tooltip title={done ? 'Done' : 'pending'}>
                            <VerifiedRounded fontSize='small' color={done ? 'success' : 'disabled'} />
                            </Tooltip>
                        }
                   
                   
                </Box>


            
            
        </Box>
    )
}

