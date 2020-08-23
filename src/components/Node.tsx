import React, { Component, useRef, useState, useEffect } from 'react';
import { Stage, Layer, Rect, Group, Ring, Circle, KonvaNodeComponent } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux'
import { createNode, selectNodes, INode } from '../slices/canvas';
import Wave from './Wave'
import CanvasElement from './CanvasElement'
  
const Node = ({ node } : { node: INode }) => {
  const fill = node.active ? '#ff0000' : '#00ff00' 
  return (
    <Group
      draggable
      id={node.id}
    >
      <Wave nodeId={node.id}/>
      <CanvasElement
       x={0} 
       y={0} 
       width={50}
       height={50}
       fill={fill}
       name='triggerable'
      />
    </Group>
  );
}


export default Node 