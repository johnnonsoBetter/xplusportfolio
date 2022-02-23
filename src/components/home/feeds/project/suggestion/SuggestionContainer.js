import React, { useContext, useEffect, useState } from 'react'
import { LightbulbOutlined } from '@mui/icons-material';
import { Box, CircularProgress, Divider, IconButton, InputBase, Paper, Tooltip } from '@mui/material'

import SuggestionList from './SuggestionList';
import { FetchContext } from '../../../../../context/FetchContext';
import { AuthContext } from '../../../../../context/AuthContext';
import Empty from '../../../../shared/Empty';


function CreateSuggestion(props) {
  const {setSuggestions, suggestions, project, setProject} = props
  const {authAxios} = useContext(FetchContext)
  const [disable, setDisable] = useState(false)
  const [content, setContent] = useState('')
  const {setSomethingWentWrong, isCurrentUser} = useContext(AuthContext)

    const makeSuggestion = (e) => {
      e.preventDefault()

      if(content === '') return 

      setDisable(true)
      authAxios.post('/api/v1/suggestions', {
        suggestion: {
          content,
          project_id: project.id
        }
      }).then(res => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))

        console.log(res, "this is my own response to this project.")
        const {content, id, done, created_at} = res.data
        const newSuggestion = {
          content,
          id,
          done,
          created_at,
          project_slug: project.slug,
          user: {
            image: userInfo['image'],
            name: userInfo['image'],
            slug: userInfo['slug']

          }
        }


        const totalSuggestions = project.total_suggestions
        const newProject = Object.assign(project, {})
        

       
        newProject.total_suggestions = (totalSuggestions + 1)
        console.log(newProject, "check out the same new project")
        setSuggestions(suggestions.concat(newSuggestion))
        setProject(newProject)
        setContent('')
        setDisable(false)

      }).catch(err => {
        setDisable(false)
        setSomethingWentWrong(true)
      })

    }


    return (
      <Paper 
        elevation={1}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%",}}
      >
        <InputBase
          sx={{ ml: 1, flex: 1}}
          type="text"
          placeholder="Make Suggestion "
          value={content}
          multiline
          rows={4}
          onChange={(e) => {
            e.preventDefault()

            setContent(e.target.value)
          }}
          
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <Tooltip title="Suggest" >
            <IconButton disabled={disable} onClick={makeSuggestion} color="primary" sx={{ p: '10px' }} aria-label="directions">
                <LightbulbOutlined />
            </IconButton>

        </Tooltip>
        
        
      </Paper>
    );
  }
  


export default function SuggestionContainer (props) {
  const {slug, user, project, setProject} = props
  const {authAxios} = useContext(FetchContext)
  const {setSomethingWentWrong, isCurrentUser} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [suggestions, setSuggestions] = useState([])


  useEffect(() => {   
       

    authAxios.get(`/api/v1/projects/${slug}/suggestions`).then(res => {
        setSuggestions(res.data)  
        setLoading(false)
    }).catch(err => {

        setSomethingWentWrong(true)
    })


    return () => {
        setSuggestions([])
        setLoading(true)
        setSomethingWentWrong(false)
    }
  }, [])

  



    return (

      <>
        {
          loading ?
          <Box >
            <CircularProgress />
          </Box> : 

          <Box width="100%" p={1}> 
              
              {
                !isCurrentUser(user.slug) && <CreateSuggestion setSuggestions={setSuggestions} suggestions={suggestions} project={project} setProject={setProject} />
              }
              <Box my={3} >
                   {
                     suggestions.length === 0 ?
                     <Empty emptyDetail="No Suggestion found" sx={{minHeight: "70px"}}/> : 
                     <SuggestionList project={project} suggestions={suggestions} />
                   }
                  
              </Box>
          </Box>
        }
      </>
        
    )
}