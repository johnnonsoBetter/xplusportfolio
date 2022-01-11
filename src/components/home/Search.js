import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Avatar, IconButton, List, ListItem, ListItemIcon, Paper, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { Folder, PsychologyOutlined } from '@mui/icons-material';
import { purple, red } from '@mui/material/colors';


export default function Search() {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: "50%", display: {xs: 'none', sm: 'block'}}}
      size="small"
      options={countries}
      autoHighlight
      
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <SearchList />
      )}
      renderInput={(params) => (
        <Paper
        elevation={2}
        sx={{ p: '1px 3px', display: 'flex', alignItems: 'center' }}
        >
          <TextField
          {...params}
          
          variant="standard"
          fullWidth
          size="small"
          label="  Search"
          
        />
       
        </Paper>
        
      )}
    />
  );
}



const SearchList = () => {

  return (
    <List sx={{my: 2}} >
                <ListItem  >
                    <Link to={`/xpo/projects/${4}`} style={{textDecoration: "none", width: "100%"}} >

                        <Box display="flex" width="100%" alignItems="center" >
                            
                            <ListItemIcon>
                            <Avatar sx={{backgroundColor: purple[300]}} > <Folder /> </Avatar>
                                
                            </ListItemIcon>
                            <Stack  >
                                
                                
                                <Box  maxWidth="90" >
                                    <Typography variant="body2" sx={{textTransform: "capitalize"}} color="ButtonText"> Todo application</Typography>
                                </Box>
                                <Box maxWidth="95%" >
                                <Typography  variant="body2" color="ButtonShadow" noWrap={true}> A todo list application that helps "</Typography>
                                </Box>
                            
                            </Stack>
                        </Box>
                    </Link>

                </ListItem>

                <ListItem  >
                    <Link to={`/xpo/projects/${4}`} style={{textDecoration: "none", width: "100%"}} >

                        <Box display="flex" width="100%" alignItems="center" >
                            
                            <ListItemIcon>
                            <Avatar sx={{backgroundColor: purple[300]}} > <Folder  /> </Avatar>
                                
                            </ListItemIcon>
                            <Stack  >
                                
                                
                                <Box  maxWidth="90" >
                                    <Typography sx={{textTransform: "capitalize"}} color="ButtonText" variant="body2"> Todo application</Typography>
                                </Box>
                                <Box maxWidth="95%" >
                                <Typography  variant="body2" color="ButtonShadow" noWrap={true}> A todo list application that helps "</Typography>
                                </Box>
                            
                            </Stack>
                        </Box>
                    </Link>

                </ListItem>

                <ListItem  >
                    <Link to={`/xpo/projects/${4}`} style={{textDecoration: "none", width: "100%"}} >

                        <Box display="flex" width="100%" alignItems="center" >
                            
                            <ListItemIcon>
                            <Avatar src="/images/selfie.jpeg" sx={{backgroundColor: purple[200]}} />
                                
                            </ListItemIcon>
                            <Stack  >
                                
                                
                                <Box maxWidth="90" >
                                    <Typography sx={{textTransform: "capitalize"}} color="ButtonText" variant="body2"> Chukwuma obi kemi</Typography>
                                </Box>
                                <Box maxWidth="95%" >
                                <Typography  variant="body2" color="ButtonShadow" noWrap={true}>  A Ruby on rails developer </Typography>
                                </Box>
                            
                            </Stack>
                        </Box>
                    </Link>

                </ListItem>

                <ListItem  >
                    <Link to={`/xpo/projects/${4}`} style={{textDecoration: "none", width: "100%"}} >

                        <Box display="flex" width="100%" alignItems="center" >
                            
                            <ListItemIcon>
                            <Avatar sx={{backgroundColor: red[300]}} > <PsychologyOutlined  /> </Avatar>
                                
                            </ListItemIcon>
                            <Stack  >
                                
                                
                                <Box  maxWidth="90" >
                                    <Typography sx={{textTransform: "capitalize"}} color="ButtonText" variant="body2"> Todo application</Typography>
                                </Box>
                                <Box maxWidth="95%" >
                                <Typography  variant="body2" color="ButtonShadow" noWrap={true}> A todo list application that helps "</Typography>
                                </Box>
                            
                            </Stack>
                        </Box>
                    </Link>

                </ListItem>

                
            </List>
  )
}



// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
    phone: '1-268',
  },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'XK', label: 'Kosovo', phone: '383' },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'YT', label: 'Mayotte', phone: '262' },
  { code: 'ZA', label: 'South Africa', phone: '27' },
  { code: 'ZM', label: 'Zambia', phone: '260' },
  { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];
