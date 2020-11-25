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
            gain: 0.5160151470036647,
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
            gain: 0.4646682670034443,
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
            gain: 1,
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
            gain: 1,
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
            gain: 1,
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
            gain: 1,
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
            gain: 0.32,
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
            gain: 0.63,
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
            gain: 0.82,
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
            gain: 0.4,
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
            gain: 0.78,
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
            gain: 0.4222330006830478,
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
            gain: 1,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '14',
      groups: [
        '0',
        '1',
        '3'
      ],
      periodicTrigger: false,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 150,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 3,
            octave: 3,
            type: 'sawtooth',
            attack: 0.1,
            release: 0.08328706767495864,
            envFrequencyAmount: 4.6
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 4.843841909209141,
            attack: 0.49182469764127035,
            release: 0.404947590563594,
            frequency: 162.47876564745752,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.35614381022527536,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '15',
      groups: [
        '1'
      ],
      periodicTrigger: true,
      activeTrigger: true,
      soundOnActivate: true,
      velocity: 190,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 0,
            octave: 2,
            type: 'sawtooth',
            attack: 0.18530485132036545,
            release: 0.3498588075760032,
            envFrequencyAmount: -0.42
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 2.092495976572515,
            attack: 0.2840254166877414,
            release: 0.4477346146633243,
            frequency: 192.99929005337015,
            type: 'lowpass',
            envAmount: 3578.1683857244175
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.34482849699744117,
            attack: 0.3,
            release: 0.5068177851128535
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
            gain: 1,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '17',
      groups: [
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
            scaleNoteIndex: 6,
            octave: 4,
            type: 'sawtooth',
            attack: 0.12749685157937574,
            release: 0.08328706767495864,
            envFrequencyAmount: -3.77
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 11.382762204968184,
            attack: 0.19721736312181015,
            release: 0.8039884153978569,
            frequency: 620.6619653820468,
            type: 'lowpass',
            envAmount: 545.5935885991223
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.6599245584023783,
            attack: 0.39096812846378026,
            release: 0.37712776433595696
          }
        }
      }
    },
    {
      elementId: '18',
      groups: [
        '0'
      ],
      periodicTrigger: true,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 2,
            octave: 5,
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
            resonance: 5.219615556186339,
            attack: 0.39096812846378026,
            release: 0.5068177851128535,
            frequency: 741.4866811440129,
            type: 'lowpass',
            envAmount: 141.08997064172098
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.6959938131099002,
            attack: 0.39096812846378026,
            release: 0.7332530178673953
          }
        }
      }
    },
    {
      elementId: '19',
      groups: [
        '0',
        '1',
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
            type: 'sawtooth',
            attack: 0.1,
            release: 0.2,
            envFrequencyAmount: 2.09
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 4.9182469764127035,
            attack: 1.484322533384817,
            release: 1.5345091776178545,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5160151470036647,
            attack: 1.203396426255937,
            release: 1.3869108535242765
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
            scaleNoteIndex: 4,
            octave: 4,
            type: 'sawtooth',
            attack: 0.6487212707001282,
            release: 0.8589280418463421,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 5.449630589513383,
            attack: 0.8039884153978569,
            release: 1.0137527074704766,
            frequency: 326.3114515168817,
            type: 'lowpass',
            envAmount: 307.55267412675266
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.6690267655096306,
            attack: 0.23367805995674318,
            release: 1.0959355144943643
          }
        }
      }
    },
    {
      elementId: '21',
      groups: [
        '0',
        '2'
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
            scaleNoteIndex: 5,
            octave: 4,
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
            frequency: 2164.63796431754,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.2750070474998698,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '22',
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
            scaleNoteIndex: 5,
            octave: 3,
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
            resonance: 2.2140275816016985,
            attack: 0,
            release: 0.09417428370521042,
            frequency: 39.09681284637803,
            type: 'lowpass',
            envAmount: 220.59228832028145
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.8559896973084807,
            attack: 0.3,
            release: 0.3498588075760032
          }
        }
      }
    },
    {
      elementId: '23',
      groups: [
        '1'
      ],
      periodicTrigger: true,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 240,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 3,
            octave: 3,
            type: 'sawtooth',
            attack: 0.46228458943422446,
            release: 0.49182469764127035,
            envFrequencyAmount: -17.15
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.6323162199553789,
            release: 0.7332530178673953,
            frequency: 5000,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 1,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '24',
      groups: [
        '2'
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
            scaleNoteIndex: 5,
            octave: 4,
            type: 'sawtooth',
            attack: 0.8964808793049515,
            release: 0.9155408290138962,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 8.130309449601565,
            attack: 0.9738777322304477,
            release: 1.0750806076741224,
            frequency: 504.96474644129466,
            type: 'lowpass',
            envAmount: 10202.791799522927
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.5655971758542251,
            attack: 1.181472265498201,
            release: 1.2255409284924679
          }
        }
      }
    },
    {
      elementId: '25',
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
            octave: 4,
            type: 'sawtooth',
            attack: 0.8404313987816374,
            release: 1.2255409284924679,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 2.840254166877414,
            attack: 0.4769807938826425,
            release: 0.5999941932173602,
            frequency: 1094.1264417849104,
            type: 'lowpass',
            envAmount: 466.892780380498
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 1,
            attack: 0.13882838332462177,
            release: 2.896193301795215
          }
        }
      }
    },
    {
      elementId: '26',
      groups: [
        '2',
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
            scaleNoteIndex: 3,
            octave: 4,
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
            resonance: 2.776213132048866,
            attack: 0.2969300866657718,
            release: 0.8404313987816374,
            frequency: 1456.4613932184575,
            type: 'lowpass',
            envAmount: 120.33964262559368
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.6507645591169021,
            attack: 0,
            release: 0.19721736312181015
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
            gain: 1,
            attack: 0.3,
            release: 0.2
          }
        }
      }
    },
    {
      elementId: '28',
      groups: [
        '0',
        '3'
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
            scaleNoteIndex: 5,
            octave: 4,
            type: 'sawtooth',
            attack: 0.27124915032140473,
            release: 0.404947590563594,
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
            gain: 1,
            attack: 0.3,
            release: 0.43332941456034035
          }
        }
      }
    },
    {
      elementId: '29',
      groups: [
        '2'
      ],
      periodicTrigger: true,
      activeTrigger: false,
      soundOnActivate: true,
      velocity: 190,
      audio: {
        '0': {
          nodeCreator: 'osc',
          output: '1',
          params: {
            scaleNoteIndex: 1,
            octave: 2,
            type: 'sawtooth',
            attack: 0.3231298123374371,
            release: 0.6323162199553789,
            envFrequencyAmount: -1.26
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 4.6961432144114434,
            attack: 0.37712776433595696,
            release: 0.6323162199553789,
            frequency: 863.1124601110287,
            type: 'lowpass',
            envAmount: 996.8198059080418
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.790772037862,
            attack: 0.7332530178673953,
            release: 0.8589280418463421
          }
        }
      }
    },
    {
      elementId: '30',
      groups: [
        '0',
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
            scaleNoteIndex: 0,
            octave: 1,
            type: 'sawtooth',
            attack: 0.39096812846378026,
            release: 0.5372575235482815,
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
            frequency: 200.41660239464335,
            type: 'lowpass',
            envAmount: 688.52978976549
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 1,
            attack: 0.17351087099181028,
            release: 0.6160744021928934
          }
        }
      }
    },
    {
      elementId: '31',
      groups: [
        '3',
        '1',
        '2',
        '0'
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
            scaleNoteIndex: 3,
            octave: 2,
            type: 'sawtooth',
            attack: 0.37712776433595696,
            release: 0.2,
            envFrequencyAmount: 3
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 1,
            attack: 0.9937155332430823,
            release: 0.9155408290138962,
            frequency: 606.3919023701211,
            type: 'lowpass',
            envAmount: 326.3114515168817
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.925999418556223,
            attack: 0,
            release: 1.2255409284924679
          }
        }
      }
    },
    {
      elementId: '32',
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
            scaleNoteIndex: 5,
            octave: 3,
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
            attack: 0.46228458943422446,
            release: 0.5683121854901687,
            frequency: 281.9043505366336,
            type: 'lowpass',
            envAmount: 2000
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.6507645591169021,
            attack: 0.6160744021928934,
            release: 0.7506725002961012
          }
        }
      }
    },
    {
      elementId: '33',
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
            octave: 2,
            type: 'sawtooth',
            attack: 0.2969300866657718,
            release: 0.3498588075760032,
            envFrequencyAmount: -3.77
          }
        },
        '1': {
          nodeCreator: 'filter',
          output: '2',
          params: {
            resonance: 3.4312635868627672,
            attack: 0,
            release: 1.2704998375324057,
            frequency: 741.4866811440129,
            type: 'lowpass',
            envAmount: 478.3447741956774
          }
        },
        '2': {
          nodeCreator: 'arEnvelope',
          output: 'output',
          params: {
            gain: 0.7990873060740036,
            attack: 0.404947590563594,
            release: 0.5372575235482815
          }
        }
      }
    }
  ]
}
export default state