import { createNode, oscillator, gain } from 'virtual-audio-graph'
import { IVirtualAudioNodeParams, IVirtualAudioNodeGraph, Output } from 'virtual-audio-graph/dist/types'
import CustomVirtualAudioNode from 'virtual-audio-graph/dist/VirtualAudioNodes/CustomVirtualAudioNode';

export interface AttackReleaseOscConfig {
  gain: number;
  attack: number;
  release: number;
  frequency: number;
  startTime: number;
  type: string;
}

type myCustomVirtualAudioNodeFactory = (_: AttackReleaseOscConfig) => IVirtualAudioNodeGraph;

const createArOsc = createNode as (node: myCustomVirtualAudioNodeFactory) => (output: Output, params?: IVirtualAudioNodeParams) => CustomVirtualAudioNode;

const nodeCreator = createArOsc(({
  gain: gainValue,
  startTime,
  attack,
  release,
  type,
  frequency
}) => {
  const stopTime = startTime + attack + release
  return {
    0: gain('output', {
      gain: [
        ['setValueAtTime', 0, startTime],
        ['linearRampToValueAtTime', gainValue, startTime + attack],
        ['linearRampToValueAtTime', 0, stopTime],
      ],
    }),
    1: oscillator(0, { startTime, stopTime, type, frequency }),
  }
})

export default nodeCreator

interface arOscSettingsProps {
  config: AttackReleaseOscConfig;
}
