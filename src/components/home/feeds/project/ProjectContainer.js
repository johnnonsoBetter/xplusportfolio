import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Loader } from '../../profile/projects/ProjectListLoader';
import { BuildRounded, DescriptionRounded, LightbulbRounded, MessageRounded } from '@mui/icons-material';
import ProjectActivity from '../activities/project_activity/ProjectActivity';
import { Link, useLocation } from 'react-router-dom';
import CommentContainer from './comment/CommentContainer';
import SuggestionContainer from './suggestion/SuggestionContainer';
import { Chip, Paper } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 function Info() {
  const [expanded, setExpanded] = React.useState(false);

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

          For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.

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
            <Chip label="Ruby on rails" variant="outlined" sx={{mx: 1, my: 1}}/>
            <Chip label="React" variant="outlined" sx={{mx: 1, my: 1}}/>
            <Chip label="Heroku" variant="outlined" variant="outlined" sx={{mx: 1, my: 1}}/>
            <Chip label="Git" variant="outlined" sx={{mx: 1, my: 1}}/>
            <Chip label="Github" variant="outlined" sx={{mx: 1, my: 1}}/>
            <Chip label="Ruby on rails" variant="outlined" sx={{mx: 1, my: 1}}/>
          
          </Box>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProjectContainer() {
  const [value, setValue] = React.useState(0);
  const location = useLocation()

  useEffect(() => {

    if (location.search === "?comments"){
        setValue(0)
    }else if (location.search === "?suggestions") {
        setValue(1)
    }
  }, [location.search])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <>
    <ProjectActivity />
    <Paper sx={{p: 2, mb: 1}} elevation={0} >
     
      
      <Info />

    </Paper>
   
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs    indicatorColor=""   value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example">
          <Tab  LinkComponent={Link} to="?comments"  disableRipple label="Comments" iconPosition="top"  icon={<MessageRounded  />} {...a11yProps(0)} />
          <Tab LinkComponent={Link} to="?suggestions" disableRipple label="Suggestions" iconPosition="top" icon={<LightbulbRounded />} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel sx={{p: 0}} value={value} index={0}>
        <CommentContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SuggestionContainer />
      </TabPanel>
     
    </Box>
    </>
  );
}


