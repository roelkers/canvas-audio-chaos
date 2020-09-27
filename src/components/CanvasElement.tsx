import React from 'react';
import { Rect, Circle, Star, RegularPolygon } from 'react-konva';
import { useSelector, useDispatch } from 'react-redux'
import { focus, selectFocus } from '../slices/canvas';
import { selectGroups, IGroup } from '../slices/groups';
import { map, addIndex, flatten } from 'ramda';
import { setMobileDrawerOpen } from '../slices/app';

interface CanvasElementProps {
  width: number;
  height: number;
  name: string
  nodeId: string;
  periodicTrigger: boolean;
  activeTrigger: boolean;
  active: boolean;
  groups: string[];
}

interface ShapeProps {
  width: number;
  height: number;
  fill: string | undefined;
  name: string
  stroke: string,
  strokeEnabled: boolean
  strokeWidth: number,
  fillLinearGradientColorStops: Array<string | number> | undefined
  onClick: () => void
  onTouchStart: () => void,
  onDblTap : () => void
}

const makeStar = (props: ShapeProps) =>
  <Star
    {...props}
    innerRadius={props.width / 2}
    outerRadius={props.width}
    numPoints={5}
  />

const makeRect = (props: ShapeProps) => <Rect
  {...props}
  fillLinearGradientStartPoint={{ x: 0, y: 0 }}
  fillLinearGradientEndPoint={{ x: props.width, y: props.width }}
/>

const makeTriangle = (props: ShapeProps) =>
  <RegularPolygon
    {...props}
    sides={3}
    radius={props.width / 3 * 2}
    fillLinearGradientStartPoint={{ x: -props.width / 3 * 2, y: 0 }}
    fillLinearGradientEndPoint={{ x: props.width / 3 * 2, y: 0 }}
  />

const makeWedge = (props: ShapeProps) =>
  <RegularPolygon
    {...props}
    sides={6}
    radius={props.width / 7 * 4}
    fillLinearGradientStartPoint={{ x: -props.width / 7 * 4, y: 0 }}
    fillLinearGradientEndPoint={{ x: props.width / 7 * 4, y: 0 }}
  />

const makeCircle = (props: ShapeProps) => < Circle
  {...props}
  radius={props.width / 2}
  fillLinearGradientStartPoint={{ x: -props.width / 2 , y: 0 }}
  fillLinearGradientEndPoint={{ x: props.width / 2,  y: 0 }}
  fillLinearGradientColorStops={[0, 'red', 0.5, 'red', 0.5, 'blue', 1, 'blue']}
/>

const getShape = (periodicTrigger: boolean, activeTrigger: boolean) => (props: ShapeProps) =>
  periodicTrigger && !activeTrigger ? makeWedge(props) :
    !periodicTrigger && activeTrigger ? makeRect(props) :
      periodicTrigger && activeTrigger ? makeTriangle(props) :
  /*!periodicTrigger && !activeTrigger ?*/ makeCircle(props)

const getFillLinearGradientColorStops = (groups: IGroup[], groupsOfNode: string[]) => {
  const denominator = 1 / groupsOfNode.length
  const mapIndex = addIndex(map)
  const colorlists = mapIndex((id, index) => {
    const group = groups.find(gr => gr.id === id) 
    if(! group) return null
    return [ denominator*index, group.fill, denominator*(index+1), group.fill]
    },groupsOfNode)   
  return flatten(colorlists) as Array<number | string>
}

const CanvasElement = (props: CanvasElementProps) => {
  const { name, groups: groupsOfNode, width, height, active, nodeId, periodicTrigger, activeTrigger } = props
  const focussed = useSelector(selectFocus) === nodeId
  const groups = useSelector(selectGroups)
  const fill = active ? '#ff0000' : undefined 
  const dispatch = useDispatch()
  const fillLinearGradientColorStops = active ? undefined : getFillLinearGradientColorStops(groups, groupsOfNode)
  const onDoubleTap = () => {
    dispatch(focus(nodeId)) 
    dispatch(setMobileDrawerOpen(true))
  } 
  const shapeProps: ShapeProps = {
    name,
    width,
    height,
    fill,
    fillLinearGradientColorStops,
    stroke: 'blue',
    strokeEnabled: focussed,
    strokeWidth: 4,
    onClick: () => dispatch(focus(nodeId)),
    onTouchStart: () => dispatch(focus(nodeId)),
    onDblTap: onDoubleTap
    
  }
  return getShape(periodicTrigger, activeTrigger)(shapeProps)
}


export default CanvasElement