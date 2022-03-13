import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Menu from '@mui/material/Menu';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {  CloseOutlined, InsertCommentRounded, Link, ScreenshotRounded} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import InputUnstyled from '@mui/base/InputUnstyled';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { LoadingButton } from '@mui/lab';
import html2canvas from 'html2canvas';


  
  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };
  
  const StyledInputElement = styled('input')(
    ({ theme, width}) => `
    
    font-size: 0.7rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 0px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 5px 5px;
    transition: all 150ms ease;
    width: 190px;
   
  `,
  );
  
  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
      <InputUnstyled disabled components={{ Input: StyledInputElement }} {...props}  ref={ref} />
    );
  });

 function UrlDisplay() {
    return <CustomInput  aria-label="Demo input" placeholder="Type something..." />;
}



 function Input() {
  return (
    <Paper

      sx={{  display: 'flex', alignItems: 'center', width: "100%" }}
      elevation={0}
    >
      <InputBase
        sx={{  flex: 1 }}
        multiline
        autoFocus={false}
        rows={5}
        placeholder="Type Suggestion"
        
      />
     
    </Paper>
  );
}



export default function Suggestion() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [imageUrl, setImageUrl] = React.useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const $support = (function () {
    const canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");

    return {
        canvas: !!ctx,
        imageData: !!ctx.getImageData,
        dataURL: !!canvas.toDataURL,
        btoa: !!window.btoa,
    };
  })();


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="Make Suggestion">
          <IconButton
            onClick={handleClick}
            size="small"
           
          >
    
            <InsertCommentRounded />
          </IconButton>
          
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
       
        
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            borderRadius: "10px",
            maxWidth: 250,
            
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
       <Box p={1} maxWidth={250} >
           
           <Box display='flex' alignItems='center' justifyContent='space-between'>
            <UrlDisplay />
           
            <IconButton onClick={handleClose}>
                <CloseOutlined />
            </IconButton>


           </Box>

           <Box >
             {
               imageUrl && 
               <img style={{maxWidth: "100%", width: "90%"}} src={imageUrl} />

             }
            
           </Box>

           <Box my={2}>

             
            </Box>




          <Box my={2}>

              <Input />
          </Box>

          <Box >
              <LoadingButton variant='contained' fullWidth color='success' >
                  Make suggestion
              </LoadingButton>
          </Box>

       </Box>
      </Menu>
    </React.Fragment>
  );
}





