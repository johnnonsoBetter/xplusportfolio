import { Switch, Tooltip } from "@mui/material";
import React from 'react'



export default function AnticipationToggle({checked, setChecked}) {

  

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (
      <Tooltip title={checked ? "Just Add Project" : "Fulfill Anticipation"} >
        <Switch
          checked={checked}
          onChange={handleChange}
          
        />
  
      </Tooltip>
      
    );
  }
  