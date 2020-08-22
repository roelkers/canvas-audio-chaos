import React, { Component, useRef, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Group, Ring, Circle, KonvaNodeComponent } from 'react-konva';
import Konva from 'konva';
import { euclideanDistance2D } from '../functions/geometry'
import { useSelector, useDispatch } from 'react-redux'
import { createNode } from '../slices/nodes';
import { isIntersecting } from '../functions/geometry'

const DIST_TOL = 5

const Node = ({ blink, target } : any) => {
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
      console.log(circle.current)
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

  const nodes = useSelector(state => state)
  const dispatch = useDispatch()
    console.log(nodes)
  useEffect(() => {
    dispatch(createNode(1)) 
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
      <Rect
        width={50}
        height={50}
        fill="green"
      />
    </Group>
  );
}


export default Node 