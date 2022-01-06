import { List, ListItem } from '@mui/material'
import React from 'react'
import AnticipationActivity from '../../feeds/activities/anticipation_activity/AnticipationActivity'

export default function AnticipationList() {

    return (
        <List >
            <ListItem disablePadding >
                <AnticipationActivity />
            </ListItem>

            <ListItem disablePadding >
                <AnticipationActivity />
            </ListItem>

            <ListItem disablePadding >
                <AnticipationActivity />
            </ListItem>

            <ListItem disablePadding >
                <AnticipationActivity />
            </ListItem>

            <ListItem disablePadding >
                <AnticipationActivity />
            </ListItem>

            <ListItem disablePadding >
                <AnticipationActivity />
            </ListItem>
            

            
        </List>
    )
}