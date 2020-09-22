import { FilterConfig } from '../nodeCreators/filter'
import { AttackReleaseOscConfig } from '../nodeCreators/attackReleaseOsc'
import { SimpleFilterConfig } from '../nodeCreators/filter_simple'
import { ICanvasState } from '../slices/palette'

const state: ICanvasState = {
  nextId: 2,
  elements: [
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 330,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.10,
              release : 0.10 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 330,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.10,
              release : 0.10 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 330,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.10,
              release : 0.10 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },

    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 330,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.10,
              release : 0.10 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },

    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 330,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.10,
              release : 0.10 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },

    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 330,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.10,
              release : 0.10 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },

    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 330,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.10,
              release : 0.10 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: true,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
    {
      elementId: '0',
      groups: ['0'],
      periodicTrigger: false,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
        audio: {
          0: {
            nodeCreator: 'attackReleaseOsc',
            output: '1',
            params: {
              frequency: 110,
              gain: 0.2,
              type: 'sawtooth',
              attack : 0.20,
              release : 0.30 
            } as AttackReleaseOscConfig,
          },
          1: {
            nodeCreator: 'filter_simple',
            output: 'output',
            params: {
              frequency: 1020,
              type: '',
              resonance: 10 
            } as SimpleFilterConfig,
          }
        }
    },
  ]
}

export default state