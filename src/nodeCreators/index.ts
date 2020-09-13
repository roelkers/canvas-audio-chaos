import osc from './osc'
import filter from './filter'
import pingPongDelay from './pingPongDelay'
import attackReleaseOsc from './attackReleaseOsc'
import filter_simple from './filter_simple'

export type NodeCreator = 'osc' | 'filter' | 'filter_simple' | 'pingPongDelay' | 'attackReleaseOsc'

export default {
  osc,
  filter,
  pingPongDelay,
  attackReleaseOsc,
  filter_simple
}