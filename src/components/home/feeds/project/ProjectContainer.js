import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Loader } from '../../profile/projects/ProjectListLoader';
import { LightbulbRounded, MessageRounded } from '@mui/icons-material';
import ProjectActivity from '../activities/project_activity/ProjectActivity';
import { Link, useLocation } from 'react-router-dom';

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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs   indicatorColor=""   value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example">
          <Tab  LinkComponent={Link} to="?comments"  disableRipple label="Comments" iconPosition="top"  icon={<MessageRounded  />} {...a11yProps(0)} />
          <Tab LinkComponent={Link} to="?suggestions" disableRipple label="Suggestions" iconPosition="top" icon={<LightbulbRounded />} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
     
    </Box>
    </>
  );
}
