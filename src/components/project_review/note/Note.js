import React, { useEffect, useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {SendRounded } from '@mui/icons-material'
import {IconButton, Typography, Zoom } from '@mui/material'
import { blue, grey, orange } from '@mui/material/colors'
import { Box } from '@mui/system'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';




export default function Note() {

const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
);

useEffect(() => {
    console.log(editorState);
}, [editorState]);


  return (
    <Box>
      
      <Box style={{ minHeight: '400px' }}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </Box>
    </Box>
  );
}