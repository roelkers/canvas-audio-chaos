import React, { useRef, useEffect } from 'react'
import { Group, Rect } from "react-konva"
import { useSelector } from 'react-redux'
import { selectPaletteElements } from '../slices/palette'
import Element from './PaletteElement'

const Palette = ({ stage : ref } : { stage : any }) => {
  let width = 0, height = 0, containerX = 0, containerY = 0
  const elements = useSelector(selectPaletteElements)
  const stage = ref.current

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