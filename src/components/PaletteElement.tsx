
import React, { RefObject, useRef } from 'react';
import { IPaletteElement } from '../slices/palette';
import CanvasElement from './CanvasElement'
import { Group } from 'react-konva';
import { useDispatch } from 'react-redux';
import { createNode } from '../slices/canvas';
import { getShapeName } from '../functions/geometry';
import { Group as GroupType } from 'konva/types/Group'

interface PaletteElementProps {
  element: IPaletteElement,
  index: number,
  containerX: number,
  containerY: number,
  containerWidth: number,
  containerHeight: number,
  handleDisableClipOfElement: (element: GroupType) => void
  handleEnableClipOfElement: (element: GroupType) => void
}

const shapeOffset = (width: number) => ({
  wedge: [width / 2, width / 2],
  rect: [0, 0],
  triangle: [width / 2, width / 2 + 7],
  circle: [width / 2, width / 2]
})

const PaletteElement = (props: PaletteElementProps) => {
  const { element, index, containerX, containerY,
    containerHeight, containerWidth, handleDisableClipOfElement,
    handleEnableClipOfElement } = props
  const group = useRef(null) as RefObject<GroupType> | null
  const dispatch = useDispatch()
  const width = 50;
  const gutter = 10

  const shapeName = getShapeName(element.periodicTrigger, element.activeTrigger)
  const baseX = (index * (width + gutter) + containerX + 5) % containerWidth;
  //This will move the element to the bottom row based on whether the top row is full
  //The second condition is for making sure it will not overlap the first element on row 1
  const baseY = (containerWidth / index -1 >= 60 && baseX > -10 + containerX +5) ? containerY + 5 : containerY + 65
  const offset = shapeOffset(width)[shapeName]
  const x = baseX + offset[0]
  const y = baseY + offset[1]

  const handleDragStart = (e: any) => {
    if(!group || !group.current) return
    handleDisableClipOfElement(group.current)
  }

  const handleDragEnd = (e: any) => {
    if(!group || !group.current) return
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