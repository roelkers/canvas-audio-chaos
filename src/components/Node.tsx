import React  from 'react';
import { Group } from 'react-konva';
import { useDispatch } from 'react-redux'
import { dragNode, INode } from '../slices/canvas';
import Wave from './Wave'
import CanvasElement from './CanvasElement'

const Node = ({ node }: { node: INode }) => {
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
        nodeId={node.id}
        width={50}
        height={50}
        fill={fill}
        name='triggerable'
      />
    </Group>
  );
}


export default Node 