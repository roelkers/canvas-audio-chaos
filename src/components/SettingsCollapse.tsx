import { IconButton, Collapse, makeStyles, Grid, Typography } from '@material-ui/core';
import Icon from '@mdi/react';
import { props } from 'ramda';
import React from 'react'
import { mdiArrowCollapseDown, mdiArrowCollapseUp } from '@mdi/js'

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

export default function SettingsCollapse({ children, title }: { children: React.ReactNode, title: string }) {
  const [expanded, setExpanded] = React.useState(true);
  const classes = useStyles()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs>
          <IconButton className={classes.button} onClick={handleExpandClick}>
            <Icon size={1} path={expanded ? mdiArrowCollapseUp : mdiArrowCollapseDown} />
          </IconButton>
          <Typography align='center'>{title}</Typography>
        </Grid>
      </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit >
        {children}
      </Collapse>
    </div>)
}