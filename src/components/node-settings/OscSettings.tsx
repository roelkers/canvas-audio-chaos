import { Grid, Input, InputLabel, Slider } from '@material-ui/core';
import { addIndex, map } from 'ramda';
import React, { ChangeEvent } from 'react'
import { useSelector } from 'react-redux';
import { SettingsProps } from '.';
import useGridStyles from '../../hooks/useGridStyles'
import { OscConfig } from '../../nodeCreators/osc';
import { selectScale } from '../../slices/global-audio';
import SettingsCollapse from '../SettingsCollapse';

export default function OscSettings(props: SettingsProps<OscConfig>) {
  const { handleSetParams, params, nodeId, virtualAudioNodeIndex } = props
  const { attack, release, scaleNoteIndex, octave } = params
  const scale = useSelector(selectScale)
  const classes = useGridStyles()
  const handleSliderChange = (param: string) => (e: ChangeEvent<{}>, newValue: number | number[]) =>
    handleSetParams({ ...params, [param]: newValue })
  const handleInputChange = (param: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    handleSetParams({ ...params, [param]: Number(e.target.value) })
  const noteMarks = scale.map((note: string, index: number) => ({ value: index, label: note }))
  return (
    <SettingsCollapse title='Oscillator' nodeId={nodeId} virtualAudioNodeIndex={virtualAudioNodeIndex}>
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
           Note 
         </InputLabel>
        <Slider
          value={scaleNoteIndex}
          onChange={handleSliderChange('scaleNoteIndex')}
          aria-labelledby="input-slider"
          min={0}
          marks={noteMarks}
          max={7}
          step={1}
        />
      </Grid>
      <Grid item >
        <InputLabel className={classes.label}>
           Octave 
         </InputLabel>
        <Input
          className={classes.input}
          value={octave}
          margin="dense"
          onChange={handleInputChange('octave')}
          inputProps={{
            step: 1,
            min: 0,
            max: 8,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Grid>
    </Grid>
    </SettingsCollapse>
  )
}