import { createNode, biquadFilter } from 'virtual-audio-graph'

export interface SimpleFilterConfig {
  frequency: number,
  resonance: number,
  type: string
}

export default createNode(({
  frequency,
  resonance,
  type,
}) => {
  return {
    0: biquadFilter('output', {
      frequency,
      Q: resonance,
      type
    }, 'input'),
  }
})