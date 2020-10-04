import { Grid, Input, InputLabel, Slider } from '@material-ui/core';
import React, { ChangeEvent } from 'react'
import { useSelector } from 'react-redux';
import { SettingsProps } from '.';
import { roundToTwoDecimals } from '../../functions/geometry';
import useGridStyles from '../../hooks/useGridStyles'
import { OscConfig } from '../../nodeCreators/osc';
import { selectScale } from '../../slices/global-audio';
import SettingsCollapse from '../SettingsCollapse';

export default function OscSettings(props: SettingsProps<OscConfig>) {
  const { handleSetParams, params, nodeId, virtualAudioNodeIndex } = props
  const { attack, release, scaleNoteIndex, envFrequencyAmount, octave } = params
  const scale = useSelector(selectScale)
  const classes = useGridStyles()
  const attackSlider = Math.log(attack + 1)
  const releaseSlider = Math.log(release + 1)
  const handleSliderChange = (param: string) => (newValue: number) => {
    handleSetParams({ ...params, [param]: newValue })
  }
  const handleInputChange = (param: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    handleSetParams({ ...params, [param]: Number(e.target.value) })
  const lengthSliderFunc = (x: number) => Math.exp(x) - 1
  const noteMarks = scale.map((note: string, index: number) => ({ value: index, label: note }))
  return (
    <SettingsCollapse title='Oscillator' nodeId={nodeId} virtualAudioNodeIndex={virtualAudioNodeIndex}>
      <Grid className={classes.grid} container spacing={2} >
        <Grid item xs >
          <InputLabel className={classes.label}>
            Note
         </InputLabel>
          <Slider
            value={scaleNoteIndex}
            onChange={(e: any, newValue: number | number[]) =>
              handleSliderChange('scaleNoteIndex')(newValue as number)}
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
      <Grid className={classes.grid} container spacing={2} >
        <Grid item xs >
          <InputLabel className={classes.label}>
            Attack
         </InputLabel>
          <Slider
            onChange={(e: any, newValue: number | number[]) =>
              handleSliderChange('attack')
                (lengthSliderFunc(newValue as number))}
            valueLabelDisplay="auto"
            valueLabelFormat={roundToTwoDecimals}
            aria-labelledby="input-slider"
            min={0}
            scale={lengthSliderFunc}
            max={2}
            step={0.01}
            value={attackSlider}
          />
        </Grid>
      </Grid>
      <Grid className={classes.grid} container spacing={2} >
        <Grid item xs >
          <InputLabel className={classes.label}>
            Release
         </InputLabel>
          <Slider
            onChange={(e: any, newValue: number | number[]) =>
              handleSliderChange('release')
                (lengthSliderFunc(newValue as number))}
            valueLabelDisplay="auto"
            valueLabelFormat={roundToTwoDecimals}
            aria-labelledby="input-slider"
            min={0}
            scale={lengthSliderFunc}
            max={2}
            step={0.01}
            value={releaseSlider}
          />
        </Grid>
      </Grid>
      <Grid className={classes.grid} container spacing={2} >
        <Grid item xs >
          <InputLabel className={classes.label}>
            Pitch Env Amount 
         </InputLabel>
          <Slider
            onChange={(e: any, newValue: number | number[]) =>
              handleSliderChange('envFrequencyAmount')
                (newValue as number)}
            valueLabelDisplay="auto"
            valueLabelFormat={roundToTwoDecimals}
            aria-labelledby="input-slider"
            min={-100}
            max={100}
            step={0.01}
            value={envFrequencyAmount}
          />
        </Grid>
      </Grid>
    </SettingsCollapse>
  )
}