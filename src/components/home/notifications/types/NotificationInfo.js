import { PsychologyRounded,  ThumbUpRounded } from '@mui/icons-material'
import { Avatar,  ListItemButton, ListItemIcon, Paper, Typography } from '@mui/material'
import { blue, purple } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react' 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


export default function NotificationInfo({ link, body, title, icon, backgroundColor}) {

    const history = useHistory()

    return (
      
        
            <ListItemButton disableGutters disableRipple  onClick={() => {
               
                history.push(link)
            }} >
                

                    <Box display='flex' justifyContent='space-between' alignItems='center'  >
                    <ListItemIcon>
            
                        
                    <Avatar   style={{width: "42px", height: "42px"}} sx={{backgroundColor,}} sizes='large' >
                            
                            {icon}
                    </Avatar>
    
                    </ListItemIcon>

                    <Box >

                        
                        <Box display='flex' alignItems='center'  >

                        
                        <Typography fontWeight={700} variant='body1'>
                            {title}
                        </Typography>
                        

                        </Box>
                        <Typography variant='body2'  >
                            <Typography >
                                {body}
                            </Typography>
                        
                        </Typography>

                    </Box>

                

                </Box>

               
            </ListItemButton>
       
            
      
    )
}