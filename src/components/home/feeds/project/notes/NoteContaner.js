import React, { useContext, useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { FetchContext } from '../../../../../context/FetchContext';
import { AuthContext } from '../../../../../context/AuthContext';
import Empty from '../../../../shared/Empty';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Note from './Note';


export default function SuggestionContainer (props) {

  const {authAxios} = useContext(FetchContext)
  const {setSomethingWentWrong, isCurrentUser} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState([])
  const {slug} = useParams()



  useEffect(() => {   
       

    authAxios.get(`/api/v1/projects/${slug}/notes`).then(res => {
        setNotes(res.data)  
        setLoading(false)
    }).catch(err => {

        setSomethingWentWrong(true)
    })


    return () => {
        setNotes([])
        setLoading(true)
        setSomethingWentWrong(false)
    }
  }, [])

  



    return (

      <>
        {
          loading ?
          <Box width='100%' display='flex' my={2} justifyContent='center' alignItems='center'  >
              <img src='/images/review_loader.gif' width={45} height={45} />
              
          </Box> : 

          <Box width="100%" p={1}> 
              
             
              <Box my={3} >
                   {
                     notes.length === 0 ?
                     <Empty emptyDetail="No note yet" sx={{minHeight: "70px"}}/> : 
                     <>
                     <Grid container justifyContent='center'>
                        {
                            notes.map(note => {
                            
                            return (
                                <Note key={note.id} note={note} />
                            )
                            })
                        }

                     </Grid>
                        
                    </>
                   }
                  
              </Box>
          </Box>
        }
      </>
        
    )
}

