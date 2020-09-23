import osc from './osc'
import filter from './filter'
import pingPongDelay from './pingPongDelay'
import attackReleaseOsc from './attackReleaseOsc'
import filter_simple from './filter_simple'
import outputGain from './outputGain'
import arEnvelope from './arEnvelope'

export type NodeCreator = 'osc' | 'filter' | 'filter_simple' |
 'pingPongDelay' | 'attackReleaseOsc' | 'arEnvelope' | 'outputGain'

export default {
  osc,
  filter,
  pingPongDelay,
  attackReleaseOsc,
  filter_simple,
  outputGain,
  arEnvelope
}