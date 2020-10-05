
import React, { RefObject, useRef } from 'react';
import { IPaletteElement } from '../slices/palette';
import CanvasElement from './CanvasElement'
import { Group } from 'react-konva';
import { useDispatch, useSelector } from 'react-redux';
import { createNode } from '../slices/canvas';
import { getShapeName } from '../functions/geometry';
import { Group as GroupType } from 'konva/types/Group'
import { shapeName as IshapeName } from '../functions/geometry'
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
  paletteDimensions: PaletteDimensions,
  intersectsPaletteRect: ({x, y} : { x: number, y: number }) => boolean 
  handleDisableClipOfElement: (element: GroupType) => void
  handleEnableClipOfElement: (element: GroupType) => void
}

const shapeOffset = (width: number) => ({
  wedge: [width / 2, width / 2],
  rect: [0, 0],
  triangle: [width / 2, width / 2 + width/6],
  circle: [width / 2, width / 2]
})

const getElementDimensions = (paletteDimensions: PaletteDimensions, index : number, shapeName: IshapeName) => {
  const { containerX, containerY, width: containerWidth } = paletteDimensions 

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

const getMobileElementDimensions = (paletteDimensions: PaletteDimensions, index : number, shapeName: IshapeName) => {
  const { containerX, containerY, width: containerWidth } = paletteDimensions 

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

const isTouchEvent = (evt: any) : evt is TouchEvent =>
    (evt as TouchEvent).changedTouches !== undefined 

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

  const handleDragEnd = (
    { evt } : { evt : TouchEvent | MouseEvent } 
    ) => {
    if(!group || !group.current) return
    let targetX 
    let targetY 
    if(isTouchEvent(evt)) {
       targetX = evt.changedTouches[0].clientX 
       targetY = evt.changedTouches[0].clientY 
    } else {
       targetX = evt.x
       targetY = evt.y
    }
    group?.current?.position({ x, y })
    handleEnableClipOfElement(group.current)
    if(props.intersectsPaletteRect({ x: targetX, y: targetY})) return

    dispatch(createNode({ ...element, x: targetX, y: targetY }))
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