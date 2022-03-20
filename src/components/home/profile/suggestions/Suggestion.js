import { useTheme } from '@emotion/react'
import { CancelOutlined, CheckOutlined, FolderRounded, ModeEditRounded, VerifiedRounded } from '@mui/icons-material'
import { Stack, Tooltip, Typography, IconButton, Paper, TextField, InputBase, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../../../../context/AuthContext'
import DrawerContext from '../../../../context/DrawerContext'
import { FetchContext } from '../../../../context/FetchContext'
import ActivityOwner from '../../feeds/activities/ActivityOwner'


export default function Suggestion({suggestion, showEdit=true}) {

    const {done, created_at, user, project_slug, image_url, id} = suggestion
    const {drawerOpen, setDrawerOpen, setImage, image, setDrawerComponent, setFullScreen, drawerComponent} = useContext(DrawerContext)
    const theme = useTheme()
    const date_created = moment(created_at).fromNow()
    const [content, setContent] = useState(suggestion.content)
    const [edit, setEdit] = useState(false)
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
   



    const viewImage = () => {

        setImage(image_url)
        setDrawerOpen(true)
        
        setDrawerComponent('image_viewer')

        if (matches) setFullScreen(true)
        
    }
   





    return (
       <Box my={2}  >
           <Paper sx={{p: 2}} elevation={0}>

          
           <Box display='flex' justifyContent='space-between' alignItems='center' >
                   
                    <Stack  >
                    
            
                   
                    {/* <Box maxWidth={120}>
                        <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} variant="body2" color="ButtonShadow" noWrap={true}> {date_created}</Typography>
                       
                    </Box> */}
                    <ActivityOwner user={user} created_at={created_at} />
                    
                     
                </Stack>

                <Box display='flex'  alignItems='center' >



                   {
                       image_url && 
                       <Tooltip  title="View suggestion image"    >
                            <IconButton onClick={viewImage} >
                                <img src='/images/picture.png' alt='bug pics' width={16}  />
                            </IconButton>
                       
                        </Tooltip>
                   }
                    

                    <Tooltip title="View Project"   sx={{mx: 1}} >
                        <IconButton LinkComponent={Link} to={`/xpo/projects/${project_slug}`} >
                        <FolderRounded  fontSize='small' />
                        </IconButton>
                       
                    </Tooltip>

                    <Tooltip title={done ? 'Done' : 'pending'}>
                        <VerifiedRounded fontSize='small' color={done ? 'success' : 'disabled'} />
                    </Tooltip>
                </Box>
           </Box>

           <Box my={2} display='flex' alignItems='center' flexWrap='wrap' >
               
               <Box flexGrow={1} flexBasis="90%" >
               
               {
                   edit ? 
                   <UpdateSuggestion id={id} content={content} setContent={setContent} edit={edit} setEdit={setEdit} /> :

                   <Typography textAlign='left' variant='body2' >
                        {content}
                   </Typography>


               }



               

               </Box>

               {

                showEdit &&
                <>
                
                    {
                            !done && 
                            <>
                            {
                                !edit && 
                                <Box flexBasis="9%" >
                                <IconButton onClick={() => setEdit(true)} >
                                    <ModeEditRounded fontSize='small' color={'disabled'} />
                                </IconButton>
                                </Box>

                            }
                            
                            </>
                        }
                        
                        </>


                    }

                    
                     
                </Box>
           </Paper>
       </Box>
    )
}


const UpdateSuggestion = (props) => {

    const {setContent, content, id, setEdit} =  props
    const [value, setValue] = useState(content)
    const [disabled, setDisabled] = useState(false)
    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)


    useEffect(() => {

        return () => {
            setSomethingWentWrong(false)
        }
    }, [])



    const updateContent = () => {

        
        setDisabled(true)
        if (value === ''){
            setDisabled(false)
            return
        }
            
        authAxios.put(`api/v1/suggestions/${id}`, {
            suggestion: {
                content: value
            }
        }).then(res => {

            setContent(value)
            setEdit(false)
            setDisabled(false)
         

        }).catch(err => {
            setSomethingWentWrong(false)
        })
    }





    return (

        <>
            <Box  >
            <Paper
                component="form"
                sx={{   width: "100%", justifyContent: "center", display: 'flex', alignItems: 'center'}}
                autoComplete='off'
                elevation={0}
            >
            
                <InputBase
                
                fullWidth
                multiline
                autoFocus
                onChange={(e) => {
                    e.preventDefault()
                    setValue(e.target.value)
                }}
                variant="outlined"
                type="text"
                name="description"
                value={value}
                
                />
      
            </Paper>
            <Box display='flex' justifyContent='flex-start' >
            <IconButton onClick={updateContent} disabled={disabled} size='small' >
                <CheckOutlined fontSize='small' />
            </IconButton>

            <IconButton onClick={() => setEdit(false)} size='small' >
                <CancelOutlined fontSize='small' />
            </IconButton>

            </Box>
            
            </Box>
        </>
    )
}


