import { CancelOutlined, CheckOutlined, FolderRounded, ModeEditRounded, VerifiedRounded } from '@mui/icons-material'
import { Stack, Tooltip, Typography, IconButton, Paper, TextField, InputBase } from '@mui/material'
import { Box } from '@mui/system'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../../../../context/AuthContext'
import { FetchContext } from '../../../../context/FetchContext'


export default function Suggestion({suggestion}) {

    const {done, created_at, project_slug, project_title, id} = suggestion
    const date_created = moment(created_at).fromNow()
    const [content, setContent] = useState(suggestion.content)
    const [edit, setEdit] = useState(false)





    return (
       <Box my={2}  >
           <Paper sx={{p: 2}} >

          
           <Box display='flex' justifyContent='space-between' alignItems='center' >
                   
                    <Stack  >
                    
            
                    <Box maxWidth={120}>
                        <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} color="ButtonText" variant="body2" noWrap={true}> created_at</Typography>

                    </Box>
                    <Box maxWidth={120}>
                        <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} variant="body2" color="ButtonShadow" noWrap={true}> {date_created}</Typography>
                       
                    </Box>
                    
                     
                </Stack>

                <Box display='flex'  alignItems='center' >
                   
                    

                    <Tooltip title={project_title}   sx={{mx: 1}} >
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


