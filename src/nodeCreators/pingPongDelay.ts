import {
  createNode,
  delay,
  gain,
  stereoPanner,
} from 'virtual-audio-graph'

export default createNode(({
  decay,
  delayTime,
}) => ({
  0: stereoPanner('output', { pan: -1 }),
  1: stereoPanner('output', { pan: 1 }),
  2: delay([1, 5], { delayTime, maxDelayTime: delayTime }),
  3: gain(2, { gain: decay }),
  4: delay([0, 3], { delayTime, maxDelayTime: delayTime }),
  5: gain(4, { gain: decay }, 'input'), // connections will be made here
}))
