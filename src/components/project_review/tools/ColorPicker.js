import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {  ColorLensRounded } from '@mui/icons-material';
import { SketchPicker } from 'react-color';
import ProjectReviewContext from '../../../context/ProjectReviewContext';

export default function ColorPicker() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {canvasObject, setCanvasObject} = React.useContext(ProjectReviewContext)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeComplete = (color, event) => {

    const {hex} = color
    const newCanvasObject = Object.assign({}, canvasObject) 
    newCanvasObject.brushColor = hex
    setCanvasObject(newCanvasObject)


  };


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="Color Picker">
          <IconButton
            onClick={handleClick}
            size="small"
           
          >
    
            <ColorLensRounded />
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
            borderRadius: '10px',
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
       <Box p={1} >
        <SketchPicker
            color='#fff'
            onChangeComplete={handleChangeComplete}
            
        />
       </Box>
      </Menu>
    </React.Fragment>
  );
}
