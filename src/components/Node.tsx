import React  from 'react';
import { Group } from 'react-konva';
import { useDispatch, useSelector } from 'react-redux'
import { dragNode } from '../slices/canvas';
import Wave, { WaveProps } from './Wave'
import CanvasElement from './CanvasElement'
import { selectIsMobile } from '../slices/app';

export interface NodeProps {
  key: string;
  id: string;
  x: number,
  y: number,
  active: boolean;
  groups: string[]
  activeTrigger: boolean;
  periodicTrigger: boolean;
  velocity: number;
}

const memoWavePropsAreEqual = (prevProps: WaveProps, props: WaveProps) => {
  //Memo not working, still rendering either twice or wave not dispatched
  return false // Boolean(prevProps.active) && !Boolean(props.active) 
}

const MemoWave = React.memo((props: WaveProps) => (
  <Wave
    {...props}
  />
), memoWavePropsAreEqual)

const Node = (props: NodeProps ) => {
  const mobile = useSelector(selectIsMobile)
  const dispatch = useDispatch()
  const { x, y, velocity, id, active, groups, periodicTrigger, activeTrigger } = props 
  const handleDragEnd = (e: any) => 
    dispatch(dragNode({ x: e.target.x(), y: e.target.y(), targetNodeId: id }))
  return (
    <Group
        x={x}
        y={y}
      draggable
      id={id}
      onDragEnd={handleDragEnd}
    >
      <MemoWave 
        id={id}
        active={activeTrigger ? active : undefined}
        activeTrigger={activeTrigger}
        periodicTrigger={periodicTrigger}  
        velocity={velocity}
      />
      <CanvasElement
        active={active}
        nodeId={id}
        groups={groups}
        periodicTrigger={periodicTrigger}
        activeTrigger={activeTrigger}
        width={mobile ? 30 : 50}
        height={mobile ? 30 : 50}
        name='triggerable'
      />
    </Group>
  );
}


export default Node 