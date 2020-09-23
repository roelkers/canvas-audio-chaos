import { createNode, gain } from 'virtual-audio-graph'
import { IVirtualAudioNodeParams, IVirtualAudioNodeGraph, Output  } from 'virtual-audio-graph/dist/types'
import CustomVirtualAudioNode from 'virtual-audio-graph/dist/VirtualAudioNodes/CustomVirtualAudioNode';

export interface outputGainConfig {
  gain: number;
}

type myCustomVirtualAudioNodeFactory = (_: outputGainConfig) => IVirtualAudioNodeGraph;

const createOutputGain = createNode as (node: myCustomVirtualAudioNodeFactory) => (output: Output, params?: IVirtualAudioNodeParams) => CustomVirtualAudioNode;

const nodeCreator = createOutputGain(({
    gain: gainValue,
  }) => {
    return {
      0: gain('output', { gainValue }, 'input'),
    }
  })

export default nodeCreator