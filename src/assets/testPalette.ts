import { FilterConfig } from '../nodeCreators/filter'
import { ICanvasState } from '../slices/palette'
import { OscConfig } from '../nodeCreators/osc'
import { arEnvelopeConfig } from '../nodeCreators/arEnvelope'

const state: ICanvasState = {
  nextId: 2,
  elements: [
    { 
        elementId: '0',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '1',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '3',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '4',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '5',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '6',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '7',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '8',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '9',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '10',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '11',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '12',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '13',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '14',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '15',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '16',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '17',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '18',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '19',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '20',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '21',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '22',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '23',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '24',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '25',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '26',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '27',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '28',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '29',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '30',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '31',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '32',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    { 
        elementId: '33',
        groups: ['0'],
        periodicTrigger: false,
        activeTrigger: true,
        soundOnActivate: true,
        velocity: 240,
        audio: {
          0: {
            nodeCreator: 'osc',
            output: '1',
            params: {
              scaleNoteIndex: 1,
              octave: 4,
              gain: 0.2,
              type: 'sawtooth',
              attack: 0.1,
              release: 0.2,
              envFrequencyAmount: 3,
            } as OscConfig
          },
          1: {
            nodeCreator: 'filter',
            output: '2',
            params: {
              resonance: 1,
              attack: 0.3,
              release: 0.2,
              frequency: 5000,
              type: 'lowpass',
              envAmount: 2000
            } as FilterConfig,
          },
          2: {
            nodeCreator: 'arEnvelope',
            output: 'output',
            params: {
              gain: 1,
              attack: 0.3,
              release: 0.2,
            } as arEnvelopeConfig,
          }
        }
      },
    ]
  }

export default state