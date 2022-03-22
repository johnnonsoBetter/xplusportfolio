import { Box, ButtonBase, Grid, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react' 
import { AuthContext } from '../../../../../context/AuthContext'
import { FetchContext } from '../../../../../context/FetchContext'
import ResourcesLoader from './ResourcesLoader'



export default function Communities() {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [communities, setCommunites] = useState([])

    useEffect(() => {

        document.title = "Communities"


        authAxios.get('api/v1/resources',  {params: {resources_type: 'community'}}).then(res => {

            setCommunites(res.data)
            setLoading(false)
        }).catch(err => {
            setSomethingWentWrong(true)
        })

        return () => {
            setSomethingWentWrong(false)
            setCommunites([])
        }
    }, [])

    

    return (
        <Box m={2} >
        <Typography variant='h6' marginBottom={1}  textAlign='left' > Communities </Typography>
        <Typography variant='body2' textAlign='left' marginBottom={3}   >

        If you like helping people solve problems, find forums that allow you to do so. Or if you want to share the backstory on a piece of code, write a blog. It’s often as simple as finding something that you think could be better and trying to solve it. It’s like an itch that needs to be scratched
        </Typography>

        <Grid container spacing={4} >
            <Grid item xs={12} sm={6} >
                <ButtonBase >

                <Paper sx={{borderRadius: '12px' }} >
                    <Box p={3} sx={{borderTopRightRadius: '12px',borderTopLeftRadius: '12px',  background: 'linear-gradient(86deg, rgba(7,3,124,1) 5%, rgba(242,242,242,1) 100%, rgba(0,212,255,1) 100%)'}} minHeight={150} display='flex' alignItems='center' justifyContent='center' >
                        <img style={{maxWidth: "100%"}} src='http://res.cloudinary.com/dn6vnxbnm/image/upload/v1647904055/resources/agencies/lktxyiwlfdue4et0vjtg.png' />
                    </Box>
                    <Box p={1}  >
                    <Typography variant='body1' marginBottom={1}  textAlign='left' > ALC </Typography>
                    
                    </Box>
                </Paper>


                </ButtonBase>
                
            </Grid>

            <Grid item xs={12} sm={6} >
                <ButtonBase >

                <Paper sx={{borderRadius: '12px' }} >
                    <Box p={3} sx={{borderTopRightRadius: '12px',borderTopLeftRadius: '12px',  background: 'linear-gradient(90deg, rgba(222,222,222,1) 5%, rgba(242,242,242,1) 100%, rgba(0,212,255,1) 100%)'}} minHeight={150} display='flex' alignItems='center' justifyContent='center' >
                        <img height="100%" style={{maxWidth: "100%"}} src='https://media-exp1.licdn.com/dms/image/C4D0BAQG8wUEdi2SVeg/company-logo_200_200/0/1519952128213?e=1655942400&v=beta&t=StC_2K6848rp7txjc-Z2_s57O2XrRgB5tIgMa6pjZGY' />
                    </Box>
                    <Box p={1}  >
                    <Typography variant='body1' marginBottom={1}  textAlign='left' > ALC </Typography>
                   
                    </Box>
                </Paper>


                </ButtonBase>
                
            </Grid>
        </Grid>
        </Box>
       
    )
}





