import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ProfileMenu from './ProfileMenu';
import ProfileRouter from './ProfileRouter';

export default function PinnedSubheaderList() {
  return (
    <List
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: "calc(99vh - 60px)",
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
                    
                    <ProfileRouter slug="john-doe" /> 
                </>
                
            }
        </li>
      ))}
    </List>
  );
}
