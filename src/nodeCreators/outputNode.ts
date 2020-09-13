import { createNode } from 'virtual-audio-graph'
import nodeCreators from '../nodeCreators';
import { map  } from 'ramda';
import { AudioConfig } from '../slices/palette';
import CustomVirtualAudioNode from 'virtual-audio-graph/dist/VirtualAudioNodes/CustomVirtualAudioNode';

const audioMapper
  = (startTime: number) => (audioConfig: AudioConfig) => {
    const nodeCreatorName = audioConfig.nodeCreator
    return nodeCreators[nodeCreatorName](
      audioConfig.output,
      {
        ...audioConfig.params,
        startTime
      }
    )
  }
 
 
const nodeCreator = createNode(({
  startTime,
  audio,
  }) => {
    return map(audioMapper(startTime), audio as AudioConfig[]) as Record<number,CustomVirtualAudioNode>
  })

export default nodeCreator