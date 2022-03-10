import { AppRegistrationRounded, ColorLensRounded, ComputerRounded, InsertCommentRounded, InsertLinkRounded, LaptopRounded, NoteAddRounded } from '@mui/icons-material'
import { IconButton, Slider, Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import ProjectReviewContext from '../../context/ProjectReviewContext';


export default function ReviewToolbar() {


  const {setScreenPoint, screenPoint} = useContext(ProjectReviewContext)






    return (
        <Box display='flex' width='100%' justifyContent='space-around' alignItems='center'>

          <Box display='flex' width='100%' justifyContent='flex-start' alignItems='center' >

          <Tooltip title="View repo" >
              <a rel="noopener noreferrer" href='https://github.com/' target="_blank">

                  <IconButton size="small"  target="_blank" rel="noopener noreferrer" >
                      <img src="/images/repo.png" alt="repo" />
                  </IconButton>

              </a>
                  
              </Tooltip>


              <Tooltip title="View live" >
                  
                  <a rel="noopener noreferrer" href='https://www.codeyplus.com/' target="_blank">

                  <IconButton  size="small">
                      <InsertLinkRounded />
                  </IconButton>

                  </a>
              </Tooltip>

              <Tooltip title="Take Note" >

                <IconButton >
                  <NoteAddRounded />
                </IconButton>


              </Tooltip>

              <Tooltip title="Add Suggestion" >

                <IconButton >
                  <InsertCommentRounded />
                </IconButton>


              </Tooltip>

             
         


          </Box>

          <Box display='flex' width='100%' justifyContent='center' alignItems='center' >


          <img src='/images/smartphone.png' width={32} height={32} />

          </Box>

          <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center' >

         


            <Slider
              size="small"
              
              aria-label="Small"
              step={12}
              marks
              defaultValue={100}
       
              sx={{width: 120, mr: 2}}
              onChange={(e) => {
                console.log(e.target.value)
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

                  
                }
              }}
            />


            {/* <Tooltip title="Edit Pencil-Color" >

            <IconButton >
              <InsertCommentRounded />
            </IconButton>


            </Tooltip> */}

            <Tooltip title="Edit Pencil-Color" >

              <IconButton >
                <ColorLensRounded />
              </IconButton>


            </Tooltip>

            <Tooltip title="Capture And Draw" >

              <IconButton >
                <AppRegistrationRounded />
              </IconButton>


            </Tooltip>





          </Box>
       

       


         

        

            
  

        </Box>
    )
}