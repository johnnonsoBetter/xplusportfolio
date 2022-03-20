import { LoadingButton } from "@mui/lab"
import React, { useContext, useState } from 'react'
import { FetchContext } from "../../context/FetchContext"


export default function FollowButton({is_following, slug, size, mx, variant, incrementFollowersCount, decrementFollowersCount}) {

    const [isFollowing, setIsFollowing] = useState(is_following)
    const {authAxios} = useContext(FetchContext)
    const [followTrue, setFollowTrue] = useState(false)
    const [unFollowTrue, setunFollowTrue] = useState(false)


    const followMember = () => {
        setunFollowTrue(false)
        setIsFollowing(true)


        setFollowTrue(true)

        authAxios.post(`/api/v1/users/${slug}/followings`, {id: slug}).then(res => {
            if(incrementFollowersCount())
                incrementFollowersCount()
          
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

            if(decrementFollowersCount())
                decrementFollowersCount()
         
        }).catch(err => {
            setIsFollowing(true)
            setunFollowTrue(false)
        })

    }

    return (
        <>
        {
           
            isFollowing ?
            <LoadingButton disabled={unFollowTrue}  size={size} fullWidth variant={variant} sx={{mx,}} onClick={unfollowMember} > Unfollow </LoadingButton> 
            :
            <LoadingButton disabled={followTrue}  size={size} disableElevation  fullWidth variant={variant} sx={{mx,}} onClick={followMember}  > Follow </LoadingButton>
           
        }
        </>
    )
}
