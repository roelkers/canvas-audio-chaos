import React from 'react';
import { Rect, Circle, Star, RegularPolygon } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux'
import { focusNode, selectFocussedNodeId } from '../slices/canvas';

interface CanvasElementProps {
  width: number;
  height: number;
  fill: string;
  name: string
  nodeId: string;
  periodicTrigger: boolean;
  activeTrigger: boolean;
  soundOnActivate: boolean;
}

interface ShapeProps {
  width: number;
  height: number;
  fill: string;
  name: string
  stroke: string,
  strokeEnabled: boolean
  strokeWidth: number,
  onClick: () => void
  onTouchStart: () => void
}

const makeStar = (props: ShapeProps) =>
  <Star
    {...props}
    innerRadius={props.width / 2}
    outerRadius={props.width}
    numPoints={5}
  />

const makeRect = (props: ShapeProps) => <Rect {...props} />

const makeTriangle = (props: ShapeProps) => 
  <RegularPolygon
    {...props} 
    sides={3}
    radius={props.width/3*2}
  />

const makeWedge = (props: ShapeProps) => 
  <RegularPolygon
    {...props} 
    sides={6}
    radius={props.width/5*3}
  />

const makeCircle = (props: ShapeProps) => <Circle {...props} radius={props.width/2}/>

const getShape = (periodicTrigger: boolean, activeTrigger: boolean) => (props: ShapeProps) =>
  periodicTrigger && !activeTrigger ? makeWedge(props) :
    !periodicTrigger && activeTrigger ? makeRect(props) :
      periodicTrigger && activeTrigger ? makeTriangle(props): 
  /*!periodicTrigger && !activeTrigger ?*/ makeCircle(props)

const CanvasElement = (props: CanvasElementProps) => {
  const { name, width, height, fill, nodeId, periodicTrigger, activeTrigger } = props
  const focussed = useSelector(selectFocussedNodeId) === nodeId
  const dispatch = useDispatch()
  const shapeProps : ShapeProps = {
    name,
    width,
    height,
    fill,
    stroke: 'blue',
    strokeEnabled: focussed,
    strokeWidth: 4,
    onClick: () => dispatch(focusNode(nodeId)),
    onTouchStart: () => dispatch(focusNode(nodeId))
  }
  return getShape(periodicTrigger, activeTrigger)(shapeProps)
}


export default CanvasElement