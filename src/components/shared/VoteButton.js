import { HowToVoteOutlined } from "@mui/icons-material"
import { Badge, IconButton, Tooltip } from "@mui/material"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { FetchContext } from "../../context/FetchContext"

export default function VoteButton({voted, setTotalVotes, totalVotes, voteUrl}) {

    const [isVoted, setIsVoted] = useState(voted)
    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [VotedTrue, setVotedTrue] = useState(false)
    const [unVotedTrue, setunVotedTrue] = useState(false)
    const initialTotalVotes = totalVotes
  
  
    const vote = () => {
        setunVotedTrue(false)
        setIsVoted(true)
        setVotedTrue(true)
        setTotalVotes(totalVotes + 1)
  
        authAxios.post(voteUrl).then(res => {
            
            setVotedTrue(true)
        }).catch(err => {
            setIsVoted(false)
            setVotedTrue(false)
            setTotalVotes(initialTotalVotes)
            setSomethingWentWrong(true)
        })
  
    }
  
  
    const unVote = () => {
        setVotedTrue(false)
        setIsVoted(false)
        setunVotedTrue(true)
        setTotalVotes(totalVotes - 1)
  
        authAxios.delete(voteUrl).then(res => {
            console.log(res)
        }).catch(err => {
            setIsVoted(true)
            setunVotedTrue(false)
            setTotalVotes(initialTotalVotes)
            setSomethingWentWrong(true)
        })
  
    }
  
    return (
        <>
        {
           
            isVoted ?

            <Tooltip title="unvote" sx={{mr: 2}}  >
                <IconButton disabled={unVotedTrue} onClick={unVote} size="small" >
                    <Badge color="info" badgeContent={totalVotes} >
                         <HowToVoteOutlined color="info" fontSize='small' />
                    </Badge>
                </IconButton>
                
            </Tooltip> 
            :
            <Tooltip title="vote" sx={{mr: 2}} >
                <IconButton disabled={VotedTrue} onClick={vote} size="small" >
                    <Badge color="info" badgeContent={totalVotes} >
                    <HowToVoteOutlined fontSize='small' />
                    </Badge>
                </IconButton>
                
            </Tooltip> 
        }
        </>
    )
  }
  