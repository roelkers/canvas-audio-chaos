import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { selectScale } from '../slices/global-audio'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  input: {
    width: 42,
  },
  label: {
    fontSize: theme.typography.h6.fontSize
  }
}))

export default function ScaleSettings() {
  const classes = useStyles()
  return (
    <Grid className={classes.root} container spacing={1} alignItems='center'>
      <Grid item xs={12}>
       
      </Grid>
    </Grid>
  ) 
}