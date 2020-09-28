import React from 'react';
import { Typography } from '@material-ui/core';
import { selectFocussedNode, INodeHistoric, selectFocus } from '../slices/canvas';
import { useSelector } from 'react-redux';
import BaseNodeSettings from './node-settings/BaseNodeSettings';
import { addIndex, map, values } from 'ramda';
import VirtualAudioNodeSettings from './node-settings'
import { AudioConfig } from '../slices/palette';
import ScaleSettings from './ScaleSettings';

const getAudioSettings = (focussedNode: INodeHistoric) => {
  const mapper = addIndex(map) as (func : (audio: AudioConfig, index: number) => any, audio: AudioConfig[]) => AudioConfig[] 
  const obj = mapper(
     (audio : AudioConfig, index: number) => 
      <VirtualAudioNodeSettings
        key={index}
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

const DrawerContent = () => {
  const focussedNode = useSelector(selectFocussedNode)
  const focus = useSelector(selectFocus)
  return (
  <>
    { focussedNode && 
    <>
    <Typography variant='h4' align='center'>Node Settings</Typography>
    <BaseNodeSettings node={focussedNode} />
    {getAudioSettings(focussedNode)}
    </>
    }
    {
      focus === 'global-audio' &&
      <>
      <Typography variant='h4' align='center'>Audio Settings</Typography>
      <ScaleSettings />
      </>
    }
</>
  )
}

export default DrawerContent