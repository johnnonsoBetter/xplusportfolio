import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ProfileMenu from './ProfileMenu';
import ProfileRouter from './ProfileRouter';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ProfileContainer({isCurrentUser}) {

  const {slug} = useParams()
  console.log(slug)
  return (
    <List
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: {sm: "calc(99vh - 60px)", xs: "calc(96vh - 85px)"},
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          
            
            {
                
                sectionId === 0 ? 
                <>
                  
                    <ProfileMenu />
                </>
                
                : 
                <>
                    
                    <ProfileRouter slug={slug} isCurrentUser={false} /> 
                </>
                
            }
        </li>
      ))}
    </List>
  );
}
