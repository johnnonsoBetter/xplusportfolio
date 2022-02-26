import { FolderRounded, HowToVoteRounded, PsychologyRounded, ThumbUpOutlined, ThumbUpRounded } from '@mui/icons-material'
import { Avatar, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react' 
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'


export default function ProjectUpvote({project}) {

    const {title, slug} = project
    const history = useHistory()

    return (
  
           
            <ListItemButton  onClick={() => history.push(`/xpo/projects/${slug}`)}  >

            <Box display='flex' justifyContent='space-between' alignItems='center' >
                <ListItemIcon>
           
                     
                <Avatar  style={{width: "42px", height: "42px"}} sx={{backgroundColor: blue[400]}} sizes='large' >
                        <HowToVoteRounded   fontSize='small' />
                </Avatar>
  
                </ListItemIcon>

                <Box >

                    
                    <Box display='flex' width='100%' alignItems='center' justifyContent='space-between' >

                    <ListItemText >
                        Project Upvote
                        
                    </ListItemText>


                    </Box>
                    <ListItemText >
                        <Typography noWrap='true' maxWidth={250}>
                            {title}
                        </Typography>
                       
                    </ListItemText>

                </Box>

              

           </Box>



            </ListItemButton>
           

    )
}