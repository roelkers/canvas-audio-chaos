import React from 'react'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import Icon from '@mdi/react'
import { mdiRedo, mdiUndo, mdiContentCopy, mdiDelete, mdiContentSave } from '@mdi/js'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen, selectIsSpeedDialOpen } from '../slices/app'
import { styled } from '@material-ui/core/styles'
import { undo, redo, cloneNode, deleteNode, selectFocussedNode,focus } from '../slices/canvas'
import { pipe, find, propEq } from 'ramda'
import { saveNodeAsElementAndSavePalette } from '../slices/palette'
import { ButtonBase } from '@material-ui/core'


const FloatedSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  marginTop: theme.spacing(2),
  marginLeft: theme.spacing(2),
}))

const SpeedDialButtons = () => {

  const dispatch = useDispatch()
  const open = useSelector(selectIsSpeedDialOpen)
  const focussedNode = useSelector(selectFocussedNode)
  const actions = [
    { icon: <Icon path={mdiUndo} size={1} />, name: 'Undo', action: () => dispatch(undo(null)) },
    { icon: <Icon path={mdiRedo} size={1} />, name: 'Redo', action: () => dispatch(redo(null)) },
    { icon: <Icon path={mdiContentCopy} size={1} />, name: 'Clone Node', action: () => dispatch(cloneNode(null)) },
    { icon: <Icon path={mdiDelete} size={1} />, name: 'Delete Node', action: () => dispatch(deleteNode(null))&& dispatch(focus(''))  },
    { icon: <Icon path={mdiContentSave} size={1} />, name: 'Save Node to Palette', action: () => dispatch(saveNodeAsElementAndSavePalette(focussedNode)) }
  ];
  const handleClick = (actionName : string) => 
    pipe(
     find(propEq('name', actionName )),  
     (a: any) => a.action() 
    )(actions)
  
  return (
    <FloatedSpeedDial
      ariaLabel="action-buttons"
      icon={<SpeedDialIcon />}
      onClose={() => dispatch(setOpen(false))}
      onOpen={() => dispatch(setOpen(true))}
      open={open}
      direction='right'
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipPlacement='bottom'
          onClick={() => handleClick(action.name)}
        />
      ))}
    </FloatedSpeedDial>
  )
}

export default SpeedDialButtons