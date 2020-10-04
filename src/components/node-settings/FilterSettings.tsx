import { Grid, Input, InputLabel, Slider, Tooltip } from '@material-ui/core';
import React, { ChangeEvent } from 'react'
import { SettingsProps } from '.';
import { roundToTwoDecimals } from '../../functions/geometry';
import useGridStyles from '../../hooks/useGridStyles'
import { FilterConfig } from '../../nodeCreators/filter';
import SettingsCollapse from '../SettingsCollapse';
interface Props {
  children: React.ReactElement;
  open: boolean;
  value: number;
}
function ValueLabelComponent(props: Props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

export default function FilterSettings(props: SettingsProps<FilterConfig>) {
  const { handleSetParams, params, virtualAudioNodeIndex, nodeId } = props
  const { attack, release, frequency, resonance, envAmount } = params
  const attackSlider = Math.log(attack + 1)
  const releaseSlider = Math.log(release + 1)
  const frequencySlider = (Math.log(frequency/100 +1)) 
  const envAmountSlider = (Math.log(envAmount/100 +1)) 
  const resonanceSlider = (Math.log(resonance/10 +1)) 
  const classes = useGridStyles()
  const handleSliderChange = (param: string) => (newValue: number) => {
    handleSetParams({ ...params, [param]: newValue })
  }
  const lengthSliderFunc = (x: number) => Math.exp(x) - 1
  const resonanceSliderFunc = (x: number) => 10* (Math.exp(x) - 1)
  const frequencySliderFunc = (x: number) => 100* ( Math.exp(x) - 1)
  return (
    <SettingsCollapse title='Filter' nodeId={nodeId} virtualAudioNodeIndex={virtualAudioNodeIndex}>
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
            Frequency
         </InputLabel>
          <Slider
            onChange={(e: any, newValue: number | number[]) =>
              handleSliderChange('frequency')
                (frequencySliderFunc(newValue as number))}
            valueLabelDisplay="auto"
            valueLabelFormat={(v) => `${Math.ceil(v)}hz`}
            ValueLabelComponent={ValueLabelComponent}
            aria-labelledby="input-slider"
            min={0}
            scale={frequencySliderFunc}
            max={5.25}
            step={0.005}
            value={frequencySlider}
          />
        </Grid>
      </Grid>
      <Grid className={classes.grid} container spacing={2} >
        <Grid item xs >
          <InputLabel className={classes.label}>
            Resonance
         </InputLabel>
          <Slider
            onChange={(e: any, newValue: number | number[]) =>
              handleSliderChange('resonance')
                (resonanceSliderFunc(newValue as number))}
            valueLabelDisplay="auto"
            valueLabelFormat={roundToTwoDecimals}
            aria-labelledby="input-slider"
            min={0}
            scale={resonanceSliderFunc}
            max={2}
            step={0.005}
            value={resonanceSlider}
          />
        </Grid>
      </Grid>
      <Grid className={classes.grid} container spacing={2} >
        <Grid item xs >
          <InputLabel className={classes.label}>
            Envelope Amount 
         </InputLabel>
          <Slider
            onChange={(e: any, newValue: number | number[]) =>
              handleSliderChange('envAmount')
                (frequencySliderFunc(newValue as number))}
            valueLabelDisplay="auto"
            valueLabelFormat={(v) => `${Math.ceil(v)}hz`}
            ValueLabelComponent={ValueLabelComponent}
            aria-labelledby="input-slider"
            min={0}
            scale={frequencySliderFunc}
            max={5.25}
            step={0.005}
            value={envAmountSlider}
          />
        </Grid>
      </Grid>
    </SettingsCollapse>
  )
}