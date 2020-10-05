import { ICanvasState } from "../slices/palette";

const state: ICanvasState =
{
  nextId: 2,
  elements: [
    {
      elementId: '3',
      groups: [
        '0'
      ],
      periodicTrigger: true,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 2,
            octave: 5,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.9347923344020317,
            release: 1.2704998375324057,
            envFrequencyAmount: 24.41
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 2.5860000992947785,
            attack: 0.43332941456034035,
            release: 0.3099644507332475,
            frequency: 175.93633973762812,
            type: 'lowpass',
            envAmount: 299.4825904816633
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 1.2933187402641826,
            release: 1.2255409284924679
          }
        }
      }
    },
    {
      elementId: '1',
      groups: [
        '0',
        '3'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 114.89943746552203,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '3',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '4',
      groups: [
        '1'
      ],
      periodicTrigger: false,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 0,
            octave: 2,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: -3.94
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.11627807045887129,
            release: 0.2,
            frequency: 60.80141974857827,
            type: 'lowpass',
            envAmount: 119.24069407332158
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.09417428370521042,
            release: 0.3099644507332475
          }
        }
      }
    },
    {
      elementId: '5',
      groups: [
        '1'
      ],
      periodicTrigger: false,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.9,
            release: 1.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '6',
      groups: [
        '2',
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 2,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 10,
            attack: 0.5,
            release: 0.6,
            frequency: 0,
            type: 'lowpass',
            envAmount: 560
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '7',
      groups: [
        '1'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 28,
            attack: 0.7,
            release: 0,
            frequency: 0,
            type: 'lowpass',
            envAmount: 7420
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0
          }
        }
      }
    },
    {
      elementId: '8',
      groups: [
        '0'
      ],
      periodicTrigger: true,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 3,
            octave: 3,
            gain: 0.5,
            type: 'sawtooth',
            attack: 1,
            release: 2.3,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 22,
            attack: 0.4,
            release: 0.2,
            frequency: 1690,
            type: 'lowpass',
            envAmount: 3930
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '9',
      groups: [
        '1'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 2,
            octave: 1,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.5,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 5,
            attack: 0.9,
            release: 0.7,
            frequency: 0,
            type: 'lowpass',
            envAmount: 2130
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.1,
            release: 0.8
          }
        }
      }
    },
    {
      elementId: '10',
      groups: [
        '0',
        '3'
      ],
      periodicTrigger: false,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 0,
            octave: 5,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.5,
            release: 1.1,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 6,
            attack: 1,
            release: 0.7,
            frequency: 670,
            type: 'lowpass',
            envAmount: 2360
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.6,
            release: 0.5
          }
        }
      }
    },
    {
      elementId: '11',
      groups: [
        '2'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 2,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 1.3,
            release: 1.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 9,
            attack: 1.1,
            release: 1.2,
            frequency: 790,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.4,
            release: 0.7
          }
        }
      }
    },
    {
      elementId: '12',
      groups: [
        '2',
        '3'
      ],
      periodicTrigger: false,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 6,
            octave: 2,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.5840739849944818,
            release: 1.203396426255937,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 5,
            attack: 1.2,
            release: 1.5,
            frequency: 599.3631855032969,
            type: 'lowpass',
            envAmount: 0
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.22140275816016985,
            release: 0.4477346146633243
          }
        }
      }
    },
    {
      elementId: '13',
      groups: [
        '3'
      ],
      periodicTrigger: false,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '14',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '15',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '16',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '17',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '18',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '19',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '20',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '21',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '22',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '23',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '24',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '25',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '26',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '27',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '28',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '29',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '30',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '31',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '32',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '33',
      groups: [
        '0'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 4,
            gain: 0.5,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.3,
            release: 0.2,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    }
  ]
}

export default state