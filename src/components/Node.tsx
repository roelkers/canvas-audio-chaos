import React, { Component, useRef, useState, useEffect } from 'react';
import { Stage, Layer, Rect, Group, Ring, Circle, KonvaNodeComponent } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux'
import { createNode, selectNodes, INode } from '../slices/canvas';
import Wave from './Wave'

  
const Node = ({ node } : { node: INode }) => {
  const fill = node.active ? '#ff0000' : '#00ff00' 
  
  return (
    <Group
      draggable
    >
      <Wave nodeId={node.id}/>
      <Rect
        name='triggerable'
        id={node.id}
        width={50}
        height={50}
        fill={fill}
      />
    </Group>
  );
}


export default Node 