import { createNode, gain } from 'virtual-audio-graph'
import { IVirtualAudioNodeParams, IVirtualAudioNodeGraph, Output  } from 'virtual-audio-graph/dist/types'
import CustomVirtualAudioNode from 'virtual-audio-graph/dist/VirtualAudioNodes/CustomVirtualAudioNode';

export interface arEnvelopeConfig {
  gain: number;
  attack: number;
  release: number;
}

interface arEnvelopeConfigWithStartTime extends arEnvelopeConfig { startTime: number }

type myCustomVirtualAudioNodeFactory = (_: arEnvelopeConfigWithStartTime) => IVirtualAudioNodeGraph;

const createArEnvelope = createNode as (node: myCustomVirtualAudioNodeFactory) => (output: Output, params?: IVirtualAudioNodeParams) => CustomVirtualAudioNode;

const nodeCreator = createArEnvelope(({
    gain: gainValue,
    startTime,
    attack,
    release,
  } : arEnvelopeConfigWithStartTime) => {
    const stopTime = startTime + attack + release
    return {
      0: gain('output', {
        gain: [
          ['setValueAtTime', 0, startTime],
          ['linearRampToValueAtTime', gainValue, startTime + attack ],
          ['linearRampToValueAtTime', 0, stopTime],
        ],
      }, 'input'),
    }
  })

export default nodeCreator
