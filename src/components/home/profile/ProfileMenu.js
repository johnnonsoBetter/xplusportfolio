import { AddAPhotoRounded, AddRounded, CloseRounded, EditRounded, HowToVoteOutlined, LanguageOutlined, PersonAddAlt1Outlined, PersonAddAlt1Rounded, PsychologyOutlined, RequestQuoteOutlined } from '@mui/icons-material'
import { Avatar, Badge, Box, IconButton, Chip, Skeleton, Tooltip, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useParams, useHistory } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { FetchContext } from '../../../context/FetchContext'
import  HomeInfoContext  from '../../../context/HomeInfoContext'
import { abbreviateName } from '../../../utils/tools'
import ProfileRouter from './ProfileRouter'

export default function ProfileMenu() {

    const {setSomethingWentWrong} = useContext(AuthContext)
    const {authAxios} = useContext(FetchContext)
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const {slug} = useParams()
    const {backcoverUrl }= useContext(HomeInfoContext)


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


    useEffect(() => {

        document.title = profile ? profile.name : ''

    }, [profile, slug, backcoverUrl])

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

    const {name, about, backcover_imgurl, image } = profile
    const {isCurrentUser} = useContext(AuthContext)
    const {slug} = useParams()
    const history = useHistory()
    const {backcoverUrl, setBackCoverUrl }= useContext(HomeInfoContext)

    useEffect(() => {   

        setBackCoverUrl(backcover_imgurl)


        return () => {
            setBackCoverUrl(null)
        }

    }, [])



    return (
        <Box  mx={1} my={1}  >
        <Box position="relative" >

      
            <LazyLoadImage
               alt="cover photo"
              effect="blur"
              src={backcoverUrl ? backcoverUrl : '/images/cover_default.png' } 
              width='100%'
              style={{
                objectFit: 'cover',
                height: 150,
                display: 'block',
                maxWidth: "100%",
                overflow: 'hidden',
                width: '100%',
                borderRadius: "7px"
              }}
              />

                

                {
                    isCurrentUser(slug) &&
                    <Box position="absolute" top={5} right={5} >
                        <Tooltip title="Edit Cover Photo" >  
                        <IconButton size='small' onClick={() => {
                            history.push('#edit_cover_photo')
                        }} >
                                <Avatar sx={{width: 32, height: 32}} ><EditRounded color='action' fontSize='0.5rem'/> </Avatar>
                        </IconButton>

                        </Tooltip>
                    </Box>

                }

                <Box position="absolute" bottom={-30} left={20} >
                    <Avatar   sx={{width: 90, height: 90, border: "2px solid white", fontSize: "1.4em"}} src={image} alt="pics" width={50} height={50} > {abbreviateName(name)} </Avatar>

                </Box>


        </Box>
         

        <Box mt={5} mb={2} >
            <Typography textAlign="left" color="ButtonText" marginBottom fontWeight={600} sx={{textTransform: "capitalize"}}> {name} </Typography>
            <Typography textAlign="left" color="GrayText" variant='body2'  > {about} </Typography>
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
