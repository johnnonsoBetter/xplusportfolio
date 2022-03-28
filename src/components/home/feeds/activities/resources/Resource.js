import { OpenInNewOutlined } from '@mui/icons-material'
import { Box, Button, ButtonBase, Grid, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react' 
import ReactPlayer from 'react-player/youtube'




export default function Resource({resource}) {

  const {link, video_url, img_url, title, desc} = resource
    

    return (
       
            <Box >

                <Paper elevation={2} sx={{borderRadius: '12px' }} >
                        <Box  sx={{borderTopRightRadius: '12px',borderTopLeftRadius: '12px'}} height={270}  display='flex' alignItems='center' justifyContent='center' >
                            <ReactPlayer controls width='100%' height={270} url={video_url} />
                            {/* <img style={{maxWidth: "100%"}} src='https://res.cloudinary.com/dn6vnxbnm/image/upload/v1648468081/resources/agencies/turing-removebg-preview_uiuwwm.png' /> */}
                        </Box>
                        <Box p={1}  >
                            <Typography variant='body1' marginBottom={1}  textAlign='left' > {title} </Typography>
                            <Typography variant='body2'  marginBottom={1}  textAlign='left' >
                            {desc}
                            </Typography>
                        
                        </Box>
                        <Box p={1} >
                            <Button variant='contained' fullWidth endIcon={<OpenInNewOutlined />} > Learn More</Button>
                        </Box>
                    </Paper>


                </Box>
       
       
    )
}





