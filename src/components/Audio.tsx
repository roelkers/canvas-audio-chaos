import VirtualAudioGraph from 'virtual-audio-graph/dist/VirtualAudioGraph';
import useAudio from '../hooks/useAudio'

interface AudioProps {
  virtualAudioGraph: VirtualAudioGraph;
}

const Audio = (props: AudioProps) => {
  const { virtualAudioGraph } = props
  useAudio(virtualAudioGraph)
  return null
}


export default Audio 

