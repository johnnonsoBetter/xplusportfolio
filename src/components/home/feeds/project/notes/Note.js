
import React from 'react'
import {  Grid } from '@mui/material'
import NoteInfo from './NoteInfo'

export default function Note({note}) {


    return (
       
            <Grid item xs={6} sm={4} md={4} >
                <NoteInfo note={note} />
            </Grid> 
    )
}