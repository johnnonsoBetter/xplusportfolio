import { FolderRounded, HowToVoteRounded, PsychologyRounded, ThumbUpOutlined, ThumbUpRounded } from '@mui/icons-material'
import { Avatar, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react' 
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'


export default function ProjectUpvote({project}) {

    const {title, slug} = project
    const history = useHistory()

    return (
  
           
            <ListItemButton disableGutters disableRipple  onClick={() => history.push(`/xpo/projects/${slug}`)}  >

            <Box display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap' >
                <ListItemIcon>
           
                     
                <Avatar  style={{width: "42px", height: "42px"}} sx={{backgroundColor: blue[400]}} sizes='large' >
                        <HowToVoteRounded   fontSize='small' />
                </Avatar>
  
                </ListItemIcon>

                <Box >

                    
                    <Box display='flex' width='100%' alignItems='center' justifyContent='space-between' flexWrap='wrap' >

                    <Typography variant='body1' >
                        Project Upvote
                        
                    </Typography>


                    </Box>
                    <Typography variant='body2' >
                        <Typography noWrap='true' maxWidth={250}>
                            {title}
                        </Typography>
                       
                    </Typography>

                </Box>

              

           </Box>



            </ListItemButton>
           

    )
}