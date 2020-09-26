
import React, { RefObject, useRef } from 'react';
import { IPaletteElement } from '../slices/palette';
import CanvasElement from './CanvasElement'
import { Group } from 'react-konva';
import { useDispatch, useSelector } from 'react-redux';
import { createNode } from '../slices/canvas';
import { getShapeName } from '../functions/geometry';
import { Group as GroupType } from 'konva/types/Group'
import { shapeName } from '../functions/geometry'
import { selectIsMobile } from '../slices/app';

interface PaletteDimensions {
    containerX: number,
    containerY: number,
    height: number,
    width: number,
  } 

interface PaletteElementProps {
  element: IPaletteElement,
  index: number,
  paletteDimensions: PaletteDimensions 
  handleDisableClipOfElement: (element: GroupType) => void
  handleEnableClipOfElement: (element: GroupType) => void
}

const shapeOffset = (width: number) => ({
  wedge: [width / 2, width / 2],
  rect: [0, 0],
  triangle: [width / 2, width / 2 + width/6],
  circle: [width / 2, width / 2]
})

const getElementDimensions = (paletteDimensions: PaletteDimensions, index : number, shapeName: shapeName) => {
  const { containerX, containerY, height: containerHeight, width: containerWidth } = paletteDimensions 

  const width = 50;
  const gutter = 10
  const baseX = (index * (width + gutter) + containerX + 5) % containerWidth;
  //This will move the element to the bottom row based on whether the top row is full
  //The second condition is for making sure it will not overlap the first element on row 1
  const baseY = (containerWidth / index -1 >= 60 && baseX > -10 + containerX +5) ? containerY + 5 : containerY + 65
  const offset = shapeOffset(width)[shapeName]
  const x = baseX + offset[0]
  const y = baseY + offset[1]
  
  return { containerWidth, width, gutter, x, y } 
}

const getMobileElementDimensions = (paletteDimensions: PaletteDimensions, index : number, shapeName: shapeName) => {
  const { containerX, containerY, height: containerHeight, width: containerWidth } = paletteDimensions 

  const width = 30;
  const gutter = 5 
  const baseX = (index * (width + gutter) + containerX + 5) % containerWidth;
  //This will move the element to the bottom row based on whether the top row is full
  //The second condition is for making sure it will not overlap the first element on row 1
  const baseY = (
    containerWidth / index -1 >= 35 && 
    baseX > -10 + containerX +5
  ) 
    ? containerY + 5 : containerY + 45
  const offset = shapeOffset(width)[shapeName]
  const x = baseX + offset[0]
  const y = baseY + offset[1]
  
  return { containerWidth, width, gutter, x, y } 
}

const PaletteElement = (props: PaletteElementProps) => {
  const { handleEnableClipOfElement, element, paletteDimensions, index, handleDisableClipOfElement } = props
  const mobile = useSelector(selectIsMobile)
  const { width :containerWidth } = paletteDimensions
  const group = useRef(null) as RefObject<GroupType> | null
  const dispatch = useDispatch()
  const shapeName = getShapeName(element.periodicTrigger, element.activeTrigger)

  const { width, gutter, x, y } = mobile ? 
    getMobileElementDimensions(paletteDimensions, index, shapeName)
   :getElementDimensions(paletteDimensions, index, shapeName)

  const handleDragStart = (e: any) => {
    if(!group || !group.current) return
    handleDisableClipOfElement(group.current)
  }

  const handleDragEnd = (e: any) => {
    if(!group || !group.current) return
    console.log(x, y)
    dispatch(createNode({ ...element, x: e.evt.x, y: e.evt.y }))
    group?.current?.position({ x, y })
    handleEnableClipOfElement(group.current)
  }
  if (index / 2 * (width + gutter) > containerWidth) {
    return null
  }
  return (
    <Group
      x={x}
      y={y}
      ref={group}
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <CanvasElement
        nodeId='none'
        periodicTrigger={element.periodicTrigger}
        activeTrigger={element.activeTrigger}
        soundOnActivate={element.soundOnActivate}
        name='palette'
        width={width}
        height={width}
        active={false}
        groups={element.groups}
      />
    </Group>
  );
}


export default PaletteElement