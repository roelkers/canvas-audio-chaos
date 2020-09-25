import React, { RefObject, useRef } from 'react'
import { Group, Rect } from "react-konva"
import { useSelector } from 'react-redux'
import { IPaletteElement, selectPaletteElements } from '../slices/palette'
import { Layer } from 'konva/types/Layer'
import { Group as GroupType } from 'konva/types/Group'
import PaletteElement from './PaletteElement'

const Palette = ({ stage : ref, layer } : { stage : any, layer: Layer | null | undefined }) => {
  let width = 0, height = 0, containerX = 0, containerY = 0
  const elements = useSelector(selectPaletteElements)
  const stage = ref.current
  const redraw = () => layer?.draw()
  const clipGroup = useRef(null) as RefObject<GroupType> | null
  const nonClipGroup = useRef(null) as RefObject<GroupType> | null
  
  const handleDisableClipOfElement = (element : GroupType) => {
    if(!nonClipGroup || !nonClipGroup.current) return
    element.moveTo(nonClipGroup.current)
    // redraw()
  }
  const handleEnableClipOfElement = (element: GroupType) => {
    if(!clipGroup || !clipGroup.current) return
    element.moveTo(clipGroup.current) 
    redraw()
  }

  if(stage) {
    const marginLeft = 25
    const marginRight = 300
    width = stage.width() - (marginLeft + marginRight); 
    height = 120; 
    containerY = stage.height() - height - 25;
    containerX = marginLeft 
  }

  return (
    <Group
    >
      <Rect 
        width={width}
        height={height} 
        fill='#fff'
        stroke='#000'
        x={containerX}
        y={containerY} 
      />
    <Group
      ref={clipGroup}
      clip={{
        width: width -10,
        height: height -10, 
        x: containerX +5,
        y: containerY +5,
      }} 
    >
      {
       elements.map(( elem: IPaletteElement, index :number) => {
          return <PaletteElement 
              handleDisableClipOfElement={handleDisableClipOfElement}
              handleEnableClipOfElement={handleEnableClipOfElement}
              element={elem}
              index={index}
              containerX={containerX}
              containerY={containerY} 
              containerWidth={width}
              containerHeight={height}
           />
        })
      }
      </Group>
      <Group ref={nonClipGroup} />
    </Group>
  )
}

export default Palette