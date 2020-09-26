import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, SwipeableDrawer } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsMobileDrawerOpen, setMobileDrawerOpen } from '../slices/app';
import { mdiClose } from '@mdi/js';
import { Icon } from '@mdi/react';

const drawerWidth = '100%';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',  
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth,
    // overflowX: 'hidden'
  },
  close: {
    position: 'absolute',
    right: theme.spacing(2) 
  }
}))

interface MobileDrawerProps {
  children: React.ReactNode, 
}

const MobileDrawer = ({ children } : MobileDrawerProps) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const open = useSelector(selectIsMobileDrawerOpen)
  const onClose = () => dispatch(setMobileDrawerOpen(false)) 
  const onOpen = () => dispatch(setMobileDrawerOpen(true)) 
  return (
    <SwipeableDrawer
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      className={classes.root}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="bottom"
    >
    <IconButton className={classes.close} onClick={onClose}>
      <Icon size={0.8} path={mdiClose}/>
    </IconButton>
    {children}
    </SwipeableDrawer>
  )
}

export default MobileDrawer