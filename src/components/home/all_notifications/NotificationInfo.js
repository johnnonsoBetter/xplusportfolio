import { Avatar,  ListItemButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react' 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { abbreviateName } from '../../../utils/tools'

const getTruncatedBody = (body) => {

    let words = body.split(' ')
    let newWords = []

    for(var i = 0; i <= 8; i++)
        newWords.push(words[i])

    newWords.push('...')

    return newWords.join(' ')
}


export default function NotificationInfo({ link, markAsSeen, body, color, event_message, action_owner, total_performers}) {

    const history = useHistory()
    const {name, image} = action_owner
    const truncatedBody = getTruncatedBody(body)

    return (
      
        
            <ListItemButton disableGutters disableRipple   onClick={() => {
                markAsSeen()
                history.push(link)
            }} >
                

                <Box display='flex'  justifyContent='flex-start' alignItems='center'  >
                    <Box display='flex' mx={1} justifyContent='center' >
            
                        
                        
                        <Avatar  style={{width: "32px", height: "32px"}}  src={image} alt="pics" width={40} height={40} > {abbreviateName(name)} </Avatar>

    
                    </Box>

                    <Box flexGrow={1} ml={1} >

                            
                            <Typography variant='body2' >
                            
                                <Box component="span" sx={{fontWeight: 700, color: 'rgb(34, 45, 57)'}}  >
                                    @{name}  {' '}
                                </Box>


                                <Box component="span" >
                                    
                                    {
                                        total_performers > 0 &&
                                        `and ${total_performers} others ` 
                                    }
                                </Box>

                                <Box component="span" >
                                    
                                    {event_message} {' '}
                                </Box>

                                

                                <Box component="span" sx={{fontWeight: 700, color,}} >
                                    {truncatedBody}
                                </Box>

                                


                            </Typography>

                    

                    </Box>
                </Box>

               
            </ListItemButton>
       
            
      
    )
}