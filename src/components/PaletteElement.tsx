
import React, { useRef } from 'react';
import { IPaletteElement } from '../slices/palette';
import CanvasElement from './CanvasElement'
import { Group } from 'react-konva';
import { useDispatch } from 'react-redux';
import { createNode } from '../slices/canvas';

const PaletteElement = ({ element, x, y, redraw }: { element: IPaletteElement, x: number, y: number, redraw: () => void }) => {
  const group : any = useRef(null)
  const dispatch = useDispatch()

  const handleDragEnd = (e: any) => {
    if(group.current === null) return 
    dispatch(createNode({ ...element, x: e.evt.x, y: e.evt.y }))
    group.current.position({ x, y})  
    redraw()
  }
  return (
    <Group
      x={x}
      y={y}
      ref={group}
      draggable
      onDragEnd={handleDragEnd}
    >
      <CanvasElement
        nodeId='none'
        periodicTrigger={element.periodicTrigger}
        activeTrigger={element.activeTrigger}
        soundOnActivate={element.soundOnActivate}
        name='palette'
        width={50}
        height={50}
        fill={'#0f0f0f'}
      />
      </Group>
  );
}


export default PaletteElement