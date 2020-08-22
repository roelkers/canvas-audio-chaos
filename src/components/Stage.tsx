import React, { Component, useRef, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Group, Ring, Circle, KonvaNodeComponent } from 'react-konva';
import Konva from 'konva';
import { Ring as IRing } from 'konva/types/shapes/Ring';
import { RectConfig as IRect } from 'konva/types/shapes/Rect';
import { ShapeConfig } from 'konva/types/Shape';
import { Provider } from 'react-redux'
import store from '../store'
import Node from './Node'

const Canvas = () => {
  const [targetColor, setTargetColor] = useState('#0000ff')
  const target = useRef(null)
  const blink = () => {
    setTargetColor('#00ff00');
    console.log("blinking")
    setTimeout(() => setTargetColor('#0000ff'), 100)
  }
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Provider store={store} >
      <Layer >
        <Node target={target} blink={blink} />
        <Rect
          ref={target}
          x={500}
          y={500}
          width={50}
          height={200}
          fill={targetColor}
        />
      </Layer>
      </Provider>
    </Stage>
  );
}

export default Canvas























