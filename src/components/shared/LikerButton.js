import { ThumbUpOutlined } from "@mui/icons-material"
import { Badge, IconButton, Tooltip } from "@mui/material"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { FetchContext } from "../../context/FetchContext"

export default function LikerButton({liked, a_slug, setTotalLikes, totalLikes}) {

    const [isLiked, setIsLiked] = useState(liked)
    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [LikedTrue, setLikedTrue] = useState(false)
    const [unLikedTrue, setunLikedTrue] = useState(false)
    const initialTotalLikes = totalLikes
  
  
    const like = () => {
        setunLikedTrue(false)
        setIsLiked(true)
        setLikedTrue(true)
        setTotalLikes(totalLikes + 1)
  
        authAxios.post(`/api/v1/anticipations/${a_slug}/likes`).then(res => {
            
            setLikedTrue(true)
        }).catch(err => {
            setIsLiked(false)
            setLikedTrue(false)
            setTotalLikes(initialTotalLikes)
            setSomethingWentWrong(true)
        })
  
    }
  
  
    const unLike = () => {
        setLikedTrue(false)
        setIsLiked(false)
        setunLikedTrue(true)
        setTotalLikes(totalLikes - 1)
  
        authAxios.delete(`/api/v1/anticipations/${a_slug}/likes`).then(res => {
            console.log(res)
        }).catch(err => {
            setIsLiked(true)
            setunLikedTrue(false)
            setTotalLikes(initialTotalLikes)
            setSomethingWentWrong(true)
        })
  
    }
  
    return (
        <>
        {
           
            isLiked ?

            <Tooltip title="unlike" sx={{mr: 2}}  >
                <IconButton disabled={unLikedTrue} onClick={unLike} size="small" >
                    <Badge color="info" badgeContent={totalLikes} >
                        <ThumbUpOutlined  fontSize='small' />
                    </Badge>
                </IconButton>
                
            </Tooltip> 
            :
            <Tooltip title="like" sx={{mr: 2}} >
                <IconButton disabled={LikedTrue} onClick={like} size="small" >
                    <Badge color="info" badgeContent={totalLikes} >
                        <ThumbUpOutlined  fontSize='small' />
                    </Badge>
                </IconButton>
                
            </Tooltip> 
        }
        </>
    )
  }
  