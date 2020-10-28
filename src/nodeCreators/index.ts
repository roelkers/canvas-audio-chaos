import osc from './osc'
import filter from './filter'
import pingPongDelay, { PingPongConfig } from './pingPongDelay'
import attackReleaseOsc from './attackReleaseOsc'
import filter_simple from './filter_simple'
import outputGain, { outputGainConfig } from './outputGain'
import arEnvelope, { arEnvelopeConfig } from './arEnvelope'

import { FilterConfig } from './filter'
import { AttackReleaseOscConfig } from './attackReleaseOsc'
import { SimpleFilterConfig } from './filter_simple'
import { OscConfig } from '../nodeCreators/osc'

export type NodeCreator = 'osc' | 'filter' | 'filter_simple' |
 'pingPongDelay' | 'attackReleaseOsc' | 'arEnvelope' | 'outputGain'

export type Params = OscConfig | FilterConfig | AttackReleaseOscConfig | SimpleFilterConfig | arEnvelopeConfig | outputGainConfig | PingPongConfig

export type NodeCreators = {
  osc: OscConfig;
  filter: FilterConfig; 
  filter_simple: SimpleFilterConfig;
  pingPongDelay: PingPongConfig;
  outputGain: outputGainConfig;
  attackReleaseOsc: AttackReleaseOscConfig;
  arEnvelope: arEnvelopeConfig;
}

export type EnhancedConfig<T extends Params> = T & { startTime: number, scale: string[] }

export default {
  osc,
  filter,
  pingPongDelay,
  attackReleaseOsc,
  filter_simple,
  outputGain,
  arEnvelope
}