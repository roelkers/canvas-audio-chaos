import React from 'react';
import { Stage, Layer, Rect, Group, Ring, Circle, KonvaNodeComponent } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux'
import { createNode, selectNodes, INode, focusNode, selectFocussedNodeId } from '../slices/canvas';

interface CanvasElementProps {
  width: number;
  height: number;
  fill: string;
  name: string
  nodeId: string;
}
  
const CanvasElement = (props: CanvasElementProps) => {
  const { name, width, height, fill, nodeId} = props
  const focussed = useSelector(selectFocussedNodeId) === nodeId
  const dispatch = useDispatch()    
  return (
    <Rect
      name={name}
      width={width}
      height={height}
      fill={fill}
      stroke='blue'
      strokeEnabled={focussed}
      strokeWidth={4}
      onClick={() => dispatch(focusNode(nodeId))}
      onTouchStart={() => dispatch(focusNode(nodeId))}
    />
  );
}


export default CanvasElement