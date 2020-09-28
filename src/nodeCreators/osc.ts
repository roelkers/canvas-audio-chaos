import { Note } from '@tonaljs/tonal';
import { last } from 'ramda';
import { createNode, oscillator } from 'virtual-audio-graph'
import { IVirtualAudioNodeParams, IVirtualAudioNodeGraph, Output } from 'virtual-audio-graph/dist/types'
import CustomVirtualAudioNode from 'virtual-audio-graph/dist/VirtualAudioNodes/CustomVirtualAudioNode';
import { EnhancedConfig } from '.';

export interface OscConfig {
  envFrequencyAmount: number;
  scaleNoteIndex: number;
  octave: number,
  type: string;
  attack: number;
  release: number;
}


type myCustomVirtualAudioNodeFactory = (_: EnhancedConfig<OscConfig>) => IVirtualAudioNodeGraph;

const createOsc = createNode as (node: myCustomVirtualAudioNodeFactory) => (output: Output, params?: IVirtualAudioNodeParams) => CustomVirtualAudioNode;

const nodeCreator = createOsc(({
  envFrequencyAmount,
  scaleNoteIndex,
  type,
  startTime,
  attack,
  release,
  scale,
  octave
}) => {
  const note = scale[scaleNoteIndex] || last(scale) as string
  const frequency = Note.freq(`${note}${octave}`) as number
  const stopTime = startTime + attack + release
  return {
    1: oscillator('output', {
      frequency: [
        ['setValueAtTime', frequency, startTime],
        ['linearRampToValueAtTime', frequency + envFrequencyAmount, startTime + attack],
        ['linearRampToValueAtTime', frequency, stopTime],
      ],
      startTime, type
    }),
  }
})

export default nodeCreator