import { createNode, oscillator, gain } from 'virtual-audio-graph'
import { IVirtualAudioNodeParams, IVirtualAudioNodeGraph, Output } from 'virtual-audio-graph/dist/types'
import CustomVirtualAudioNode from 'virtual-audio-graph/dist/VirtualAudioNodes/CustomVirtualAudioNode';

export interface OscConfig {
  envFrequencyAmount: number;
  frequency: number;
  type: string;
  attack: number;
  release: number;
}

interface OscConfigWithStartTime extends OscConfig { startTime: number }

type myCustomVirtualAudioNodeFactory = (_: OscConfigWithStartTime) => IVirtualAudioNodeGraph;

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
      startTime, type
    }),
  }
})

export default nodeCreator