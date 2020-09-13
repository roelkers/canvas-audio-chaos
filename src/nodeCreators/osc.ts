import { createNode, oscillator, gain } from 'virtual-audio-graph'

export interface OscConfig {
  gain: number;
  stopTime: number
  frequency: number;
  type: string;
}

const nodeCreator = createNode(({
    gain: gainValue,
    startTime,
    stopTime,
    ...rest
  }) => {
    const duration = stopTime - startTime
    return {
      0: gain('output', {
        gain: [
          ['setValueAtTime', 0, startTime],
          ['linearRampToValueAtTime', gainValue, startTime + duration * 0.15],
          ['setValueAtTime', gainValue, stopTime - duration * 0.25],
          ['linearRampToValueAtTime', 0, stopTime],
        ],
      }),
      1: oscillator(0, { startTime, stopTime, ...rest }),
    }
  })

export default nodeCreator