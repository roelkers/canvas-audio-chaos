import { createNode, oscillator, gain } from 'virtual-audio-graph'
import { IVirtualAudioNodeParams, IVirtualAudioNodeGraph, Output } from 'virtual-audio-graph/dist/types'
import CustomVirtualAudioNode from 'virtual-audio-graph/dist/VirtualAudioNodes/CustomVirtualAudioNode';

export interface OscConfig {
  envFrequencyAmount: number;
  frequency: number;
  type: string;
  startTime: number;
  attack: number;
  release: number;
}

type myCustomVirtualAudioNodeFactory = (_: OscConfig) => IVirtualAudioNodeGraph;

const createOsc = createNode as (node: myCustomVirtualAudioNodeFactory) => (output: Output, params?: IVirtualAudioNodeParams) => CustomVirtualAudioNode;

const nodeCreator = createOsc(({
  envFrequencyAmount,
  frequency,
  type,
  startTime,
  attack,
  release
}) => {
  const stopTime = startTime + attack + release
  return {
    1: oscillator('output', {
      frequency: [
        ['setValueAtTime', frequency, startTime],
        ['linearRampToValueAtTime', frequency + envFrequencyAmount, startTime + attack],
        ['linearRampToValueAtTime', frequency, stopTime ],
      ],
      startTime, stopTime, type
    }),
  }
})

export default nodeCreator