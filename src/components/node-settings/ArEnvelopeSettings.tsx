import { Grid, Input, InputLabel, Slider, Typography } from '@material-ui/core';
import React, { ChangeEvent } from 'react'
import { SettingsProps } from '.';
import { arEnvelopeConfig } from '../../nodeCreators/arEnvelope';
import useGridStyles from '../../hooks/useGridStyles'
import SettingsCollapse from '../SettingsCollapse';

export default function ArEnvelopeSettings(props: SettingsProps<arEnvelopeConfig>) {
  const { handleSetParams, params, nodeId, virtualAudioNodeIndex } = props
  const { attack, release, gain } = params
  const classes = useGridStyles()
  const handleSliderChange = (param: string) => (e: ChangeEvent<{}>, newValue: number | number[]) =>
    handleSetParams({ ...params, [param]: newValue })
  const handleInputChange = (param: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    handleSetParams({ ...params, [param]: Number(e.target.value) })
  return (
    <SettingsCollapse nodeId={nodeId} title='Amplitude Envelope' virtualAudioNodeIndex={virtualAudioNodeIndex}>
    <Grid className={classes.grid} container spacing={2} >
      <Grid item xs >
        <InputLabel className={classes.label}>
          Attack
         </InputLabel>
        <Slider
          value={attack}
          onChange={handleSliderChange('attack')}
          aria-labelledby="input-slider"
          min={0}
          max={10}
          step={0.1}
        />
      </Grid>
      <Grid item >
        <Input
          className={classes.input}
          value={attack}
          margin="dense"
          onChange={handleInputChange('attack')}
          inputProps={{
            step: 0.1,
            min: 0,
            max: 10,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Grid>
    </Grid>
    <Grid className={classes.grid} container spacing={2} >
      <Grid item xs >
        <InputLabel className={classes.label}>
          Release 
         </InputLabel>
        <Slider
          value={release}
          onChange={handleSliderChange('release')}
          aria-labelledby="input-slider"
          min={0}
          max={10}
          step={0.1}
        />
      </Grid>
      <Grid item >
        <Input
          className={classes.input}
          value={release}
          margin="dense"
          onChange={handleInputChange('release')}
          inputProps={{
            step: 0.1,
            min: 0,
            max: 10,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Grid>
    </Grid>
    <Grid className={classes.grid} container spacing={2} >
      <Grid item xs >
        <InputLabel className={classes.label}>
           Gain 
         </InputLabel>
        <Slider
          value={gain}
          onChange={handleSliderChange('gain')}
          aria-labelledby="input-slider"
          min={0}
          max={1}
          step={0.01}
        />
      </Grid>
      <Grid item >
        <Input
          className={classes.input}
          value={gain}
          margin="dense"
          onChange={handleInputChange('gain')}
          inputProps={{
            step: 0.1,
            min: 0,
            max: 10,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Grid>
    </Grid>
    </SettingsCollapse>
  )
}