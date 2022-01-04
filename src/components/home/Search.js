

import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { PsychologyRounded } from '@mui/icons-material';

export default function Search() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: {xs: 'none', sm: 'flex'}, mr: 2, alignItems: 'center', width: "60%" }}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <PsychologyRounded />
      </IconButton>
      
    </Paper>
  );
}
