import React from 'react'
import { useDispatch } from 'react-redux'
import { Params, NodeCreator } from '../../nodeCreators'
import { arEnvelopeConfig } from '../../nodeCreators/arEnvelope'
import { setAudioParams } from '../../slices/canvas'
import  ArEnvelopeSettings from './ArEnvelopeSettings'

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
  const handleSetParams = (params : Params) => dispatch(setAudioParams({ params, nodeId, virtualAudioNodeIndex }))
  const props = {
    params,
    handleSetParams 
  }
  const settingsMap = {
    arEnvelope : <ArEnvelopeSettings {...props as SettingsProps<arEnvelopeConfig>} />,   
    osc: null,
    filter: null,
    filter_simple : null,
    pingPongDelay: null,
    attackReleaseOsc: null,
    outputGain: null
  }
  return settingsMap[nodeCreator]
}

export default VirtualAudioNodeSettings

