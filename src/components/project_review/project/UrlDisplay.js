import React from 'react' 
import { styled } from '@mui/material/styles';
import InputUnstyled from '@mui/base/InputUnstyled';

  
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
    width: 160px;
   
  `,
  );
  
  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
      <InputUnstyled disabled components={{ Input: StyledInputElement }} {...props}  ref={ref} />
    );
  });
  
   
  
  
  


export default function UrlDisplay() {
    return <CustomInput  aria-label="Demo input" placeholder="Type something..." />;
}