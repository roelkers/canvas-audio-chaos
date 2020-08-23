import React, { useRef, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import { Provider, useSelector } from 'react-redux'
import store from '../store'
import Node from './Node'
import { selectNodes } from '../slices/canvas';
import Palette from './Palette'

const Canvas = () => {
  const [targetColor, setTargetColor] = useState('#0000ff')
  const nodes = useSelector(selectNodes)
  const stage = useRef(null)

  return (
    <Stage ref={stage} width={window.innerWidth} height={window.innerHeight}>
      <Provider store={store} >
      <Layer >
        {
          nodes.map(node => 
          <Node 
            node={node}
          />
          )
        } 
      </Layer>
      <Layer >
        <Palette stage={stage}/>
      </Layer>
      </Provider>
    </Stage>
  );
}

export default Canvas























