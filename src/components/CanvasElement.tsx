import React from 'react';
import { Stage, Layer, Rect, Group, Ring, Circle, KonvaNodeComponent } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux'
import { createNode, selectNodes, INode } from '../slices/canvas';
import { IPaletteElement } from '../slices/palette';

interface CanvasElementProps {
  width: number;
  height: number;
  fill: string;
  name: string;
}
  
const CanvasElement = (props: CanvasElementProps) => {
  const { 
    name, width, height, fill} = props    
  return (
    <Rect
      name={name}
      width={width}
      height={height}
      fill={fill}
    />
  );
}


export default CanvasElement