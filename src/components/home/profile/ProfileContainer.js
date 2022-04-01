import * as React from 'react';
import List from '@mui/material/List';
import ProfileMenu from './ProfileMenu';
import ProfileRouter from './ProfileRouter';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import '../../../css/InfiniteList.css'

export default function ProfileContainer() {

  const {slug} = useParams()
 
  return (
    <List
      id="profile_container"
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        height: {sm: "calc(99vh - 45px)", xs: "calc(99vh - 30px)"},
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
