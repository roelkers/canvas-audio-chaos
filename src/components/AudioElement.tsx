import React, { useEffect } from 'react';
import VirtualAudioGraph from 'virtual-audio-graph/dist/VirtualAudioGraph';
import IVirtualAudioGraph from 'virtual-audio-graph/dist/VirtualAudioGraph';
import nodeCreators from '../nodeCreators'
import { AudioRecord, AudioConfig } from '../slices/palette';
import { map } from 'ramda';
import { IVirtualAudioNodeGraph } from 'virtual-audio-graph/dist/types';
import osc from '../nodeCreators/osc'


interface AudioElementProps {
  virtualAudioGraph: VirtualAudioGraph
  active: boolean,
  audio: AudioRecord
}

const audioMapper
  = (currentTime: number) => (audioConfig: AudioConfig) => {
    const nodeCreatorName = audioConfig.nodeCreator
    return nodeCreators[nodeCreatorName](
      audioConfig.output,
      {
        ...audioConfig.params,
        startTime: currentTime,
      }
    )
  }

const Element = (props: AudioElementProps) => {
  const { virtualAudioGraph, active, audio } = props
  const { currentTime } = virtualAudioGraph
  useEffect(() => {
    if (active) {
      const mapFunction = audioMapper(currentTime) 
      const update = map(mapFunction, audio as AudioConfig[]) as unknown as IVirtualAudioNodeGraph
      virtualAudioGraph.update(update)
    }
  }, [active])

  return null
}


export default Element


  // useEffect(() => {
  //   if(active) {
  //     virtualAudioGraph.update({
  //       0: osc(1, {
  //         frequency: 110,
  //         gain: 0.2,
  //         startTime: currentTime,
  //         stopTime: currentTime + 1,
  //         type: 'square',
  //       }),
  //       1: filter('2', {
  //         frequency: 0,
  //         resonance: 30,
  //         gain: 15000,
  //         startTime: currentTime,
  //         stopTime: currentTime + 0.75,
  //         type: 'lowpass',
  //       }),
  //       2: pingPongDelay('output', {
  //         decay : 350,
  //         delayTime: 1,
  //       })
  //     })
  //   }
  // },[active])