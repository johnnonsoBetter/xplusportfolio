import React, { useCallback } from "react";
import styled from "@emotion/styled";
import Uploady from "@rpldy/uploady";
import withPasteUpload from "@rpldy/upload-paste";
import UploadPreview from "@rpldy/upload-preview";
import UploadButton from "@rpldy/upload-button"
import { Box } from "@mui/system";
import { Button, InputAdornment, InputBase, Typography } from "@mui/material";


export default function SuggestionUpload ({image, setImage, setImageUrl}) {
   
    const uploadImage = (e) => {

        e.preventDefault()
        const newImage = e.target.files[0]
        console.log(newImage)
        setImage(newImage)
        setImageUrl(URL.createObjectURL(newImage))
        
        
    }
    
	return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' >

           

                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      
                      onChange={uploadImage }
                      endAdornment={
                        <InputAdornment position="start">
                          <Box component='img' width={24} src="/images/photo.png" />
                        </InputAdornment>
                      }
                      size="small"
                      sx={{p: 0, border: 'none', maxWidth: 200}}
                      type='file' accept='image/*' className="form-control" 
                    />
               
            

            <Typography variant='body2' > Upload screen shot</Typography>

        </Box>
    )
};