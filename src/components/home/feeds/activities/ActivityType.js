import { ArrowDownwardRounded } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import moment from 'moment';
import React from 'react' 
import { Link } from 'react-router-dom';
import { stringToColor } from '../../../../utils/stringUtil';



export default function ActivityType({owner_name, text, owner_slug, created_at}) {

  const date_created = moment(created_at).fromNow()

    return (
        <Box sx={{pl: 2}}  height={50} display='flex' alignItems='center' >
          <Box display='flex' width='100%' alignItems='center' justifyContent='space-between' >
            
            <Box  display='flex' alignItems='center' justifyContent='space-between' >
           
              <Typography variant='body2' component={Link}  to={`/xpo/members/${owner_slug}`} color='info' fontWeight={500} sx={{textDecoration: "none", color: stringToColor(owner_name)}}  >@{owner_name} </Typography>
              <Typography variant='body2' sx={{ml: 1}} >{text} </Typography>
              
            </Box> 

            <Box >
              
              
              <Typography color="ButtonShadow" variant='body2' sx={{ textTransform: "downcase", fontSize: "0.8em", mr: 2 }}  >{date_created}</Typography>
            </Box>
            
          </Box>
         
        </Box>
    )
}