import { createNode, gain } from 'virtual-audio-graph'
import nodeCreators from '../nodeCreators';
import { map, pipe, filter, prop, reduce } from 'ramda';
import { AudioRecord, AudioConfig } from '../slices/palette';
import { CustomVirtualAudioNodeFactory } from 'virtual-audio-graph/dist/types';
import CustomVirtualAudioNode from 'virtual-audio-graph/dist/VirtualAudioNodes/CustomVirtualAudioNode';

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
 
 
const nodeCreator = createNode(({
  currentTime,
  audio,
  }) => {
    // console.log(currentTime)
    const audioNodes = map(audioMapper(currentTime), audio as AudioConfig[]) as Record<number,CustomVirtualAudioNode>
    // console.log(audioNodes)
    return audioNodes 
  })

export default nodeCreator