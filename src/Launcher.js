import React, { Component } from 'react';
import { ThemeProvider } from 'arwes';
import basicStylesTheme from './theme';
import App from './App';

class Launcher extends Component {
  render() {
    return (
      <ThemeProvider theme={basicStylesTheme}>
        <App />
      </ThemeProvider>
    );
  }
}

export default Launcher;
