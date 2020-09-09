import VirtualAudioGraph from 'virtual-audio-graph/dist/VirtualAudioGraph';
import { map, pipe, filter, prop, reduce } from 'ramda';
import { IVirtualAudioNodeGraph } from 'virtual-audio-graph/dist/types';
import { INode, setNodeStartTime } from '../slices/canvas';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNodes } from '../slices/canvas';
import outputNode from '../nodeCreators/outputNode'

const filterInactiveNodesWithoutStartTime = (node : INode) => node.startTime !== null || node.active === true 

const useAudio = (virtualAudioGraph: VirtualAudioGraph) => {
  const nodes = useSelector(selectNodes)
  const dispatch = useDispatch()
  useEffect(() => {
    const { currentTime } = virtualAudioGraph
    for(const node of nodes) {
      if(node.active && node.startTime === null) {
        dispatch(setNodeStartTime({ startTime: currentTime, nodeId: node.id }))
      }
      if(node.startTime) {

      }
    }
  },[virtualAudioGraph, nodes])
  useEffect(() => {
      const { currentTime } = virtualAudioGraph
      const filteredNodes = filter(filterInactiveNodesWithoutStartTime)(nodes); 
      const audioNodes = map( prop('audio'))(filteredNodes)
      const update = audioNodes.reduce((acc, audio, i) => Object.assign(acc, { [i]: outputNode('output', { audio, currentTime }) }), {}) as unknown as IVirtualAudioNodeGraph
      // const update = { 
      //   0: osc('output', {
      //     frequency: 110,
      //     gain: 0.2,
      //     startTime: currentTime,
      //     stopTime: currentTime + 1,
      //     type: 'square',
      //   }),
      //   1: osc('output', {
      //     frequency: 110,
      //     gain: 0.2,
      //     startTime: currentTime,
      //     stopTime: currentTime + 1,
      //     type: 'square',
      //   })
      // }
      // const mapFunction = audioMapper(currentTime) 
      // const update = map(mapFunction, audio as AudioConfig[]) as unknown as IVirtualAudioNodeGraph
      virtualAudioGraph.update(update)
  },[virtualAudioGraph, nodes] )
} 

export default useAudio