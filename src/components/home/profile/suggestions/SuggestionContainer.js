
import { Box } from '@mui/material';
import React from 'react'
import SuggestionList from '../../feeds/project/suggestion/SuggestionList';



export default function SuggestionContainer () {


    return (
        <Box width="100%"> 
           <Box my={3} mx={2} >
               <SuggestionList />
           </Box>
        </Box>
    )
}