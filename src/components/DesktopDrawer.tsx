import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

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

interface DesktopDrawerProps {
  children: React.ReactNode, 
}

const DesktopDrawer = ({ children }: DesktopDrawerProps) => {
  const classes = useStyles()
  return (
    <Drawer
      className={classes.root}
      classes={{
        paper: classes.drawerPaper
      }}
      variant="permanent"
      anchor="right"
    >
    {children}
    </Drawer>
  )
}

export default DesktopDrawer