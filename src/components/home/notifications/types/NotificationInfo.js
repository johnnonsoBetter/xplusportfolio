import { PsychologyRounded,  ThumbUpRounded } from '@mui/icons-material'
import { Avatar,  ListItemButton, ListItemIcon, Paper, Typography } from '@mui/material'
import { blue, green, purple } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react' 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { stringToColor } from '../../../../utils/stringUtil'


const getTruncatedBody = (body) => {

    let words = body.split(' ')
    let newWords = []

    for(var i = 0; i <= 8; i++)
        newWords.push(words[i])

    newWords.push('...')

    return newWords.join(' ')
}


export default function NotificationInfo({ link, body, icon, event_message, action_owner, total_performers, backgroundColor}) {

    const history = useHistory()
    const {name, image} = action_owner
    const truncatedBody = getTruncatedBody(body)

 

    return (
      
        
            <ListItemButton disableGutters disableRipple   onClick={() => {
               
                history.push(link)
            }} >
                

                <Box display='flex'  justifyContent='flex-start' alignItems='center'  >
                    <Box display='flex' mx={1} justifyContent='center' >
            
                        
                        <Avatar src='/images/pics.jpg' style={{width: "32px", height: "32px"}} sx={{backgroundColor,}} sizes='small' >
                                
                                {icon}
                        </Avatar>
    
                    </Box>

                    <Box flexGrow={1} >

                            

                            <Typography variant='body2'>
                            
                                <Box component="span" sx={{fontWeight: 700, color: stringToColor(name)}}  >
                                    @{name}  {' '}
                                </Box>


                                <Box component="span" >
                                    
                                    {
                                        total_performers > 1 &&
                                        'and 3 others '
                                    }
                                </Box>

                                <Box component="span" >
                                    
                                    {event_message} {' '}
                                </Box>

                                

                                <Box component="span" sx={{fontWeight: 700, color: blue[500]}} >
                                {truncatedBody}
                                </Box>
                            </Typography>

                    

                    </Box>
                </Box>

               
            </ListItemButton>
       
            
      
    )
}