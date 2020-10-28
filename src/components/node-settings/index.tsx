import { debounce } from 'debounce'
import React from 'react'
import { useDispatch } from 'react-redux'
import { NodeCreator, NodeCreators } from '../../nodeCreators'
import { arEnvelopeConfig } from '../../nodeCreators/arEnvelope'
import { FilterConfig } from '../../nodeCreators/filter'
import { OscConfig } from '../../nodeCreators/osc'
import { setAudioParams } from '../../slices/canvas'
import  ArEnvelopeSettings from './ArEnvelopeSettings'
import FilterSettings from './FilterSettings'
import OscSettings from './OscSettings'

interface VirtualAudioNodeSettingsProps<K extends keyof NodeCreators> {
  nodeCreator: K;
  params: NodeCreators[K],
  nodeId: string;
  virtualAudioNodeIndex: number;
}

export interface SettingsProps<T> {
  params: T;
  nodeId: string;
  virtualAudioNodeIndex: number;
  handleSetParams : (params: T) => void
}

const VirtualAudioNodeSettings = ({ nodeId, nodeCreator, params, virtualAudioNodeIndex }: VirtualAudioNodeSettingsProps<NodeCreator>) => {
  const dispatch = useDispatch()
  const handleSetParams = debounce((params : NodeCreators[keyof NodeCreators]) => dispatch(setAudioParams({ params, nodeId, virtualAudioNodeIndex })),100)
  const props = {
    params,
    virtualAudioNodeIndex,
    handleSetParams,
    nodeId 
  }
  const settingsMap : Record<keyof NodeCreators, JSX.Element | null> = {
    arEnvelope : <ArEnvelopeSettings {...props as SettingsProps<arEnvelopeConfig>} />,   
    osc: <OscSettings {...props as SettingsProps<OscConfig>}/>,
    filter: <FilterSettings {...props as SettingsProps<FilterConfig>} />,
    filter_simple : null,
    pingPongDelay: null,
    attackReleaseOsc: null,
    outputGain: null
  }
  return settingsMap[nodeCreator]
}

export default VirtualAudioNodeSettings

