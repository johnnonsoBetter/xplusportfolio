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
        title: 'Hunt down bugs, review projects, and give feedbacks',
        body1: 'Simple but smart project review tool available for anyone to help improve other members projects by hunting bugs in their application, making suggestions, and taking notes.',
        imgUrl: 'https://res.cloudinary.com/dn6vnxbnm/image/upload/v1648518507/homepage_photos/ezgif.com-gif-maker_10_1_ifjtfs.gif',
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
    },
    {
        order: [2, 1],
        justifyContent: 'flex-end',
        transformOrigin: 'right',
        p: 'perspective(1200px) rotateY(-5deg)',
        backgroundColor: 'white',
        title: 'Discover helpful resources',
        body1: 'Improve your skill-sets by utilizing rich contents provided by other platforms ',
        imgUrl: 'https://res.cloudinary.com/dn6vnxbnm/image/upload/v1648518416/homepage_photos/ezgif.com-gif-maker_11_hnccxw.gif',
    }
]

const Feature = ({feature}) => {


    const {backgroundColor, p, transformOrigin, title, body1, body2, imgUrl, justifyContent, order} = feature


    return (
        <Zoom  top >


            <Box  my={2} sx={{backgroundColor, }} >
                <Container >

                    <Grid container  spacing={1} justifyContent={justifyContent}>

                        <Grid item xs={12} sm={5} order={order[0]} sx={{display: {xs: 'none', sm: 'none', md: 'block'}}} >
                            <Box display='flex'  sx={{minHeight: {xs: 'auto', sm: 'auto', md: 400}}} px={1} py={2} alignItems='center' justifyContent='center' >
                                <Paper  sx={{borderRadius: '15px', transformOrigin, transform: p,  transition: ".55s"}} elevation={3} >
                                    <img src={imgUrl} style={{maxWidth: '100%', borderRadius: '15px'}} />
                                    
                                </Paper>
                            </Box>
                        </Grid>


                        <Grid item xs={12} sm={10} md={5} order={order[1]}  >
                            <Box display='flex'  sx={{my: {sm: 3}, minHeight: {xs: 'auto', sm: 'auto', md: 400}}} alignItems='center' justifyContent='center' flexDirection='column' >
                                <Typography   lineHeight='1.3' fontWeight={700} fontFamily='Quicksand' sx={{color: '#222d39', textAlign: {xs: 'left', sm: 'center', md: 'center'}, fontSize: {xs: '1.7rem', sm: '1.8', md: '2.1rem'}}} >
                                    {title}
                                </Typography>

                                
                                <Typography marginTop  fontSize='1.2rem' fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39', fontSize: {xs: '0.9rem', sm: '1rem', md: '1.1rem'}, maxWidth: {xs: '100%', sm: '80%', md: '80%'}, textAlign: {xs: 'left', sm: 'left', md: 'center'}}}>
                                    {body1}
                                </Typography>

                                {
                                    body2 &&
                                    <Typography variant='body2' fontWeight={500} fontFamily='Quicksand' sx={{color: '#222d39', maxWidth: {xs: '100%', sm: '80%', md: '80%'}, textAlign: {xs: 'left', sm: 'left', md: 'center'}}}>
                                        {body2}
                                    </Typography>
                                }

                                <Box mt={3}  sx={{display: {xs: 'flex', sm: 'flex', md: 'none'}, minHeight: {xs: 320, sm: 400}}} px={1} alignItems='center' justifyContent='center' >
                                    <Paper  sx={{borderRadius: '15px'}} elevation={3} >
                                        <img src={imgUrl} style={{maxWidth: '100%', borderRadius: '15px'}} />
                                        
                                    </Paper>
                                </Box>


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






