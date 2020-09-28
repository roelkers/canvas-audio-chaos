import { Ring } from 'react-konva';
import React, { useRef, useEffect } from 'react';
import { isIntersecting } from '../functions/geometry'
import Konva from 'konva'
import { useDispatch } from 'react-redux';
import { activateNode, deactivateNode } from '../slices/canvas';
import { usePrevious } from '../hooks/usePrevious';

export interface WaveProps {
  id: string;
  active: boolean | undefined;
  activeTrigger: boolean;
  periodicTrigger: boolean;
  velocity: number;
}

const Wave = (props: WaveProps) => {
  const { id: nodeId, active, activeTrigger, periodicTrigger, velocity } = props 
  const dispatch = useDispatch()
  const previousActive = usePrevious<boolean>( active )
  let circle: any = useRef(null)
  const ringFill = '#ff0000'
  const initialInnerRadius = 1
  const ringDiameter = 5 
  let konvaAnim: any = useRef(null)

  //Only rerender animation when in inactive state before and 
  //active trigger is enabled
  //This only works though after the 2nd rerender, so the 2nd rerender will still happen... 
  const activeDependency = activeTrigger && (previousActive === false || previousActive === undefined)

  let dependencies :any = [dispatch, nodeId, velocity, nodeId, periodicTrigger, activeDependency]
  useEffect(() => {
    circle.current?.show()
    const layer = circle.current.getLayer()
    const stage = layer.getStage()
    const stageWidth = stage.getWidth()
    const stageHeight = stage.getHeight()
    const maxRadius = stageWidth > stageHeight ? stageWidth : stageHeight
    const duration = maxRadius / velocity
    const stop = () => konvaAnim.current?.stop() && circle.current?.hide() 

    let intersections: string[] = []
    konvaAnim.current = new Konva.Animation(
      (frame: any) => {
        if(!periodicTrigger && frame.time / 1000 > duration) {
          return stop()
        }
        const scale = (frame.time / 1000 * velocity) % maxRadius
        const currentInnerRadius = initialInnerRadius * scale
        circle.current.attrs.innerRadius = currentInnerRadius
        circle.current.attrs.outerRadius = currentInnerRadius + ringDiameter

        layer.find('.triggerable').each((target: any) => {
          const parentGroupId = target.parent.attrs.id
          if (parentGroupId === nodeId) {
            return
          }
          if (isIntersecting(circle.current, target)
             && !intersections.includes(parentGroupId) 
          ) {
            intersections.push(parentGroupId)
            dispatch(activateNode({ targetNodeId: parentGroupId, sourceNodeId: nodeId }))
          } else if (intersections.includes(parentGroupId)) {
            intersections = intersections.filter(n => n !== parentGroupId)
            dispatch(deactivateNode({ targetNodeId: parentGroupId }))
          }
        })
      },
      layer)
    konvaAnim.current.start()
    return () => {
      konvaAnim.current?.stop() 
      for(const intersection of intersections) {
         dispatch(deactivateNode({ targetNodeId: intersection }))
      }
    }
  }, dependencies )

  return (
    <Ring
      ref={circle}
      fill={ringFill}
      innerRadius={1}
      outerRadius={1.05}
      x={0}
      y={0}
    />
  )
}
export default Wave