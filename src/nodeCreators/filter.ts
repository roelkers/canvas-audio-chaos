import { createNode, biquadFilter } from 'virtual-audio-graph'
import { IVirtualAudioNodeParams, IVirtualAudioNodeGraph, Output  } from 'virtual-audio-graph/dist/types'
import CustomVirtualAudioNode from 'virtual-audio-graph/dist/VirtualAudioNodes/CustomVirtualAudioNode';

export interface FilterConfig {
  envAmount: number
  startTime: number,
  frequency: number,
  resonance: number,
  attack: number,
  release: number,
  type: string
}

type myCustomVirtualAudioNodeFactory = (_: FilterConfig) => IVirtualAudioNodeGraph;

const createFilter = createNode as (node: myCustomVirtualAudioNodeFactory) => (output: Output, params?: IVirtualAudioNodeParams) => CustomVirtualAudioNode;

export default createFilter(({
  envAmount,
  startTime,
  frequency,
  attack,
  release,
  resonance,
  type,
}) => {
  const stopTime = startTime + attack + release
  return {
    0: biquadFilter('output', {
      frequency: [
        ['setValueAtTime', frequency, startTime],
        ['linearRampToValueAtTime', frequency + envAmount, startTime + attack ],
        ['linearRampToValueAtTime', 0, frequency, stopTime],
      ],
      Q: resonance, type
    }, 'input'),
  }
})