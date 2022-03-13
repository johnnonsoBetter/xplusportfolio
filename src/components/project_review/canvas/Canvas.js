import React, { useContext, useEffect } from "react";
import ProjectReviewContext from "../../../context/ProjectReviewContext";
import '../../../css/canva.css'

export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
  } = useContext(ProjectReviewContext)

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
      id="canvas"
    />
  );
}