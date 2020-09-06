import osc from './osc'
import filter from './filter'
import pingPongDelay from './pingPongDelay'
import attackReleaseOsc from './attackReleaseOsc'

export type NodeCreator = 'osc' | 'filter' | 'pingPongDelay' | 'attackReleaseOsc'

export default {
  osc,
  filter,
  pingPongDelay,
  attackReleaseOsc
}