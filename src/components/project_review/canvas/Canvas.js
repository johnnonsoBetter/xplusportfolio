import React, { useContext, useEffect } from "react";
import ProjectReviewContext from "../../../context/ProjectReviewContext";


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
      width='100%'
      height='100%'
      style={{
          height: '100%',
          width: '100%'
      }}
    />
  );
}