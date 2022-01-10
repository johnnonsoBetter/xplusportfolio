
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import Typography from '@mui/material/Typography';
import { Avatar, Badge, Collapse, IconButton, InputBase, Paper, TextField, Tooltip } from '@mui/material';
import { CheckCircleRounded, ReplyOutlined, Search, ThumbUpOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';


function NewSubComment({open}) {

    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Box component="paper" display="flex" justifyContent='flex-end' >

                <Paper 
                    elevation={1}
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", borderRadius: "7px" }}
                >
                    <InputBase
                    sx={{ ml: 1, flex: 1}}
                    type="text"
                    placeholder="Comment "
                    inputProps={{ 'aria-label': 'search google maps' }}
                    label="Multiline"
                    variant="outlined"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    
                    />
                    {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                    <Tooltip title="Suggest" >
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                            <MessageRounded />
                        </IconButton>

                    </Tooltip> */}
                    
                    
                </Paper>
            </Box>
        </Collapse>
    )
}






export default function CommentList() {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper  orientation="vertical">
        <Step active >
            <StepLabel
              StepIconComponent={()=> <Avatar src="/images/selfie.jpeg" />}
            >
              <Box display="flex" justifyContent="space-between" >
                  <Typography variant="body2"> John Caption</Typography>
                  <Typography fontWeight={200} variant="small" sx={{mx: 1}}> 2days ago</Typography>
              </Box>
            </StepLabel>
            <StepContent>
              <Typography textAlign="left" variant="body2">

                For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.
              </Typography>
              <Box sx={{ mb: 2, my: 1 }} display="flex" justifyContent="flex-end" alignItems="center">
                    <Typography variant="body2" color="GrayText" component={Link}> 3 Replies</Typography>
                    
                    <Tooltip title="reply" sx={{ml: 2}}  >
                        <IconButton onClick={handleClick} size="small" >
                                <ReplyOutlined  />
                        </IconButton>
                        
                    </Tooltip> 
                    <Tooltip title="like" sx={{ml: 2}}  >
                        <IconButton size="small" >
                            <Badge color="info" badgeContent={13} >
                                <ThumbUpOutlined />
                            </Badge>
                        </IconButton>
                        
                    </Tooltip> 

              </Box>
              <Box >
                <NewSubComment  open={open}/>
            </Box>

                <Stepper  orientation="vertical">

                <Step active >
                <StepLabel
                StepIconComponent={()=> <Avatar src="/images/pics.jpg" />}
                >
                John Paul
                </StepLabel>
                <StepContent>
                <Typography textAlign="left" variant="body2">

                    For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.
                </Typography>
                <Box sx={{ mb: 2, my: 1 }} display="flex" justifyContent="flex-end" alignItems="center">
                        <Typography variant="body2" color="GrayText" component={Link}> 3 Replies</Typography>
                        
                        <Tooltip title="reply" sx={{ml: 2}}  >
                            <IconButton onClick={handleClick} size="small" >
                                    <ReplyOutlined  />
                            </IconButton>
                            
                        </Tooltip> 
                        <Tooltip title="like" sx={{ml: 2}}  >
                            <IconButton size="small" >
                                <Badge color="info" badgeContent={13} >
                                    <ThumbUpOutlined />
                                </Badge>
                            </IconButton>
                            
                        </Tooltip> 

                </Box>
                <Box >
                    <NewSubComment  open={open}/>
                </Box>

                <Stepper  orientation="vertical">

                <Step active >
                <StepLabel
                StepIconComponent={()=> <Avatar src="/images/pics.jpg" />}
                >
                John Paul
                </StepLabel>
                <StepContent>
                <Typography textAlign="left" variant="body2">

                    For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.
                </Typography>
                <Box sx={{ mb: 2, my: 1 }} display="flex" justifyContent="flex-end" alignItems="center">
                        <Typography variant="body2" color="GrayText" component={Link}> 3 Replies</Typography>
                        
                        <Tooltip title="reply" sx={{ml: 2}}  >
                            <IconButton onClick={handleClick} size="small" >
                                    <ReplyOutlined  />
                            </IconButton>
                            
                        </Tooltip> 
                        <Tooltip title="like" sx={{ml: 2}}  >
                            <IconButton size="small" >
                                <Badge color="info" badgeContent={13} >
                                    <ThumbUpOutlined />
                                </Badge>
                            </IconButton>
                            
                        </Tooltip> 

                </Box>
                <Box >
                    <NewSubComment  open={open}/>
                </Box>
                </StepContent>

                </Step>
                

                


                </Stepper>

                </StepContent>

                </Step>


                


                </Stepper>
            </StepContent>
            
            
            {/* THis is a new comment  */}

            


            
        </Step>


        <Step active >
            <StepLabel
              StepIconComponent={()=> <Avatar src="/images/pics.jpg" />}
            >
              John Paul
            </StepLabel>
            <StepContent>
              <Typography textAlign="left" variant="body2">

                For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.
              </Typography>
              <Box sx={{ mb: 2, my: 1 }} display="flex" justifyContent="flex-end" alignItems="center">
                    <Typography variant="body2" color="GrayText" component={Link}> 3 Replies</Typography>
                    
                    <Tooltip title="reply" sx={{ml: 2}}  >
                        <IconButton onClick={handleClick} size="small" >
                                <ReplyOutlined  />
                        </IconButton>
                        
                    </Tooltip> 
                    <Tooltip title="like" sx={{ml: 2}}  >
                        <IconButton size="small" >
                            <Badge color="info" badgeContent={13} >
                                <ThumbUpOutlined />
                            </Badge>
                        </IconButton>
                        
                    </Tooltip> 

              </Box>
              <Box >
                <NewSubComment  open={open}/>
            </Box>
            </StepContent>
            
        </Step>

          
      </Stepper>
     
    </Box>
  );
}














