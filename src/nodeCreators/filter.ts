import { createNode, biquadFilter } from 'virtual-audio-graph'

export interface FilterConfig {
  gain: number
  startTime: number,
  stopTime: number,
  frequency: number,
  resonance: number,
}

export default createNode(({
  gain: gainValue,
  startTime,
  stopTime,
  frequency,
  resonance,
  type,
  ...rest
}) => {
  const duration = stopTime - startTime
  return {
    0: biquadFilter('output', {
      frequency: [
        ['setValueAtTime', 0, startTime],
        ['linearRampToValueAtTime', gainValue, startTime + duration * 0.15],
        ['setValueAtTime', gainValue, stopTime - duration * 0.25],
        ['linearRampToValueAtTime', 0, stopTime],
      ],
      Q: resonance, type
    }, 'input'),
  }
})