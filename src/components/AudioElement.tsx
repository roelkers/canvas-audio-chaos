import { useEffect } from 'react';
import VirtualAudioGraph from 'virtual-audio-graph/dist/VirtualAudioGraph';
import nodeCreators from '../nodeCreators'
import { AudioRecord, AudioConfig } from '../slices/palette';
import { map } from 'ramda';
import { IVirtualAudioNodeGraph } from 'virtual-audio-graph/dist/types';


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