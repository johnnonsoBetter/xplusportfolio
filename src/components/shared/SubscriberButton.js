import React from 'react'
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { FetchContext } from "../../context/FetchContext"

export default function SubscribeButton({is_subscribed, a_slug, setTotalSubScribers, totalSubScribers, TypeButton, buttonStyle}) {

    const [isSubscribed, setIsSubscribed] = useState(is_subscribed)
    const {authAxios} = useContext(FetchContext)
    const {setSomethingWentWrong} = useContext(AuthContext)
    const [subscribeTrue, setSubscribeTrue] = useState(false)
    const [unSubscribeTrue, setunSubscribeTrue] = useState(false)
    const {fullWidth, variant, size} = buttonStyle
    const initialTotalSubscribers = totalSubScribers
  
  
    const subscribe = () => {
        setunSubscribeTrue(false)
        setIsSubscribed(true)
  
  
        setSubscribeTrue(true)
        setTotalSubScribers(totalSubScribers + 1)
  
        authAxios.post(`/api/v1/anticipations/${a_slug}/suscribers`).then(res => {
            
            setSubscribeTrue(true)
        }).catch(err => {
            setIsSubscribed(false)
            setSubscribeTrue(false)
            setTotalSubScribers(initialTotalSubscribers)
            setSomethingWentWrong(true)
        })
  
    }
  
  
    const unSubscribe = () => {
        setSubscribeTrue(false)
        setIsSubscribed(false)
  
        setunSubscribeTrue(true)
        setTotalSubScribers(totalSubScribers - 1)
  
        authAxios.delete(`/api/v1/anticipations/${a_slug}/suscribers`).then(res => {
            
        }).catch(err => {
            setIsSubscribed(true)
            setunSubscribeTrue(false)
            setTotalSubScribers(initialTotalSubscribers)
            setSomethingWentWrong(true)
        })
  
    }
  
    return (
        <>
        {
           
            isSubscribed ?
            <TypeButton  disabled={unSubscribeTrue} size={size} sx={{mx: 1}} fullWidth={fullWidth} variant={variant} onClick={unSubscribe} > UnSubscribe </TypeButton> 
            :
            <TypeButton  disabled={subscribeTrue} disableElevation size={size} sx={{mx: 1}} fullWidth={fullWidth} variant={variant} onClick={subscribe}  > Subscribe </TypeButton>
           
        }
        </>
    )
  }
  