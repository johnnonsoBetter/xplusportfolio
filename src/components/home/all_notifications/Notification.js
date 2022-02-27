import { CheckBoxRounded, VerifiedRounded } from '@mui/icons-material'
import { Box, Grid, IconButton, Paper, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material'
import { useContext, useState } from 'react'
import AnticipationLike from './AnticipationLIke'
import ProjectUpvote from './ProjectUpvote'
import {FetchContext} from '../../../context/FetchContext'
import { AuthContext } from '../../../context/AuthContext'


const Notification = ({object, type, user_slug, seen, id}) => {

    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [read, setRead] = useState(seen)

    

    const markAsSeen = () => {


        authAxios.put(`api/v1/notifications/${id}`).then(res => {
            setRead(true)
        }).catch(err => {
            setSomethingWentWrong(true)
        })
    }

    return (
       
    <Box   >
    <Paper sx={{p: 1}} elevation={0} >

   
    <Box display='flex' justifyContent='space-between' alignItems='center' >
            
             <Stack  >
             
     
            
             <Box maxWidth={120}>
                 <Typography sx={{ textTransform: "downcase", fontSize: "0.8em" }} variant="body2" color="ButtonShadow" noWrap={true}> 2days ago</Typography>
                
             </Box>
             
              
         </Stack>

         <Box display='flex'  alignItems='center' >
            
             
            {
                read && <Typography variant='body2' > seen</Typography>
            }
             <Tooltip title={read ? "Seen" : "Mark as seen"}   >
                 <IconButton onClick={markAsSeen} disabled={read} >
                    <CheckBoxRounded fontSize='small' color={ read ? 'success' : 'disabled'} />
                 </IconButton>
                
             </Tooltip>


         </Box>
    </Box>

    <Box   >
        
        
        <>
            {
                type === "AnticipationLikeNotification" ?
                <AnticipationLike markAsSeen={markAsSeen} anticipation={object['anticipation']} user_slug={user_slug} /> : 
                type === "UpvoteNotification" ? 
                <ProjectUpvote markAsSeen={markAsSeen} project={object['project']} /> : null
            }
        </>
              
    </Box>
    </Paper>
</Box>
    )
}


export default Notification