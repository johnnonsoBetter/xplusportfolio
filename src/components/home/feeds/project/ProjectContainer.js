import React, { useContext, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Loader } from '../../profile/projects/ProjectListLoader';
import { BuildRounded, DescriptionRounded } from '@mui/icons-material';
import ProjectActivity from '../activities/project_activity/ProjectActivity';
import { Chip, Paper } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FetchContext } from '../../../../context/FetchContext';
import { AuthContext } from '../../../../context/AuthContext';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ProjectTab from './ProjectTab';



 function Info(props) {
  const {project} = props
  const [expanded, setExpanded] = React.useState(true);
  const {tools, description} = project 

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion elevation={0}   expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
           
           <Box display="flex" alignItems="center"  >
           <DescriptionRounded  color="primary" />
           <Typography  variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
              Description
            </Typography>
           </Box>

        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="body2" textAlign="left" >

          {description} 
      </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}   expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
           

           <Box display="flex" alignItems="center"  >
           <BuildRounded  color="primary" />
           <Typography  variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
            Tools
            </Typography>
           </Box>


         
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexWrap="wrap" >
           

            {
              tools.map((tool, index) => (<Chip key={tool.id + index} label={tool.name} variant="outlined" sx={{mx: 1, my: 1}}/>))
            }

          
          </Box>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}



export default function ProjectContainer() {
    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const {slug} = useParams()
    const [project, setProject] = useState({})


    useEffect(() => {   
       
      setLoading(true)
      document.title = project ? `Project (${slug})` : "Project"
      authAxios.get(`/api/v1/projects/${slug}`).then(res => {
          const {project} = res.data
        
          setProject(project)
          setLoading(false)
      }).catch(err => {

          setSomethingWentWrong(true)
      })


      return () => {
          setProject(null)
          setLoading(true)
          setSomethingWentWrong(false)
      }
  }, [slug])


  return (
    <>
    {
      loading ?
      <Loader /> : 
    
    <Box sx={{width: "100%", scrollbarColor: "red",  height: {sm: "calc(99vh - 60px)", xs: "calc(96vh - 85px)"}, scrollbarWidth: {display: "none"}, overflowY: "auto"}}>
      <ProjectActivity project={project} typePackge={{}} showType={false} />
      <Paper sx={{p: 2, mb: 1}} elevation={0} >

        
        <Info project={project} />

      </Paper>
    
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <ProjectTab />
        </Box>
      
      
      </Box>
    </Box>
    }
    </>
  );
}


