import { createNode } from 'virtual-audio-graph'
import nodeCreators from '../nodeCreators';
import { map  } from 'ramda';
import { AudioConfig } from '../slices/palette';
import CustomVirtualAudioNode from 'virtual-audio-graph/dist/VirtualAudioNodes/CustomVirtualAudioNode';

const audioMapper
  = (startTime: number, scale : string[]) => (audioConfig: AudioConfig) => {
    const nodeCreatorName = audioConfig.nodeCreator
    return nodeCreators[nodeCreatorName](
      audioConfig.output,
      {
        ...audioConfig.params,
        startTime,
        scale
      }
    )
  }
 
 
const nodeCreator = createNode(({
  startTime,
  audio,
  scale
  }) => {
    return map(audioMapper(startTime,scale), audio as AudioConfig[]) as Record<number,CustomVirtualAudioNode>
  })

export default nodeCreator