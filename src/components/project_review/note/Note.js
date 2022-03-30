import React, { useEffect, useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {SendRounded } from '@mui/icons-material'
import {IconButton, Typography, Zoom } from '@mui/material'
import { blue, grey, orange } from '@mui/material/colors'
import { Box } from '@mui/system'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import draftToHtml from 'draftjs-to-html';
import parse from 'html-react-parser'







export default function Note() {

  const [editorState, setEditorState] = React.useState(() =>
  EditorState.createEmpty()
);
const [markup, setMarkups] = useState('')

const editor = React.useRef(null);


function focusEditor() {
  editor.current.focus();
}

  function onEditorStateChange(editorState) {
   setEditorState(editorState)
  };






useEffect(() => {

  const rawContentState = convertToRaw(editorState.getCurrentContent());

  console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

  setMarkups(draftToHtml(convertToRaw(editorState.getCurrentContent())))

  



// const markup = draftToHtml(
  
//   rawContentState, 
// );

//     console.log(parse(`${markup}`));

    

}, [editorState]);


  return (
    <Box>
      
      <Box style={{ minHeight: '400px' }}>
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
        <textarea
          disabled
          value={markup}
        ></textarea>
      </div>
      </Box>

      
    </Box>
  );
}