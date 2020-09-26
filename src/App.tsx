import React from 'react';
import Canvas from './components/Canvas'
import Settings from './components/Settings'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Audio from './components/Audio'
import { useWindowSize } from './hooks/useWindowSize';

const theme = createMuiTheme({
  typography: {
    h6: {
      fontSize: 12
    }
  }
})

function App() {
  useWindowSize()
  return (
    <ThemeProvider theme={theme}>
      <Settings />
      <Canvas />
      <Audio />
    </ThemeProvider>
  );
}

export default App;
