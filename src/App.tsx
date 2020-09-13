import React from 'react';
import Canvas from './components/Canvas'
import { styled } from '@material-ui/core/styles' 
import ActionButtons from './components/ActionButtons'
import { Box } from '@material-ui/core';
import Audio from './components/Audio'

const Container = styled(Box)({

})

function App() {
  return (
    <Container>
      <ActionButtons />
      <Canvas />
      <Audio />
    </Container>
  );
}

export default App;
