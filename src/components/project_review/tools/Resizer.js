import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {  AspectRatioRounded } from '@mui/icons-material';
import { SketchPicker } from 'react-color';
import { Slider } from '@mui/material';
import ProjectReviewContext from '../../../context/ProjectReviewContext';


const ResizeTool = () => {

    const {setScreenPoint, screenPoint, resizeValue, setResizeValue} = React.useContext(ProjectReviewContext)



    return (

    <Box display='flex' width='100%' px={1} justifyContent='flex-end' alignItems='center' >

        <Slider
        size="small"
        
        aria-label="Small"
        step={12}
        marks
        defaultValue={resizeValue}
        

        sx={{width: 120, mr: 2}}
        onChange={(e) => {
          
            let value = e.target.value
            //setScreenPoint(e.target.valule)
            switch(value){
            case 0: 
                setScreenPoint(3)
                break
            case 12: 
                setScreenPoint(4)
                break
            case 24: 
                setScreenPoint(5)
                break
            case 36: 
                setScreenPoint(6)
                break
            case 48: 
                setScreenPoint(7)
                break
            case 60: 
                setScreenPoint(8)
                break
            case 72: 
                setScreenPoint(9)
                break
            case 84: 
                setScreenPoint(10)
                break
            case 96: 
                setScreenPoint(11)
                break
            case 100: 
                setScreenPoint(12)
                break
            
            

            default: 
            setScreenPoint(12)
            setResizeValue(value)

            
            }
        }}
        />
    </Box>
    )
}
export default function Resizer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="Resizer">
          <IconButton
            onClick={handleClick}
            size="small"
           
          >
    
            <AspectRatioRounded />
          </IconButton>
          
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            borderRadius: "10px",
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       <Box >
            <ResizeTool />
       </Box>
      </Menu>
    </React.Fragment>
  );
}
