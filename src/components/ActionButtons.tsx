import SpeedDialButtons from './SpeedDialButtons'
import React from 'react'

import { Box, styled } from '@material-ui/core';

const Container = styled(Box)({
  position: 'absolute' 
})

const ActionButtons = () => {
  return <SpeedDialButtons />
}

export default ActionButtons