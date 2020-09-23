import React from 'react'
import { INode, INodeHistoric, setTriggerBehaviour, setVelocity, setGroups } from '../slices/canvas'
import { makeStyles, Select, InputLabel, MenuItem, ListItemIcon, ListItemText, Grid, Slider, Input, Typography, TextField, Chip } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { getShapeName } from '../functions/geometry'
import { mdiSquare, mdiTriangle, mdiHexagon, mdiCircle } from '@mdi/js'
import Icon from '@mdi/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectGroups } from '../slices/groups'
import debounce from 'debounce'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  select: {
    // width: '100%'
  },
  chip: {
    width: 54
  },
  input: {
    width: 42,
  },
  label: {
    fontSize: theme.typography.h6.fontSize
  }
}))
const selectValueForShapeName = (shapeName: string) =>
  shapeName === 'wedge' ? <><Icon path={mdiHexagon} size={1} />Hexagon</> :
    shapeName === 'circle' ? <><Icon path={mdiCircle} size={1} />Circle</> :
      shapeName === 'triangle' ? <><Icon path={mdiTriangle} size={1} />Triangle</> :
  /*shapeName === 'square' ?*/ <><Icon path={mdiSquare} size={1} />Square</>

const BaseNodeSettings = ({ node }: { node: INodeHistoric }) => {
  const { periodicTrigger, activeTrigger, velocity } = node
  const dispatch = useDispatch()
  const classes = useStyles()
  const shapeName = getShapeName(periodicTrigger, activeTrigger)
  const groups = useSelector(selectGroups)

  const handleTriggerChange = (e: any) => {
    const value = e.target.value
    const payload =
      value === 'wedge' ? { activeTrigger: false, periodicTrigger: true } :
        value === 'circle' ? { activeTrigger: false, periodicTrigger: false } :
          value === 'triangle' ? { activeTrigger: true, periodicTrigger: true } :
    /*value === 'triangle' ?*/ { activeTrigger: true, periodicTrigger: false }
    return dispatch(setTriggerBehaviour({ ...payload, nodeId: node.id }))
  }

  const handleSliderChange = (e: any, newValue: number | number[]) => dispatch(setVelocity({ nodeId: node.id, velocity: Number(newValue) }))
  const handleInputChange = (e: any) => dispatch(setVelocity({ nodeId: node.id, velocity: e.target.value }))
  const changeGroups = (event: any, newValue: any) => dispatch(setGroups({ nodeId: node.id, groups: newValue }))
  return (
    <div>
      <Grid className={classes.root} container spacing={2} alignItems='center'>
        <Grid item xs={12}>
          <InputLabel className={classes.label} id='element-trigger-label'>Shape</InputLabel>
          <Select
            className={classes.select}
            labelId='element-trigger-label'
            id='element-trigger'
            renderValue={() => selectValueForShapeName(shapeName)}
            onChange={handleTriggerChange}
            value={shapeName}
          >
            <MenuItem value='wedge'>
              <ListItemIcon>
                <Icon path={mdiHexagon} size={1} />
              </ListItemIcon>
              <ListItemText>Hexagon</ListItemText>
            </MenuItem>
            <MenuItem value='circle'>
              <ListItemIcon>
                <Icon path={mdiCircle} size={1} />
              </ListItemIcon>
              <ListItemText>Circle</ListItemText>
            </MenuItem>
            <MenuItem value='triangle'>
              <ListItemIcon>
                <Icon path={mdiTriangle} size={1} />
              </ListItemIcon>
              <ListItemText>Triangle</ListItemText>
            </MenuItem>
            <MenuItem value='square'>
              <ListItemIcon>
                <Icon path={mdiSquare} size={1} />
              </ListItemIcon>
              <ListItemText>Square</ListItemText>
            </MenuItem>
          </Select>
        </Grid>
        <Grid item xs>
          <InputLabel className={classes.label}>
            Wave velocity
          </InputLabel>
          <Slider
            value={velocity}
            onChange={debounce(handleSliderChange, 25)}
            aria-labelledby="input-slider"
            min={0}
            max={400}
            step={10}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={velocity}
            margin="dense"
            onChange={handleInputChange}
            inputProps={{
              step: 10,
              min: 0,
              max: 1000,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
        <Grid item>
          <Autocomplete
            multiple
            id="groups"
            options={groups.map(g => g.id)}
            getOptionLabel={(option) => option}
            renderOption={(option: string, state) => (
              <Chip className={classes.chip} style={{ backgroundColor: groups.find(g => g.id === option)?.fill }} variant="outlined" label={option} />
            )}
            value={node.groups}
            onChange={changeGroups}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Groups"
                placeholder=""
              />
            )}
            renderTags={(value: string[], getTagProps) => {
              return value.map((option: string, index: number) => (
                <Chip className={classes.chip} style={{ backgroundColor: groups.find(g => g.id === option)?.fill }} variant="outlined" label={option} {...getTagProps({ index })} />
              ))
            }
            }
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default BaseNodeSettings