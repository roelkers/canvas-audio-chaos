
import React from 'react';
import { IPaletteElement } from '../slices/palette';
import CanvasElement from './CanvasElement'
import { Group } from 'react-konva';

const Element = ({ element, x, y }: { element: IPaletteElement, x: number, y: number }) => {

  return (
    <Group
      x={x}
      y={y} 
    >
      <CanvasElement
        nodeId='none'
        name='palette'
        width={50}
        height={50}
        fill={'#0f0f0f'}
      />
      </Group>
  );
}


export default Element