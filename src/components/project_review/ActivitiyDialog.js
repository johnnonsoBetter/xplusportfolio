import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ProjectReviewContext from '../../context/ProjectReviewContext';
import { Box } from '@mui/system';
import Note from './note/Note';
import { useTheme } from '@emotion/react';
import { IconButton, Typography, useMediaQuery } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Minimize, Remove } from '@mui/icons-material';

export default function ActivitiyDialog() {
  const {open, handleClose} = React.useContext(ProjectReviewContext)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Dialog fullScreen={matches ? true : false}  fullWidth sx={{  px: 0, backgroundColor: "rgb(0 0 0/.2)", backdropFilter: "blur(4px)"}} open={open} onClose={handleClose}>
        
     
        <DialogContent sx={{px: 0}} >
          <Box p={1}>

              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography sx={{ml: 1}}> Add Note</Typography>
                <IconButton onClick={handleClose} disableRipple >
                  <Remove />
                </IconButton>
              </Box>

              <Note />
            
          </Box>
        </DialogContent>
        <DialogActions >
          <Box sx={{p: 1}} >
          <LoadingButton variant='contained' color='success' onClick={handleClose}>Submit Note</LoadingButton>

          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}

