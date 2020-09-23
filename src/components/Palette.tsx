import React from 'react'
import { Group, Rect } from "react-konva"
import { useSelector } from 'react-redux'
import { IPaletteElement, selectPaletteElements } from '../slices/palette'
import Element from './PaletteElement'
import { Layer } from 'konva/types/Layer'
import PaletteElement from './PaletteElement'

const Palette = ({ stage : ref, layer } : { stage : any, layer: Layer | null | undefined }) => {
  let width = 0, height = 0, containerX = 0, containerY = 0
  const elements = useSelector(selectPaletteElements)
  const stage = ref.current
  const redraw = () => layer?.draw()

  if(stage) {
    const marginLeft = 25
    const marginRight = 300
    width = stage.width() - (marginLeft + marginRight); 
    height = 120; 
    containerY = stage.height() - height - 25;
    containerX = marginLeft 
  }

  return (
    <Group>
      <Rect 
        width={width}
        height={height} 
        fill='#fff'
        stroke='#000'
        x={containerX}
        y={containerY} 
      />
      {
       elements.map(( elem: IPaletteElement, index :number) => {
          return <PaletteElement 
              redraw={redraw}
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
  )
}

export default Palette