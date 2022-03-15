import { CloseOutlined, DownloadOutlined } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect } from 'react' 
import DrawerContext from '../../context/DrawerContext'
import { saveAs } from 'file-saver'


export default function ImageViewer() {

    const {image, setImage, setDrawerOpen, setFullScreen} = useContext(DrawerContext)

    useEffect(() => {

        return () => setImage(null)
    }, [])

    const downloadImage = () => {
        saveAs(image, 'suggestion.png') // Put your image url here.
    }


    return (
        <Box >

            <Box mr={2} display='flex' width='100%' justifyContent='flex-end'>
               

                <Tooltip title='Download Image' >
                    <IconButton onClick={downloadImage} >
                        <DownloadOutlined />
                    </IconButton>
                </Tooltip>


                <Tooltip title='Close'>

                    <IconButton sx={{mr: 2}} onClick={() => {
                        setDrawerOpen(false)
                        setFullScreen(false)
                    }} >

                        <CloseOutlined />
                    </IconButton>


                </Tooltip>

                
                   
            </Box>


        <Box display='flex' justifyContent='center' alignItems='center' borderRadius={9} minHeight='calc(98vh - 150px)' >
            <img style={{maxWidth: "100%", minWidth: "100%", maxHeight: "100%"}} src={image} />
        </Box>

        </Box>

        
            
    )
}