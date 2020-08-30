import React, { Component, useRef, useState, useEffect } from 'react';
import { Stage, Layer, Rect, Group, Ring, Circle, KonvaNodeComponent } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux'
import { createNode, selectNodes, dragNode, INode } from '../slices/canvas';
import Wave from './Wave'
import CanvasElement from './CanvasElement'
import AudioElement from './AudioElement';
import VirtualAudioGraph from 'virtual-audio-graph/dist/VirtualAudioGraph';

const Node = ({ node, virtualAudioGraph }: { node: INode, virtualAudioGraph: VirtualAudioGraph }) => {
  const dispatch = useDispatch()
  const { x, y , active} = node
  const fill = active ? '#ff0000' : '#00ff00'
  const handleDragEnd = (e: any) => 
    dispatch(dragNode({ x: e.target.x(), y: e.target.y(), targetNodeId: node.id }))
  
  return (
    <Group
        x={x}
        y={y}
      draggable
      id={node.id}
      onDragEnd={handleDragEnd}
    >
      <Wave nodeId={node.id} />
      <CanvasElement
        width={50}
        height={50}
        fill={fill}
        name='triggerable'
      />
      <AudioElement
        active={node.active}
        virtualAudioGraph={virtualAudioGraph}
      />
    </Group>
  );
}


export default Node 