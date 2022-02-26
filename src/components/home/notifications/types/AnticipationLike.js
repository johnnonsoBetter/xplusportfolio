import { PsychologyRounded,  ThumbUpRounded } from '@mui/icons-material'
import { Avatar,  ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react' 


export default function AnticipationLike({anticipation}) {

    const {body} = anticipation

    return (
      
           
            <ListItemButton disableRipple  >

            <Box display='flex' justifyContent='space-between' alignItems='center' >
                <ListItemIcon>
           
                     
                <Avatar  style={{width: "42px", height: "42px"}} sx={{backgroundColor: blue[400]}} sizes='large' >
                        <ThumbUpRounded   fontSize='small' />
                </Avatar>
  
                </ListItemIcon>

                <Box >

                    
                    <Box display='flex' alignItems='center' >

                    <ListItemText>
                        Anticipation Like
                        
                    </ListItemText>
                    

                    </Box>
                    <ListItemText >
                        <Typography noWrap='true' maxWidth={250}>
                            {body}
                        </Typography>
                       
                    </ListItemText>

                </Box>

              

           </Box>



            </ListItemButton>
      
    )
}