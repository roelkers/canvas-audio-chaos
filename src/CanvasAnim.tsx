import React, { Component, useRef, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Group, Ring, Circle, KonvaNodeComponent } from 'react-konva';
import Konva from 'konva';
import { Ring as IRing } from 'konva/types/shapes/Ring';
import { RectConfig as IRect } from 'konva/types/shapes/Rect';
import { ShapeConfig } from 'konva/types/Shape';

const DIST_TOL = 5

const euclideanDistance2D = (elemX :number , elemY: number, targetX:number, targetY:number) =>
  Math.sqrt(Math.pow(elemX - targetX,2) + Math.pow(elemY - targetY, 2))


const isIntersecting = (ring: IRing, elem: ShapeConfig) => {
  // console.log(ring)
  const { innerRadius, outerRadius, scaleX, scaleY }  = ring.attrs 
  const sInnerRadius = scaleX* innerRadius
  const sOuterRadius = scaleX* outerRadius 
  const clientRect = elem.getClientRect()
  const pointX = clientRect.x + clientRect.width / 2  
  const pointY = clientRect.y + clientRect.height / 2 
  const ringX = ring.parent?._lastPos?.x ?? 0 
  const ringY = ring.parent?._lastPos?.y ?? 0 
  const dist = euclideanDistance2D(pointX, pointY, ringX, ringY)
  return (
    dist  > sInnerRadius  &&
    dist  < sOuterRadius 
  )
}

const MyRect = ({ blink, target } : any) => {
  let circle: any = useRef(null)
  let konvaAnim: any = useRef(null)
  const group : any = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [ringFill, setRingFill] = useState('#ff0000')
  const outerRadius = 1000;
  const innerRadius = outerRadius - 100;
  const duration = 1;
  const distance = 500;
  const velocity = outerRadius/duration/10000;

  useEffect(() => {
    // konvaAnim.current?.stop()
    // circle.current?.scale({ x: 1, y: 1 })
    konvaAnim.current = new Konva.Animation(
    (frame :any) => {
        const or = (frame.time * velocity) % 1000 
        // circle.current.outerRadius = or
        // circle.current.innerRadius = or - 10 
        circle.current.scale({ x: or, y: or })
        if(isIntersecting(circle.current, target.current)) {
          // console.log("is")
          blink()
        }  
    },
    circle.current.getLayer())
    konvaAnim.current.start()
    return () => konvaAnim.current?.stop()
  },[])

  return (
    <Group
      draggable
      ref={group}
    >
      <Ring
        ref={circle}
        fill={ringFill}
        innerRadius={1.95}
        outerRadius={2}
        x={0}
        y={0}
      />
      {/* <Circle ref={circle} fill={ringFill} radius={1} /> */}
      <Rect
        width={50}
        height={50}
        fill="green"
      />
    </Group>
  );
}

const App = () => {
  const [targetColor, setTargetColor] = useState('#0000ff')
  const target = useRef(null)
  const blink = () => {
    setTargetColor('#00ff00');
    console.log("blinking")
    setTimeout(() => setTargetColor('#0000ff'), 100)
  }
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer >
        <MyRect target={target} blink={blink} />
        <Rect
          ref={target}
          x={500}
          y={500}
          width={50}
          height={200}
          fill={targetColor}
        />
      </Layer>
    </Stage>
  );
}

export default App