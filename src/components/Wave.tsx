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
  const outerRadius = 1000;
  const duration = 1;
  const velocity = outerRadius / duration / 10000;
  const ringFill = '#ff0000'
 
  let konvaAnim: any = useRef(null)
  useEffect(() => {
    // konvaAnim.current?.stop()
    // circle.current?.scale({ x: 1, y: 1 })
    const layer = circle.current.getLayer()
    konvaAnim.current = new Konva.Animation(
      (frame: any) => {
        const or = (frame.time * velocity) % 1000
        // circle.current.outerRadius = or
        // circle.current.innerRadius = or - 10 
        circle.current.scale({ x: or, y: or })
        const children = layer.find('.triggerable').each((target: any) => {
          const parentGroupId = target.parent.attrs.id
          if(parentGroupId === nodeId) {
            return
          } 
          console.log(target)
          if (isIntersecting(circle.current, target)) {
            dispatch(activateNode({ id: parentGroupId }))
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