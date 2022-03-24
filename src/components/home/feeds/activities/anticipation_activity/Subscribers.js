

import React, { useContext, useEffect, useState } from 'react'
import { Badge, Button, Menu, Typography, Avatar, Stack, MenuItem, Chip} from '@mui/material';
import {FetchContext} from '../../../../../context/FetchContext'
import SubscribersLoader from '../../../../shared/SubscribersLoader';
import { Box } from '@mui/system';
import { AuthContext } from '../../../../../context/AuthContext';
import { Link } from 'react-router-dom';
import { stringAvatar, stringToColor } from '../../../../../utils/stringUtil'
import { Virtuoso } from 'react-virtuoso';




const User = ({user}) => {

    const {image, name, slug} = user 




    return (
        
            <Link to={`/xpo/members/${slug}`}  style={{textDecoration: "none", margin: '10px', alignItems: "center"}} width="100%" alignItems="center" >
    
                <Chip  clickable avatar={<Avatar src={image} />}    label={name} />

         
      
            </Link>

    )
}


export default function Subscribers({totalSubScribers, slug}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading] = useState(true)
  const open = Boolean(anchorEl);
  const [subscribers, setSubscribers] = useState([])
  const {setSomethingWentWrong} = useContext(AuthContext)
  const {authAxios} = useContext(FetchContext)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  useEffect(() => {

    setLoading(true)
    if (open) {


      authAxios.get(`api/v1/anticipations/${slug}/subscribers`).then(res => {
        setSubscribers(res.data)
        setLoading(false)
       
    }).catch(err => {
       setSomethingWentWrong(true)
       
    })


    }


    return () => {
      setSomethingWentWrong(false)
      
      setSubscribers([])
      
     
    }
  }, [open])




  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
      <Typography  onClick={handleClick} component={Button} color="MenuText" fontWeight={400} noWrap={true} textAlign="left" variant="body2" sx={{mx: 2, py: 2}}> {totalSubScribers} subscribers</Typography>

      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'auto',
            width: '27ch',
            minHeight: 250,
            maxHeight: 250,
            borderRadius: "10px",
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0.2,
            '& .MuiAvatar-root': {
              width: 55,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 0,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        

           
        {
          loading ?
          <Box height={250} display='flex' alignItems='center' justifyContent='center' >
              <SubscribersLoader />
          </Box> : 
          <Box display='flex' justifyContent='flex-start' flexWrap='wrap'>
            {
              subscribers.map(subscriber => (
               
                <User key={subscriber.slug} user={subscriber} />
             
              ))
            }
          </Box>

          
        }



       


      </Menu>
    </React.Fragment>
  );
}





