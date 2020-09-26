import React, { useRef, RefObject } from 'react';
import { Stage, Layer } from 'react-konva';
import { Provider, useSelector, useDispatch } from 'react-redux'
import store from '../store'
import Node from './Node'
import { selectNodes, initialCanvasHover } from '../slices/canvas';
import Palette from './Palette'
import { Layer as LayerType } from 'konva/types/Layer';
import { selectIsMobile } from '../slices/app';

const Canvas = () => {
  
  const nodes = useSelector(selectNodes)
  const dispatch = useDispatch()
  const stage = useRef(null)
  const paletteLayer = useRef(null) as RefObject<LayerType> | null
  const mobile = useSelector(selectIsMobile)  

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
        <Layer ref={paletteLayer}>
          <Palette layer={paletteLayer?.current} stage={stage} />
        </Layer>
      </Provider>
    </Stage>
  );
}

export default Canvas 























