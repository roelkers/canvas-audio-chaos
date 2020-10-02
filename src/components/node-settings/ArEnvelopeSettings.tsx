import { Grid, Input, InputLabel, Slider } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react'
import { SettingsProps } from '.';
import { arEnvelopeConfig } from '../../nodeCreators/arEnvelope';
import useGridStyles from '../../hooks/useGridStyles'
import SettingsCollapse from '../SettingsCollapse';
import { roundToTwoDecimals } from '../../functions/geometry';

export default function ArEnvelopeSettings(props: SettingsProps<arEnvelopeConfig>) {
  const { handleSetParams, params, nodeId, virtualAudioNodeIndex } = props
  const { attack, release, gain } = params
  const attackSlider = Math.log(attack+1)  
  const releaseSlider = Math.log(release+1)
  const gainSlider = Math.exp(Math.LN2 * gain) - 1
  const classes = useGridStyles()
  const handleSliderChange = (param: string) => (newValue: number) => { 
    handleSetParams({ ...params, [param]:  newValue })  }
  const lengthSliderFunc = (x:number) => Math.exp(x) -1
  const gainSliderFunc = (x: number) => (Math.log(x + 1)/Math.LN2) 
  return (
    <SettingsCollapse nodeId={nodeId} title='Amplitude Envelope' virtualAudioNodeIndex={virtualAudioNodeIndex}>
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
           Gain 
         </InputLabel>
        <Slider
          onChange={(e: any, newValue: number | number[]) => 
            handleSliderChange('gain')
            (gainSliderFunc(newValue as number))}
          valueLabelDisplay="auto"
          valueLabelFormat={roundToTwoDecimals}
          aria-labelledby="input-slider"
          min={0}
          scale={gainSliderFunc}
          max={1}
          step={0.01}
          value={gainSlider}
        />
      </Grid>
    </Grid>
    </SettingsCollapse>
  )}

  // a = e ^ x - 1
  // a + 1 = e ^ x

  // x = log(a + 1 )

  // f(0) = 0 = log x + 1 
  // f(1) = 1 = (log x + 1) / ln2 
  
  // g ln2 = ln x + 1
  // g ln2 - 1 = ln x
  // x = exp(g ln2 ) -1 
