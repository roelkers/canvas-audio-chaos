import {
  createNode,
  delay,
  gain,
  stereoPanner,
} from 'virtual-audio-graph'
import { IVirtualAudioNodeParams, IVirtualAudioNodeGraph, Output  } from 'virtual-audio-graph/dist/types'
import CustomVirtualAudioNode from 'virtual-audio-graph/dist/VirtualAudioNodes/CustomVirtualAudioNode';

export interface PingPongConfig {
  decay: number;
  delayTime: number;
}

type myCustomVirtualAudioNodeFactory = (_: PingPongConfig) => IVirtualAudioNodeGraph;

const createPingPongDelay = createNode as (node: myCustomVirtualAudioNodeFactory) => (output: Output, params?: IVirtualAudioNodeParams) => CustomVirtualAudioNode;

export default createPingPongDelay(({
  decay,
  delayTime,
}) => ({
  0: stereoPanner('output', { pan: -1 }),
  1: stereoPanner('output', { pan: 1 }),
  2: delay([1, 5], { delayTime, maxDelayTime: delayTime }),
  3: gain(2, { gain: decay }),
  4: delay([0, 3], { delayTime, maxDelayTime: delayTime }),
  5: gain(4, { gain: decay }, 'input'), // connections will be made here
}))
