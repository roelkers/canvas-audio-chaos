import { Ring } from 'react-konva';
import React, { useRef, useEffect } from 'react';
import { isIntersecting } from '../functions/geometry'
import Konva from 'konva'
import { useDispatch, useSelector } from 'react-redux';
import { activateNode, deactivateNode, selectNodes } from '../slices/canvas';

const Wave = ({ nodeId }: {nodeId: string}) => {
  const dispatch = useDispatch()
  const nodes = useSelector(selectNodes)
  let circle: any = useRef(null)
  const ringFill = '#ff0000'
  const initialInnerRadius = 1 
  const ringDiameter = 5 
  
  let konvaAnim: any = useRef(null)
  useEffect(() => {
    // konvaAnim.current?.stop()
    // circle.current?.scale({ x: 1, y: 1 })
    const layer = circle.current.getLayer()
    const stage = layer.getStage()
    const stageWidth = stage.getWidth()
    const stageHeight = stage.getHeight()
    const maxRadius = stageWidth > stageHeight ? stageWidth : stageHeight
    const duration = 5;
    const velocity = maxRadius / duration;

    konvaAnim.current = new Konva.Animation(
      (frame: any) => {
        const scale = (frame.time/1000 * velocity) % maxRadius 
        // circle.current.outerRadius = or
        // circle.current.innerRadius = or - 10 
        const currentInnerRadius = initialInnerRadius * scale 
        circle.current.attrs.innerRadius = currentInnerRadius
        circle.current.attrs.outerRadius = currentInnerRadius + ringDiameter 

        layer.find('.triggerable').each((target: any) => {
          const parentGroupId = target.parent.attrs.id
          if(parentGroupId === nodeId) {
            return
          } 
          if (isIntersecting(circle.current, target)) {
            dispatch(activateNode({ id: parentGroupId }))
            console.log("is active")
            setTimeout(() => { 
              console.log("deactive")
              dispatch(deactivateNode({ id: parentGroupId }))
            
            }, 100)
          }
        })
      },
      layer)
    konvaAnim.current.start()
    return () => konvaAnim.current?.stop()
  }, [])

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