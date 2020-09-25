import { IconButton, Collapse, makeStyles, Grid, Typography } from '@material-ui/core';
import Icon from '@mdi/react';
import { includes } from 'ramda';
import React from 'react'
import { mdiArrowCollapseDown, mdiArrowCollapseUp } from '@mdi/js'
import { useDispatch, useSelector } from 'react-redux';
import { selectCollapsedAudioNodeSettings, setCollapseAudioNodeSettings } from '../slices/canvas';

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'absolute',
    marginBottom: 0,
    padding: '0 0 0 8px'
  },
  container: {
    position: 'relative'
  }
}))

interface SettingsCollapseProps { 
  children: React.ReactNode, 
  title: string 
  nodeId: string;
  virtualAudioNodeIndex: number;
}

export default function SettingsCollapse({ children, title, nodeId, virtualAudioNodeIndex }: SettingsCollapseProps ) {
  const collapsedSettings = useSelector(selectCollapsedAudioNodeSettings(nodeId))
  const collapsed = includes(virtualAudioNodeIndex, collapsedSettings || [])
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleExpandClick = () => {
    dispatch(setCollapseAudioNodeSettings({ nodeId, virtualAudioNodeIndex, collapsed: !collapsed }))
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs>
          <IconButton className={classes.button} onClick={handleExpandClick}>
            <Icon size={1} path={collapsed ? mdiArrowCollapseDown : mdiArrowCollapseUp } />
          </IconButton>
          <Typography align='center'>{title}</Typography>
        </Grid>
      </Grid>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit >
        {children}
      </Collapse>
    </div>)
}