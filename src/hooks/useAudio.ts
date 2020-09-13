import VirtualAudioGraph from 'virtual-audio-graph/dist/VirtualAudioGraph';
import { map, filter, prop } from 'ramda';
import { IVirtualAudioNodeGraph } from 'virtual-audio-graph/dist/types';
import { INode, setNodeStartTime, selectInitialCanvasHover } from '../slices/canvas';
import { useEffect, useRef, MutableRefObject } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNodes } from '../slices/canvas';
import outputNode from '../nodeCreators/outputNode'
import createVirtualAudioGraph from 'virtual-audio-graph'

const useAudio = () => {
  const nodes = useSelector(selectNodes)
  const virtualAudioGraph = useRef(null) as unknown as MutableRefObject<VirtualAudioGraph | null>
  const initialCanvasHover = useSelector(selectInitialCanvasHover)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!virtualAudioGraph.current && initialCanvasHover) {
      virtualAudioGraph.current = createVirtualAudioGraph()
      virtualAudioGraph.current.audioContext.resume()
    }
  }, [virtualAudioGraph, initialCanvasHover])
  useEffect(() => {
    if (virtualAudioGraph.current === null) {
      return
    }
    const { currentTime } = virtualAudioGraph.current
    for (const node of nodes) {
      if (node.active) {
        const startTime = currentTime
        dispatch(setNodeStartTime({ startTime, nodeId: node.id }))
      }
    }
  }, [virtualAudioGraph, nodes, dispatch])
  useEffect(() => {
    if (virtualAudioGraph.current === null) {
      return
    }
    const filterInactiveNodesWithoutStartTime = (node: INode) => node.startTime !== null
    const filteredNodes = filter(filterInactiveNodesWithoutStartTime, nodes);
    const audioNodes = map((node: INode) => [prop('startTime',node), prop('audio', node)])(filteredNodes)
    const update = audioNodes.reduce((acc, [startTime, audio], i) => Object.assign(acc, { [i]: outputNode('output', { audio, startTime }) }), {}) as unknown as IVirtualAudioNodeGraph

    virtualAudioGraph.current.update(update)

  }, [virtualAudioGraph, nodes])
}

export default useAudio