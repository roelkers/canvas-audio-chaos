import React, { useEffect } from 'react';
import VirtualAudioGraph from 'virtual-audio-graph/dist/VirtualAudioGraph';
import osc from '../nodes/osc'
import filter from '../nodes/filter';
import pingPongDelay from '../nodes/pingPongDelay';

interface AudioElementProps {
  virtualAudioGraph: VirtualAudioGraph
  active: boolean
}
  
const Element = (props: AudioElementProps) => {
  const {virtualAudioGraph, active} = props
  const { currentTime } = virtualAudioGraph
  useEffect(() => {
    if(active) {
      virtualAudioGraph.update({
        0: osc(1, {
          frequency: 110,
          gain: 0.2,
          startTime: currentTime,
          stopTime: currentTime + 1,
          type: 'square',
        }),
        1: filter('2', {
          frequency: 0,
          resonance: 30,
          gain: 15000,
          startTime: currentTime,
          stopTime: currentTime + 0.75,
          type: 'lowpass',
        }),
        2: pingPongDelay('output', {
          decay : 350,
          delayTime: 1,
        })
      })
    }
  },[active])

  return null
}


export default Element