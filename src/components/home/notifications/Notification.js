import { blue, orange } from "@mui/material/colors"
import NotificationInfo from "./types/NotificationInfo"



export default function Notification({object, type,  user_slug}){

    const {anticipation, project, action_owner, total_performers} = object


    return (
        <>
        {
            type === "AnticipationLikeNotification" ?
            <NotificationInfo  body={anticipation.body} action_owner={action_owner} total_performers={total_performers} event_message='likes your anticipation ' color={blue[400]} link={`/xpo/my_profile/${user_slug}/anticipations/`} />
            : 
            type === "UpvoteNotification" ? 
            <NotificationInfo  body={project.title} action_owner={action_owner} total_performers={total_performers} link={`/xpo/projects/${project.slug}`} color={orange[400]} event_message='upvoted your project '  /> 
            :
            type === "NewAnticipationNotification" ?
            <NotificationInfo  body={anticipation.body} action_owner={action_owner} total_performers={0} event_message='anticipates ' color={blue[400]} link={`/xpo/my_profile/${user_slug}/anticipations/`}/> : 
            type === "ProjectLikeNotification" ? 
            <NotificationInfo   body={project.title} action_owner={action_owner} total_performers={total_performers} link={`/xpo/projects/${project.slug}`} color={orange[400]} event_message='likes your project ' /> 
            : 
            type === "AnticipationSubscriptionNotification" ?
            <NotificationInfo  body={anticipation.body} action_owner={action_owner} total_performers={total_performers} event_message='subscribed to your anticipation' color={blue[400]} link={`/xpo/my_profile/${user_slug}/anticipations/`}/> : 
            type === "NewSuggestionNotification" ? 
            <NotificationInfo   body={project.title} action_owner={action_owner} total_performers={total_performers} link={`/xpo/projects/${project.slug}`} color={orange[400]} event_message={`contributed to your project`}  /> 
            :
            type === "NewProjectNotification" ?
            <NotificationInfo  body={project.title} action_owner={action_owner} total_performers={total_performers} link={`/xpo/projects/${project.slug}`} color={orange[400]} event_message='added a new project'  /> 
            : 
            type === "FulfillAnticipationNotification" ?
            <NotificationInfo  body={anticipation.body} action_owner={action_owner} total_performers={total_performers} event_message='fulfilled and completed' color={blue[400]} link={`/xpo/my_profile/${user_slug}/anticipations/`} />
            : null
             
            
        
        }
    </>
    )
}
