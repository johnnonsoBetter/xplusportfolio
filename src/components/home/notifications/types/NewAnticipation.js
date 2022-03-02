import { PsychologyRounded,  ThumbUpRounded } from '@mui/icons-material'
import { Avatar,  ListItemButton, ListItemIcon, Typography } from '@mui/material'
import { blue, purple } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react' 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


export default function NewAnticipation({anticipation, user_slug}) {

    const {body, slug} = anticipation
    const history = useHistory()

    return (
      
           
            <ListItemButton disableGutters disableRipple  onClick={() => history.push(`/xpo/my_profile/${user_slug}/anticipations/` )} >

            <Box display='flex' justifyContent='space-between' alignItems='center'  >
                <ListItemIcon>
           
                     
                <Avatar   style={{width: "42px", height: "42px"}} sx={{backgroundColor: purple[600]}} sizes='large' >
                        <PsychologyRounded   fontSize='0.7rem' />
                </Avatar>
  
                </ListItemIcon>

                <Box >

                    
                    <Box display='flex' alignItems='center'  >

                    
                    <Typography variant='body1'>
                        New Anticipation
                    </Typography>
                    

                    </Box>
                    <Typography variant='body2' >
                        <Typography noWrap='true' maxWidth={200}>
                            {body}
                        </Typography>
                       
                    </Typography>

                </Box>

              

           </Box>



            </ListItemButton>
      
    )
}