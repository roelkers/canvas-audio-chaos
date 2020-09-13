import React from 'react'
import { Group, Rect } from "react-konva"
import { useSelector } from 'react-redux'
import { selectPaletteElements } from '../slices/palette'
import Element from './PaletteElement'
import { Layer } from 'konva/types/Layer'

const Palette = ({ stage : ref, layer } : { stage : any, layer: Layer | null | undefined }) => {
  let width = 0, height = 0, containerX = 0, containerY = 0
  const elements = useSelector(selectPaletteElements)
  const stage = ref.current
  const redraw = () => layer?.draw()

  if(stage) {
    width = stage.width() - 50 
    height = 110; 
    containerY = stage.height() - height - 25;
    containerX = (stage.width()- width) / 2; 
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
       elements.map(( elem, index) => {
          const elemX = index * 55 + containerX +5; 

          return (<Element 
              redraw={redraw}
              element={elem}
              x={elemX}
              y={containerY + 5} 
           />)
        })
      }
    </Group>
  )
}

export default Palette