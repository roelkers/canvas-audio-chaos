import React  from 'react';
import { Group } from 'react-konva';
import { useDispatch } from 'react-redux'
import { dragNode, INode } from '../slices/canvas';
import Wave from './Wave'
import CanvasElement from './CanvasElement'

const Node = ({ node }: { node: INode }) => {
  const dispatch = useDispatch()
  const { x, y } = node
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
      <Wave node={node} />
      <CanvasElement
        active={node.active}
        nodeId={node.id}
        groups={node.groups}
        periodicTrigger={node.periodicTrigger}
        activeTrigger={node.activeTrigger}
        soundOnActivate={node.soundOnActivate}
        width={50}
        height={50}
        name='triggerable'
      />
    </Group>
  );
}


export default Node 