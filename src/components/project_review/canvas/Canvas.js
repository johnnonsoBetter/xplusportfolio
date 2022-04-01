import React, { useContext } from "react";
import CanvasDraw from "react-canvas-draw";
import ProjectReviewContext from "../../../context/ProjectReviewContext";
import '../../../css/canva.css'

export function Canvas() {

  const {canvasObject} = useContext(ProjectReviewContext)
  const {brushColor} = canvasObject
 
  return (
    <CanvasDraw
      brushRadius={2}
      brushColor={brushColor}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: '#00000000',
      
      }}
  />
  );
}