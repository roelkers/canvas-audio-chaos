import React from 'react';
import Canvas from './components/Canvas'
import { styled } from '@material-ui/core/styles' 
import Settings from './components/ActionButtons'
import { Box } from '@material-ui/core';
import Audio from './components/Audio'

const Container = styled(Box)({

})

function App() {
  return (
    <Container>
      <Settings />
      <Canvas />
      <Audio />
    </Container>
  );
}

export default App;
