import React, { useRef, useState } from 'react';
import { Stage, Layer } from 'react-konva';
import { Provider, useSelector } from 'react-redux'
import store from '../store'
import Node from './Node'
import { selectNodes } from '../slices/canvas';
import Palette from './Palette'
import VirtualAudioGraph from 'virtual-audio-graph/dist/VirtualAudioGraph';

const Canvas = ({ virtualAudioGraph }: { virtualAudioGraph: VirtualAudioGraph}) => {
  
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
                key={node.id}
                node={node}
                virtualAudioGraph={virtualAudioGraph}
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























