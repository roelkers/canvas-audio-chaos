import React  from 'react';
import { Group } from 'react-konva';
import { useDispatch, useSelector } from 'react-redux'
import { dragNode, INode } from '../slices/canvas';
import Wave from './Wave'
import CanvasElement from './CanvasElement'
import { selectIsMobile } from '../slices/app';

const Node = ({ node }: { node: INode }) => {
  const mobile = useSelector(selectIsMobile)
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
        width={mobile ? 30 : 50}
        height={mobile ? 30 : 50}
        name='triggerable'
      />
    </Group>
  );
}


export default Node 