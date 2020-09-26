import React from 'react'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import Icon from '@mdi/react'
import { mdiRedo, mdiUndo, mdiContentCopy } from '@mdi/js'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen, selectIsSpeedDialOpen } from '../slices/app'
import { styled } from '@material-ui/core/styles'
import { undo, redo } from '../slices/canvas'
import { pipe, find, propEq } from 'ramda'


const FloatedSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  marginTop: theme.spacing(3),
  marginLeft: theme.spacing(3),
}))

const SpeedDialButtons = () => {

  const dispatch = useDispatch()
  const open = useSelector(selectIsSpeedDialOpen)
  const actions = [
    { icon: <Icon path={mdiUndo} size={1} />, name: 'Undo', action: () => dispatch(undo(null)) },
    { icon: <Icon path={mdiRedo} size={1} />, name: 'Redo', action: () => dispatch(redo(null)) },
    { icon: <Icon path={mdiContentCopy} size={1} />, name: 'Clone', action: () => null },
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