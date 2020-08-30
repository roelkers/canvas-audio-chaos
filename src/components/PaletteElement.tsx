
import React from 'react';
import { Stage, Layer, Rect, Group, Ring, Circle, KonvaNodeComponent } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux'
import { createNode, selectNodes, INode } from '../slices/canvas';
import { IPaletteElement } from '../slices/palette';
import CanvasElement from './CanvasElement'
  
const Element = ({ element, x, y } : { element: IPaletteElement, x: number, y: number }) => {
                   
  return (
    <CanvasElement
      name='palette'
      width={50}
      height={50}
      fill={'#0f0f0f'}
    />
  );
}


export default Element