import React, { RefObject, useRef } from 'react'
import { Group, Rect } from "react-konva"
import { useSelector } from 'react-redux'
import { IPaletteElement, selectPaletteElements } from '../slices/palette'
import { Layer } from 'konva/types/Layer'
import { Group as GroupType } from 'konva/types/Group'
import PaletteElement from './PaletteElement'
import { selectIsMobile } from '../slices/app'

const getDimensions = (stage: any) => {
  if(! stage) {
    return { width: 0, height: 0, containerX : 0, containerY : 0 }
  }
  const marginLeft = 25
  const asdf = 300
  const marginRight = asdf
  const width = stage.width() - (marginLeft + marginRight);
  const height = 120;
  const containerY = stage.height() - height - 25;
  const containerX = marginLeft
  return {
    width,
    height,
    containerX,
    containerY
  }
}

const getMobileDimensions = (stage: any) => {
  if(! stage) {
    return { width: 0, height: 0, containerX : 0, containerY : 0 }
  }
  const marginLeft = 15
  const marginRight = 15 
  const width = stage.width() - (marginLeft + marginRight);
  const height = 80;
  const containerY = stage.height() - height - 15;
  const containerX = marginLeft
  return {
    width,
    height,
    containerX,
    containerY
  }
}


const Palette = ({ stage: ref, layer }: { stage: any, layer: Layer | null | undefined }) => {
  const elements = useSelector(selectPaletteElements)
  const mobile = useSelector(selectIsMobile)
  const stage = ref.current
  const redraw = () => layer?.draw()
  const clipGroup = useRef(null) as RefObject<GroupType> | null
  const nonClipGroup = useRef(null) as RefObject<GroupType> | null

  const handleDisableClipOfElement = (element: GroupType) => {
    if (!nonClipGroup || !nonClipGroup.current) return
    element.moveTo(nonClipGroup.current)
    // redraw()
  }
  const handleEnableClipOfElement = (element: GroupType) => {
    if (!clipGroup || !clipGroup.current) return
    element.moveTo(clipGroup.current)
    redraw()
  }

  const dimensions = mobile ? getMobileDimensions(stage) : getDimensions(stage)
  const { containerX, containerY , width, height } = dimensions

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
          width: width - 10,
          height: height - 10,
          x: containerX + 5,
          y: containerY + 5,
        }}
      >
        {
          elements.map((elem: IPaletteElement, index: number) => {
            return <PaletteElement
              key={index}
              handleDisableClipOfElement={handleDisableClipOfElement}
              handleEnableClipOfElement={handleEnableClipOfElement}
              element={elem}
              index={index}
              paletteDimensions={dimensions}
            />
          })
        }
      </Group>
      <Group ref={nonClipGroup} />
    </Group>
  )
}

export default Palette