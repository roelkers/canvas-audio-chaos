import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Typography, styled } from '@material-ui/core';
import { selectFocussedNodeId, selectFocussedNode, INode, INodeHistoric } from '../slices/canvas';
import { useSelector } from 'react-redux';
import BaseNodeSettings from './BaseNodeSettings';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',  
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  }
}))

const getAudioSettings = (focussedNode: INodeHistoric) => {
  
}

const DesktopDrawer = () => {
  const classes = useStyles()
  const focussedNode = useSelector(selectFocussedNode)
  return (
    <Drawer
      className={classes.root}
      classes={{
        paper: classes.drawerPaper
      }}
      variant="permanent"
      anchor="right"
    >
    <Typography variant='h4' align='center'>Settings</Typography>
    { focussedNode && 
    <>
    <BaseNodeSettings node={focussedNode} />
    {getAudioSettings(focussedNode)}
    </>
    }
    </Drawer>
  )
}

export default DesktopDrawer