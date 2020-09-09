import React from 'react';
import Canvas from './components/Canvas'
import { styled } from '@material-ui/core/styles' 
import ActionButtons from './components/ActionButtons'
import VirtualAudioGraph from 'virtual-audio-graph/dist/VirtualAudioGraph';
import { Box } from '@material-ui/core';
import Audio from './components/Audio'

const Container = styled(Box)({

})

function App({ virtualAudioGraph }: { virtualAudioGraph: VirtualAudioGraph}) {
  return (
    <Container>
      <ActionButtons />
      <Canvas virtualAudioGraph={virtualAudioGraph}/>
      <Audio virtualAudioGraph={virtualAudioGraph} />
    </Container>
  );
}

export default App;
