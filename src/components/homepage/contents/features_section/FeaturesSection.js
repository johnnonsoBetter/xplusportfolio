import { Paper,Grid, Typography, Chip, Container } from '@mui/material'
import { orange, purple } from '@mui/material/colors';
import { Box } from '@mui/system'
import React from 'react'
import Zoom from 'react-reveal/Zoom';



const features = [

    {
        order: [2, 1],
        justifyContent: 'flex-end',
        transformOrigin: 'right',
        p: 'perspective(1200px) rotateY(-5deg)',
        backgroundColor: '',
        title: 'Imagine your portfolio evolving from basic to advanced',
        body1: 'All this being possible by gaining fresh perspectives from others.',
        imgUrl: 'https://res.cloudinary.com/dn6vnxbnm/image/upload/v1648219975/homepage_photos/ezgif.com-gif-maker_6_2_p9frz5.gif',
    },
    {
        order: [1, 2],
        justifyContent: 'flex-start',
        transformOrigin: 'left',
        p: 'perspective(1200px) rotateY(5deg)',
        backgroundColor: 'white',
        title: 'Feedback, Reviews and Hunting Bugs on  project matters.',
        body1: 'Simple but smart project review tool available for anyone to help improve other members projects by hunting bugs in their application, making suggestions, and taking notes.',
        imgUrl: 'https://res.cloudinary.com/dn6vnxbnm/image/upload/v1648219275/homepage_photos/ezgif.com-gif-maker_10_dm5idx.gif',
    },
    {
        order: [2, 1],
        justifyContent: 'flex-end',
        transformOrigin: 'right',
        p: 'perspective(1200px) rotateY(-5deg)',
        backgroundColor: '',
        title: 'Working on anything new?. Anticipate it.',
        body1: 'Tell us what you are working on, Set a deadline and complete it.',
        body2: 'Because other members are eagerly waiting for your project and happy to improve it.',
        imgUrl: 'https://res.cloudinary.com/dn6vnxbnm/image/upload/v1648220030/homepage_photos/ezgif.com-gif-maker_7_vxvhbc.gif',
    },
    {
        order: [1, 2],
        justifyContent: 'flex-start',
        transformOrigin: 'left',
        p: 'perspective(1200px) rotateY(5deg)',
        backgroundColor: 'white',
        title: ' Never miss any important updates.',
        body1: 'With Live feed and Push notifications you almost never miss important activities in the platform.',
        imgUrl: 'https://res.cloudinary.com/dn6vnxbnm/image/upload/v1648221830/homepage_photos/ezgif.com-gif-maker_9_slwpz4.gif',
    }
]

const Feature = ({feature}) => {


    const {backgroundColor, p, transformOrigin, title, body1, body2, imgUrl, justifyContent, order} = feature


    return (
        <Zoom  top >


            <Box minHeight={500} my={2} sx={{backgroundColor,}} >
                <Container >

                    <Grid container  spacing={1} justifyContent={justifyContent}>



                        <Grid item xs={12} sm={5} order={order[0]} >
                            <Box display='flex' minHeight={400} px={1} alignItems='center' justifyContent='center' >
                                <Paper  sx={{borderRadius: '15px', transformOrigin, transform: p,  transition: ".55s"}} elevation={3} >
                                    <img src={imgUrl} style={{maxWidth: '100%', borderRadius: '15px'}} />
                                    
                                </Paper>
                            </Box>
                        </Grid>


                        <Grid item xs={12} sm={5} order={order[1]}  >
                            <Box display='flex' minHeight={400} alignItems='center' justifyContent='center' flexDirection='column' >
                                <Typography  fontSize='2.4rem' lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                    {title}
                                </Typography>

                                
                                <Typography marginTop  fontSize='1.2rem' maxWidth="80%" fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                    {body1}
                                </Typography>

                                {
                                    body2 &&
                                    <Typography px={4} variant='body2' fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39'}}>
                                        {body2}
                                    </Typography>
                                }
                            </Box>
                        </Grid>


                    </Grid>



                </Container>
                
            </Box>

        </Zoom>
    )
}



export default function FeaturesSection() {


    return (
        <Box >

                {
                    features.map((feature, index) => (
                        <Feature key={index} feature={feature}/>
                    ))
                }
        </Box>
        
    )
}






