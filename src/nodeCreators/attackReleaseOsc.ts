import { createNode, oscillator, gain } from 'virtual-audio-graph'

export interface AttackReleaseOscConfig {
  gain: number;
  attack: number;
  release: number;
  frequency: number;
  startTime: number;
  type: string;
}

const nodeCreator = createNode(({
    gain: gainValue,
    startTime,
    attack,
    release,
    ...rest
  }) => {
    const stopTime = startTime + attack + release
    return {
      0: gain('output', {
        gain: [
          ['setValueAtTime', 0, startTime],
          ['linearRampToValueAtTime', gainValue, startTime + attack ],
          ['linearRampToValueAtTime', 0, stopTime + attack + release],
        ],
      }),
      1: oscillator(0, { startTime, stopTime, ...rest }),
    }
  })

export default nodeCreator