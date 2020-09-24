import { debounce, Grid, Input, InputLabel, makeStyles, Slider, Typography } from '@material-ui/core';
import React, { ChangeEvent } from 'react'
import { SettingsProps } from '.';
import { arEnvelopeConfig } from '../../nodeCreators/arEnvelope';

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  label: {
    fontSize: theme.typography.h6.fontSize
  },
  input: {
    width: 42,
  },
}))

export default function ArEnvelopeSettings(props: SettingsProps<arEnvelopeConfig>) {
  const { handleSetParams, params } = props
  const { attack, release, gain } = params
  const classes = useStyles()
  const handleSliderChange = (param: string) => (e: ChangeEvent<{}>, newValue: number | number[]) =>
    handleSetParams({ ...params, [param]: newValue })
  const handleInputChange = (param: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    handleSetParams({ ...params, [param]: Number(e.target.value) })
  return (
    <div>
    <Grid className={classes.grid} container spacing={2}>
      <Grid item xs>
        <Typography align='center'>Amplitude Envelope</Typography>
      </Grid>
    </Grid>
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
    </div>
  )
}