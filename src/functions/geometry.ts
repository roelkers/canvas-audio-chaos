import { Ring as IRing } from 'konva/types/shapes/Ring';
import { ShapeConfig } from 'konva/types/Shape';

export const euclideanDistance2D = (elemX :number , elemY: number, targetX:number, targetY:number) =>
  Math.sqrt(Math.pow(elemX - targetX,2) + Math.pow(elemY - targetY, 2))

export const isIntersecting = (ring: IRing, elem: ShapeConfig) => {
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