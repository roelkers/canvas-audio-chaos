import React from 'react';
import Canvas from './components/Stage' 
import './App.css';
import VirtualAudioGraph from 'virtual-audio-graph/dist/VirtualAudioGraph';

function App({ virtualAudioGraph }: { virtualAudioGraph: VirtualAudioGraph}) {
  return (
    <div className="App">
        <Canvas virtualAudioGraph={virtualAudioGraph}/>
    </div>
  );
}

export default App;
