import { Grid, Input, InputLabel, Slider } from '@material-ui/core';
import React, { ChangeEvent } from 'react'
import { SettingsProps } from '.';
import useGridStyles from '../../hooks/useGridStyles'
import { FilterConfig } from '../../nodeCreators/filter';
import SettingsCollapse from '../SettingsCollapse';

export default function FilterSettings(props: SettingsProps<FilterConfig>) {
  const { handleSetParams, params, virtualAudioNodeIndex, nodeId } = props
  const { attack, release, frequency, resonance, envAmount } = params
  const classes = useGridStyles()
  const handleSliderChange = (param: string) => (e: ChangeEvent<{}>, newValue: number | number[]) =>
    handleSetParams({ ...params, [param]: newValue })
  const handleInputChange = (param: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    handleSetParams({ ...params, [param]: Number(e.target.value) })
  return (
    <SettingsCollapse title='Filter' nodeId={nodeId} virtualAudioNodeIndex={virtualAudioNodeIndex}>
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
           Frequency 
         </InputLabel>
        <Slider
          value={frequency}
          onChange={handleSliderChange('frequency')}
          aria-labelledby="input-slider"
          min={0}
          max={20000}
          step={10}
        />
      </Grid>
      <Grid item >
        <Input
          className={classes.input}
          value={frequency}
          margin="dense"
          onChange={handleInputChange('frequency')}
          inputProps={{
            step: 10,
            min: 0,
            max: 20000,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Grid>
    </Grid>
    <Grid className={classes.grid} container spacing={2} >
      <Grid item xs >
        <InputLabel className={classes.label}>
           Resonance 
         </InputLabel>
        <Slider
          value={resonance}
          onChange={handleSliderChange('resonance')}
          aria-labelledby="input-slider"
          min={0}
          max={100}
          step={1}
        />
      </Grid>
      <Grid item >
        <Input
          className={classes.input}
          value={resonance}
          margin="dense"
          onChange={handleInputChange('resonance')}
          inputProps={{
            step: 1,
            min: 0,
            max: 100,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Grid>
    </Grid>
    <Grid className={classes.grid} container spacing={2} >
      <Grid item xs >
        <InputLabel className={classes.label}>
           Envelope Amount
         </InputLabel>
        <Slider
          value={envAmount}
          onChange={handleSliderChange('envAmount')}
          aria-labelledby="input-slider"
          min={0}
          max={20000}
          step={10}
        />
      </Grid>
      <Grid item >
        <Input
          className={classes.input}
          value={envAmount}
          margin="dense"
          onChange={handleInputChange('envAmount')}
          inputProps={{
            step: 10,
            min: 0,
            max: 20000,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Grid>
    </Grid>
    </SettingsCollapse>
  )
}