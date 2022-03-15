import { LoadingButton } from "@mui/lab"
import React from 'react'


export default function FollowButton({is_following, slug}) {

    const [isFollowing, setIsFollowing] = useState(is_following)
    const {authAxios} = useContext(FetchContext)
    const [followTrue, setFollowTrue] = useState(false)
    const [unFollowTrue, setunFollowTrue] = useState(false)


    const followMember = () => {
        setunFollowTrue(false)
        setIsFollowing(true)


        setFollowTrue(true)

        authAxios.post(`/api/v1/users/${slug}/followings`, {id: slug}).then(res => {
          
        }).catch(err => {
            setIsFollowing(false)
            setFollowTrue(false)
        })

    }


    const unfollowMember = () => {
        setFollowTrue(false)
        setIsFollowing(false)

        setunFollowTrue(true)

        authAxios.delete(`/api/v1/users/${slug}/followings`, {id: slug}).then(res => {
         
        }).catch(err => {
            setIsFollowing(true)
            setunFollowTrue(false)
        })

    }

    return (
        <>
        {
           
            isFollowing ?
            <LoadingButton disabled={unFollowTrue} size="small" sx={{mx: 1}} fullWidth variant="outlined" onClick={unfollowMember} > Unfollow </LoadingButton> 
            :
            <LoadingButton disabled={followTrue} disableElevation size="small" sx={{mx: 1}} fullWidth variant="outlined" onClick={followMember}  > Follow </LoadingButton>
           
        }
        </>
    )
}
