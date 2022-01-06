import { HowToVoteOutlined, LanguageOutlined, PersonAddAlt1Outlined, PersonAddAlt1Rounded, PsychologyOutlined, RequestQuoteOutlined } from '@mui/icons-material'
import { Avatar, Badge, Box, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import { orange } from '@mui/material/colors'
import React from 'react'
import ProfileRouter from './ProfileRouter'

export default function ProfileMenu() {

    return (

        <Box    >
            <Box position="relative" >

                <Box
                    component="img"
                    sx={{
                    height: 150,
                    display: 'block',
                    maxWidth: "100%",
                    overflow: 'hidden',
                    width: '100%',
                    borderRadius: "7px"
                    }}
                    src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
                    alt="cover photo"
                />

                <Box position="absolute" bottom={-30} left={20} >
                    <Avatar src="/images/selfie.jpeg" alt="my pics" sx={{width: 90, height: 90, border: "2px solid white"}} />
                </Box>


            </Box>
            

            <Box mt={5} mb={2} >
                <Typography textAlign="left" color="ButtonText" marginBottom fontWeight={600}> Paul Otikpumobe </Typography>
                <Typography textAlign="left" color="GrayText"  > I am a ruby on rails developer </Typography>
            </Box>

  
                

                

                <Box display="flex" justifyContent="flex-start" alignItems="center" >
                    <Tooltip title="website" >
                        
                            <LanguageOutlined sx={{color: "rgb(0 0 0 / 50%)", mr: 2}} />
                        
                    </Tooltip>
                    

                    <Tooltip title="github" sx={{mr: 2}}  >
                        <Box display="flex" justifyContent="center" alignItems="center"  >
                            <img src="/images/repo.png" alt="github"  />
                        </Box>
                        
                    </Tooltip>
                    

                    <Tooltip title="linkedin" >
                        <img src="/images/linkedin.png" alt="linkedin" />
                    </Tooltip>
                </Box>


                <Box my={2} display="flex" justifyContent="flex-start" alignItems="center" >
                

                    <Tooltip title="Total Votes" >
                        <Badge badgeContent={12} sx={{color: "rgb(0 0 0 / 50%)", mr: 2}}  >
                            <HowToVoteOutlined  />
                        </Badge>
                    </Tooltip>
                    

                    <Tooltip title="Total Anticipations" >
                        <Badge badgeContent={12} sx={{color: "rgb(0 0 0 / 50%)", mx: 2}} >
                            <PsychologyOutlined  />
                        </Badge>
                    </Tooltip>
                    

                    <Tooltip title="Coin" >
                        <Badge badgeContent={12} sx={{color: "rgb(0 0 0 / 50%)", mx: 2}} >
                            <RequestQuoteOutlined /> 
                        </Badge>

                    </Tooltip>

                    <Tooltip title="Follow">
                        <IconButton sx={{color: "rgb(0 0 0 / 50%)", mx: 2}} >
                            <PersonAddAlt1Rounded  /> 
                        </IconButton>
                        
                    </Tooltip>
                    
                
                </Box>
                
               
                
 

            </Box>
        
    )

}