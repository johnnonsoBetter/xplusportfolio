import { AddAPhotoRounded, AddRounded, HowToVoteOutlined, LanguageOutlined, PersonAddAlt1Outlined, PersonAddAlt1Rounded, PsychologyOutlined, RequestQuoteOutlined } from '@mui/icons-material'
import { Avatar, Badge, Box, IconButton, Chip, Skeleton, Tooltip, Typography } from '@mui/material'
import { orange } from '@mui/material/colors'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { FetchContext } from '../../../context/FetchContext'
import { stringAvatar } from '../../../utils/stringUtil'
import ProfileRouter from './ProfileRouter'

export default function ProfileMenu() {

    const {setSomethingWentWrong} = useContext(AuthContext)
    const {authAxios} = useContext(FetchContext)
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const {slug} = useParams()


    useEffect(() => {
        setLoading(true)
        authAxios.get(`api/v1/users/${slug}`).then(res => {
          
            const {user} = res.data 
            setProfile(user)
             setLoading(false)
        }).catch(err => {
            setSomethingWentWrong(true)
        })


        return () => {
            setSomethingWentWrong(false)
            setProfile(null)
            setLoading(true)
        }
    }, [slug])

    return (
        <>
            {
                loading ? 
                <Loader /> :
                <Profile profile={profile} />
            }
        </>
       
        
    )

}




const Profile = ({profile}) => {

    const {website_url, github_url, linkedin_url, name, about, backcover_imgurl, image } = profile
    
    return (
        <Box  mx={1} my={1}  >
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
                src={backcover_imgurl ? backcover_imgurl : '/images/cover_default.png' }  
                alt="cover photo"
            />

            <Box position="absolute" bottom={-30} left={20} >
                          <Avatar  {...stringAvatar(name, 90, 90)} sx={{width: 90, height: 90, border: "2px solid white", fontSize: "1.4em"}} src={image} alt="pics" width={50} height={50} />

            </Box>


        </Box>
         

        <Box mt={5} mb={2} >
            <Typography textAlign="left" color="ButtonText" marginBottom fontWeight={600} sx={{textTransform: "capitalize"}}> {name} </Typography>
            <Typography textAlign="left" color="GrayText" variant='body2'  > {about} </Typography>
        </Box>


            

            

            <Box display="flex" justifyContent="flex-start" alignItems="center" flexWrap='wrap' >
      
                <Box  >

                    {
                        !website_url ? 
                        <a rel="noopener noreferrer" href={website_url} target="_blank">

                            <IconButton size="small"  >
                            
                                <LanguageOutlined sx={{color: "rgb(0 0 0 / 50%)", mr: 2}} />
                            </IconButton>

                        </a>
                        : 
                        <>
                        <Tooltip title="Add Website" sx={{mr: 2}}  >
                            <Chip clickable label='Website'  avatar={<AddRounded fontSize="0.6em"  sx={{color: "white"}} />}  />


                        </Tooltip>
                        </>
                    }

                    </Box>
                

              

                <Box  >

                    {
                        !github_url ? 
                        <a rel="noopener noreferrer" href={github_url} target="_blank">

                            <IconButton size="small"  >
                               
                                <img src="/images/repo.png" alt="github"  />
                            </IconButton>

                        </a>
                        : 
                        <>
                        <Tooltip title="Add Github" sx={{mr: 2}}  >
                            <Chip clickable label='Github'  avatar={<AddRounded fontSize="0.6em"  sx={{color: "white"}} />}  />

                    
                        </Tooltip>
                        </>
                    }

                </Box>
                

              
               
            </Box>
        </Box>

    )
}



const Loader = () => {
    

    return (
        <Box  mx={1}   >
            <Box position="relative" >

            
                <Skeleton width="100%" height={250}
                sx={{
                    height: 150,
                    display: 'block',
                    maxWidth: "100%",
                    overflow: 'hidden',
                    width: '100%',
                    borderRadius: "7px"
                    }}
                />

              
                

                


            </Box>
            

                <Box  >
                    <Skeleton type='text' width="60%" /> 
                    <Skeleton type='text' width="40%" /> 
                    
                </Box>
                <Box mt={1} mb={2} >
                    <Skeleton type='text' width="60%" /> 
                   
                    
                </Box>

            </Box>
    )
}
