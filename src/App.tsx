import React from 'react';
import Canvas from './components/Canvas'
import { styled } from '@material-ui/core/styles' 
import Settings from './components/Settings'
import { Box, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Audio from './components/Audio'

const theme = createMuiTheme({
  typography: {
    h6: {
      fontSize: 12
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Settings />
      <Canvas />
      <Audio />
    </ThemeProvider>
  );
}

export default App;
