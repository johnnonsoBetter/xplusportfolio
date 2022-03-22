import { LinkOffOutlined, OpenInNewOutlined } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'  
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../../../../context/AuthContext'
import LikerButton from '../../../shared/LikerButton'
import VoteButton from '../../../shared/VoteButton'


export default function TopProject({project}) {

    const {total_likes, total_votes, slug, photo, voted, liked, user_slug, github_link, live_link} = project
    const [totalLikes, setTotalLikes] = useState(total_likes)
    const [totalVotes, setTotalVotes] = useState(total_votes)
    const {isCurrentUser} = useContext(AuthContext)


    return (
        
        <Box  >

            <Link to={`/xpo/projects/${slug}`} style={{textDecoration: "none", width: "100%"}} >

                <Box display="flex" width="100%" alignItems="center" >
                    <Box
                        component='img'
                        alt={slug}
                        effect="blur"
                        src={photo}
                        width='100%'
                        sx={{
                            height: 198,
                            display: 'block',
                            maxWidth: "100%",
                            overflow: 'hidden',
                            objectFit: {xs: 'contain', sm: 'cover'},
                            width: '100%',
                        }}
                    />
                </Box>
            </Link>

            <Box display="flex" my={2}  width="100%" alignItems="center" justifyContent='space-between' >
                
                <Box >
                    <VoteButton voteUrl={`/api/v1/projects/${slug}/voters`} voted={voted}  totalVotes={totalVotes} setTotalVotes={setTotalVotes}  />

                    <LikerButton likeUrl={`/api/v1/projects/${slug}/likes`} liked={liked}  totalLikes={totalLikes} setTotalLikes={setTotalLikes}  />
                </Box>

                <Box>


                    <Tooltip title="View Repo"  >
                        
                        
                        <a rel="noopener noreferrer" href={github_link} target="_blank">
                
                            <IconButton size="small"  target="_blank" rel="noopener noreferrer" >
                            <img width={16} src="/images/repo.png" alt="repo" />
                            </IconButton>

                        </a>
                    </Tooltip>

                    <Tooltip title="View live"  sx={{mx: 1}}>
                        
                        <a rel="noopener noreferrer" href={live_link} target="_blank">

                        <IconButton  size="small">
                            <LinkOffOutlined />
                        </IconButton>

                        </a>
                    </Tooltip>

                    {
                    !isCurrentUser(user_slug) &&
                    <Tooltip title="Review project" >
                    <a rel="noopener noreferrer" href={`${window.location.origin}/project_review/${slug}`} target="_blank">

                        <IconButton size="small"  target="_blank" rel="noopener noreferrer" >
                            <OpenInNewOutlined fontSize='small' />
                        </IconButton>

                    </a>
                        
                    </Tooltip>
                    }
                </Box>
            </Box>


        </Box>
        

    )
}