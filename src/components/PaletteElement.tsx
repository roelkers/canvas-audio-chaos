
import React, { useRef } from 'react';
import { IPaletteElement } from '../slices/palette';
import CanvasElement from './CanvasElement'
import { Group } from 'react-konva';
import { useDispatch } from 'react-redux';
import { createNode } from '../slices/canvas';
import { head } from 'ramda';



interface PaletteElementProps {
   element: IPaletteElement, 
   index: number,
   containerX: number,
   containerY: number,
   containerWidth: number,
   containerHeight: number,
   redraw: () => void 
}

const shapeOffset = (width: number) => ({
  wedge: [width/2,width/2],
  rect: [0,0],
  triangle : [width/2,width/2 + 7],
  circle: [width/2,width/2]
})

const getShapeName = (periodicTrigger: boolean, activeTrigger: boolean) => 
  periodicTrigger && !activeTrigger ? 'wedge' :
    !periodicTrigger && activeTrigger ? 'rect' :
      periodicTrigger && activeTrigger ? 'triangle' : 
  /*!periodicTrigger && !activeTrigger ?*/ 'circle' 

const PaletteElement = (props: PaletteElementProps ) => {
  const { element, redraw, index, containerX, containerY, containerHeight, containerWidth } = props
  const group : any = useRef(null)
  const dispatch = useDispatch()
  const width = 50;
  const height = 50;

  const shapeName = getShapeName(element.periodicTrigger, element.activeTrigger)
  const baseX = (index * 60 + containerX + 5) % containerWidth; 
  const baseY = (containerWidth / index >= 61) ? containerY + 5 : containerY + 65
  const offset = shapeOffset(width)[shapeName]
  const x = baseX + offset[0]
  const y = baseY + offset[1]
   
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
        width={width}
        height={width}
        fill={'#0f0f0f'}
      />
      </Group>
  );
}


export default PaletteElement