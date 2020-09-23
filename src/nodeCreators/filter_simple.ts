import { createNode, biquadFilter } from 'virtual-audio-graph'
import { IVirtualAudioNodeParams, IVirtualAudioNodeGraph, Output  } from 'virtual-audio-graph/dist/types'
import CustomVirtualAudioNode from 'virtual-audio-graph/dist/VirtualAudioNodes/CustomVirtualAudioNode';

export interface SimpleFilterConfig {
  frequency: number,
  resonance: number,
  type: string
}

type myCustomVirtualAudioNodeFactory = (_: SimpleFilterConfig) => IVirtualAudioNodeGraph;

const createSimpleFilter = createNode as (node: myCustomVirtualAudioNodeFactory) => (output: Output, params?: IVirtualAudioNodeParams) => CustomVirtualAudioNode;

export default createSimpleFilter(({
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