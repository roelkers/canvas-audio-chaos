import { Ring as IRing } from 'konva/types/shapes/Ring';
import { ShapeConfig } from 'konva/types/Shape';

export const euclideanDistance2D = (elemX :number , elemY: number, targetX:number, targetY:number) =>
  Math.sqrt(Math.pow(elemX - targetX,2) + Math.pow(elemY - targetY, 2))

export const isIntersecting = (ring: IRing, elem: ShapeConfig) => {
  const { innerRadius, outerRadius }  = ring.attrs 
  const clientRect = elem.getClientRect()
  const pointX = elem.parent.attrs.x + clientRect.width / 2  
  const pointY = elem.parent.attrs.y + clientRect.height / 2 
  const ringX = ring.parent?.attrs.x ?? 0 
  const ringY = ring.parent?.attrs.y ?? 0 
  const dist = euclideanDistance2D(pointX, pointY, ringX, ringY)
  return (
    dist  > innerRadius  &&
    dist  < outerRadius 
  )
}