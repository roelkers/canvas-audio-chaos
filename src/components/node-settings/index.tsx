import { debounce } from 'debounce'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Params, NodeCreator } from '../../nodeCreators'
import { arEnvelopeConfig } from '../../nodeCreators/arEnvelope'
import { FilterConfig } from '../../nodeCreators/filter'
import { OscConfig } from '../../nodeCreators/osc'
import { setAudioParams } from '../../slices/canvas'
import  ArEnvelopeSettings from './ArEnvelopeSettings'
import FilterSettings from './FilterSettings'
import OscSettings from './OscSettings'

interface VirtualAudioNodeSettingsProps {
  nodeCreator: NodeCreator;
  params: Params,
  nodeId: string;
  virtualAudioNodeIndex: number;
}

export interface SettingsProps<T> {
  params: T;
  handleSetParams : (params: T) => void
}

const VirtualAudioNodeSettings = ({ nodeId, nodeCreator, params, virtualAudioNodeIndex }: VirtualAudioNodeSettingsProps) => {
  const dispatch = useDispatch()
  const handleSetParams = debounce((params : Params) => dispatch(setAudioParams({ params, nodeId, virtualAudioNodeIndex })),20)
  const props = {
    params,
    handleSetParams 
  }
  const settingsMap = {
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

