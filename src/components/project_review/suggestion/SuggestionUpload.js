import React, { useRef } from "react";

import { Box } from "@mui/system";
import { Avatar, Tooltip, IconButton } from "@mui/material";
import { UploadRounded } from "@mui/icons-material";


export default function SuggestionUpload ({image, setImage, setImageUrl}) {

  const fileRef = useRef(null)
   
    const uploadImage = (e) => {

        e.preventDefault()
        const newImage = e.target.files[0]
        console.log(newImage)
        setImage(newImage)
        setImageUrl(URL.createObjectURL(newImage))
        
        
    }
    
	return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' >

           

      
                <Tooltip title="Upload Screenshot" >  
                  <IconButton size='small' onClick={() => {
                    const file = fileRef.current 

                    file.click()
                  }} >
                          <Avatar sx={{width: 32, height: 32}} ><UploadRounded color='action' fontSize='0.5rem'/> </Avatar>
                  </IconButton>

                </Tooltip>
                   

                       
              <input onChange={uploadImage} type='file' style={{display: 'none'}} accept='image/*' ref={fileRef} id="file" name="file" />


        </Box>
    )
};