import { useTheme } from '@emotion/react'
import { Folder, HowToVoteOutlined } from '@mui/icons-material'
import { Avatar, Badge, Box, List, ListItem, ListItemButton, ListItemIcon, ListSubheader, Menu, MenuItem, MobileStepper, Paper, Stack, Typography } from '@mui/material'
import { blue, deepOrange, orange } from '@mui/material/colors'
import React, { useContext, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import { AuthContext } from '../../../../context/AuthContext'
import { FetchContext } from '../../../../context/FetchContext'
import TopProject from './TopProject'
import TopProjectsLoader from './TopProjectsLoader'
import { autoPlay } from 'react-swipeable-views-utils';
import HomeInfoContext from '../../../../context/HomeInfoContext'



const AutoSwipeableView = autoPlay(SwipeableViews)


function Projects({projects, setRank}) {


    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = projects.length;


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleStepChange = (step) => {
        
        setActiveStep(step);
        setRank(step + 1)
      };


    return (
        <>
           <AutoSwipeableView
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                interval={5000}
            >
                {projects.map((step, index) => (
                <div key={step.photo}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    

                        <TopProject project={projects[index]} />
                        
            
                    ) : null}
                </div>
                ))}
            </AutoSwipeableView>
            
        </>
        
    )

}

export default function TopProjects() {
    
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const {authAxios} = useContext(FetchContext)
    const [rank, setRank] = useState(0)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const {appIsOffline} = useContext(HomeInfoContext)




    useEffect(() => {
        setLoading(true)
        authAxios.get('api/v1/top_projects').then(res => {
            setProjects(res.data)
            setLoading(false)
        }).catch(err => {
            setSomethingWentWrong(true);
        })

        return () => {

            setProjects([])
            setLoading(true)
        }
    }, [appIsOffline])



    return (
        
            <Paper
            square
            elevation={2}
            sx={{
            width: '100%',
            bgcolor: 'background.default',
            borderRadius: "10px" 
            
            }}
                >

                    <Box p={2} width='100%' display='flex' justifyContent='space-between'  alignItems='center'>
                         <Typography color="ButtonText" variant="body2" sx={{textAlign: "left"}}> Top Projects</Typography>
                         <Avatar sx={{width: 24, height: 24, backgroundColor: blue[500], color: "white", fontWeight: 500, fontSize: '0.8rem'}} >{rank}</Avatar>
                    </Box>

                    {
                     loading ?
                     <TopProjectsLoader /> :
                    
                     <Projects projects={projects} setRank={setRank} /> 
                 }



            </Paper>
                 

      
     
    )
}



