import React, { useRef, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import { Provider, useSelector, useDispatch } from 'react-redux'
import store from '../store'
import Node from './Node'
import { selectNodes, initialCanvasHover } from '../slices/canvas';
import Palette from './Palette'

const Canvas = () => {
  
  const [targetColor, setTargetColor] = useState('#0000ff')
  const nodes = useSelector(selectNodes)
  const dispatch = useDispatch()
  const stage = useRef(null)

  return (
    <Stage ref={stage} width={window.innerWidth} height={window.innerHeight} onMouseOver={() => dispatch(initialCanvasHover(null))}>
      <Provider store={store} >
        <Layer >
          {
            nodes.map(node =>
              <Node
                key={node.id}
                node={node}
              />
            )
          }
        </Layer>
        <Layer >
          <Palette stage={stage} />
        </Layer>
      </Provider>
    </Stage>
  );
}

export default Canvas 























