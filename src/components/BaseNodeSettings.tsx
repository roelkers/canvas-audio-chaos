import React from 'react'
import { INode, INodeHistoric, setTriggerBehaviour } from '../slices/canvas'
import { makeStyles, Select, InputLabel, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { getShapeName } from '../functions/geometry'
import { mdiSquare, mdiTriangle, mdiHexagon, mdiCircle } from '@mdi/js'
import Icon from '@mdi/react'
import { useDispatch } from 'react-redux'
const useStyles = makeStyles((theme) => ({
  root: {

  }
}))
const selectValueForShapeName = (shapeName: string) =>
  shapeName === 'wedge' ? <><Icon path={mdiHexagon} size={1} />Hexagon</> :
    shapeName === 'circle' ? <><Icon path={mdiCircle} size={1} />Circle</> :
      shapeName === 'triangle' ? <><Icon path={mdiTriangle} size={1} />Triangle</> :
  /*shapeName === 'square' ?*/ <><Icon path={mdiSquare} size={1} />Square</>

const BaseNodeSettings = ({ node }: { node: INodeHistoric }) => {
  const { periodicTrigger, activeTrigger } = node
  const dispatch = useDispatch()
  const shapeName = getShapeName(periodicTrigger, activeTrigger)

  const handleTriggerChange = (e: any) => {
    const value = e.target.value
    const payload =
      value === 'wedge' ? { activeTrigger: false, periodicTrigger: true } :
        value === 'circle' ? { activeTrigger: false, periodicTrigger: false } :
          value === 'triangle' ? { activeTrigger: true, periodicTrigger: true } :
    /*value === 'triangle' ?*/ { activeTrigger: true, periodicTrigger: false }
    return dispatch(setTriggerBehaviour({ ...payload, nodeId: node.id }))
  }
  return (
    <div>
      <InputLabel id='element-trigger-label'>Shape</InputLabel>
      <Select
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

    </div>
  )
}

export default BaseNodeSettings