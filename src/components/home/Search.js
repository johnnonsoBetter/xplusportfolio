import * as React from 'react';
import { useState, useContext } from 'react';
import { AsyncTypeahead, Menu } from 'react-bootstrap-typeahead';
import Paper from '@mui/material/Paper';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Avatar, ListItemIcon, Stack, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { ListItem } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import {FetchContext} from '../../context/FetchContext'
// Import as a module in your JS
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { FolderRounded, PsychologyRounded } from '@mui/icons-material';
import { orange, purple } from '@mui/material/colors';


const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const {authAxios} = useContext(FetchContext)

  useState(() => {

    if(isLoading) {
      setOptions([])
    }

    return () => {
      setOptions([])
    }
  }, [isLoading])


  const handleSearch = (query) => {
    setIsLoading(true);

      authAxios.get('api/v1/search', {params: {query,}}).then(res => {
     
        setOptions(res.data)
        setIsLoading(false)
      })
  };

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="login"
      minLength={3}
      onSearch={handleSearch}
      style={{
        backgroundColor: "white"
      }}
      renderInput={({ inputRef, referenceElementRef, ...inputProps }) => (
       
        <Paper
      component="form"
      
      sx={{ display: 'flex', alignItems: 'center', width: {xs: "100%", sm: "100%", md: 450, lg: 400}, height: 40}}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
      
       
        {...inputProps}
        
          ref={(input) => {
            // Be sure to correctly handle these refs. In many cases, both can simply receive
            // the underlying input node, but `referenceElementRef can receive a wrapper node if
            // your custom input is more complex (See TypeaheadInputMulti for an example).
            inputRef(input);
            referenceElementRef(input);
          }}
      />

       
      
      
    </Paper>
      )}
      options={options}
      placeholder="Search for Projects, User, Anticipa...."
     
      renderMenu={(results, menuProps) => (
        <Menu   {...menuProps}>
          {results.map((result, index) => {

            const {id, object, type, owner} = result

            return (
            
            
 
              <Box key={id}>
                {
                  type === "User" ? 
                  <User user={object} /> : type === "Anticipation" ?
                  <Anticipation anticipation={object} owner={owner}  /> : 
                  type === "Project" ? 
                  <Project project={object} /> : null
                }
                    
              </Box>
            
           )
          })}
        </Menu>

        
      )}
    />
  );
};

export default Search




const User = ({user}) => {

  const {slug, name, image} = user


  return (
    
          < ListItem >
              
                  <Box display="flex" component={Link} sx={{textDecoration: "none"}} to={`/xpo/members/${slug}`} width="100%" alignItems="center" >
                      
                      <ListItemIcon>
                      <Avatar src={image} >
                        {name[0]}
                      </Avatar>
                          
                      </ListItemIcon>
                      <Stack  >
                          
                          
                          <Box maxWidth="90" >
                              <Typography sx={{textTransform: "capitalize"}} color="ButtonText" variant="body2"> {name}</Typography>
                          </Box>
                         
                      </Stack>
                  </Box>
             
          </ListItem>
  )
}


const Anticipation = ({anticipation, owner}) => {

  const {body} = anticipation
  const {slug} = owner


  return (
    
          < ListItem >
              
                  <Box display="flex" component={Link} sx={{textDecoration: "none"}} to={`/xpo/members/${slug}/anticipations`} width="100%" alignItems="center" >
                      
                      <ListItemIcon>
                      <Avatar sx={{backgroundColor: purple[400]}} > <PsychologyRounded /> </Avatar>
                          
                      </ListItemIcon>
                      <Stack  >
                          
                          
                          <Box maxWidth="90%"  >
                              <Typography noWrap='true'  sx={{textTransform: "capitalize", maxWidth: {xs: 220, sm: 290, md: 300}}} color="ButtonText" variant="body2"> {body}</Typography>
                          </Box>
                         
                      </Stack>
                  </Box>
             
          </ListItem>
  )
}


const Project = ({project}) => {

  const {slug, title, description} = project


  return (
    
          < ListItem >
              
                  <Box display="flex" component={Link} sx={{textDecoration: "none"}} to={`/xpo/projects/${slug}`} width="100%" alignItems="center" >
                      
                      <ListItemIcon>
                      <Avatar sx={{backgroundColor: orange[400]}} > <FolderRounded /> </Avatar>
                          
                      </ListItemIcon>
                      <Stack  >
                          
                          
                          <Box maxWidth="90%"  >
                              <Typography noWrap='true' sx={{textTransform: "capitalize", maxWidth: {xs: 220, sm: 290, md: 300}}} color="ButtonText" variant="body2"> {title}</Typography>
                          </Box>

                          <Box maxWidth="90%"  >
                              <Typography noWrap='true' sx={{textTransform: "capitalize", maxWidth: {xs: 220, sm: 290, md: 300}}} color="ButtonText" variant="body2"> {description}</Typography>
                          </Box>
                         
                      </Stack>
                  </Box>
             
          </ListItem>
  )
}