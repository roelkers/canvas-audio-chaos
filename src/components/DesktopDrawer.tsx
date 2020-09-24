import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Typography } from '@material-ui/core';
import { selectFocussedNode, INodeHistoric } from '../slices/canvas';
import { useSelector } from 'react-redux';
import BaseNodeSettings from './node-settings/BaseNodeSettings';
import { addIndex, compose, map, values } from 'ramda';
import VirtualAudioNodeSettings from './node-settings'
import { AudioConfig } from '../slices/palette';
import SettingsCollapse from './SettingsCollapse';

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
  const mapper = addIndex(map) as (func : (audio: AudioConfig, index: number) => any, audio: AudioConfig[]) => AudioConfig[] 
  const obj = mapper(
     (audio : AudioConfig, index: number) => 
      <VirtualAudioNodeSettings 
        virtualAudioNodeIndex={index}
        nodeId={focussedNode.id} 
        params={audio.params} 
        nodeCreator={audio.nodeCreator} 
      />
      ,
     focussedNode.audio as AudioConfig[]
    )
  return values(obj)
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