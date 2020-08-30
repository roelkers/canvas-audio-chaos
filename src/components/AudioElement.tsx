import React, { useEffect } from 'react';
import VirtualAudioGraph from 'virtual-audio-graph/dist/VirtualAudioGraph';
import { gain, oscillator } from 'virtual-audio-graph'

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
      0: gain('output', { gain: 0.5 }),
      1: oscillator(0, { frequency: 554.365, stopTime: currentTime + 0.1 }),
    })
    }
  },[active])

  return null
}


export default Element