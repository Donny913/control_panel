import React, { Component } from 'react';
import { ThemeProvider, withStyles, Arwes, Button } from 'arwes';
import basicStylesTheme from './theme';

const CustomText = withStyles(theme => ({
  customText: { color: theme.customColors.main }
}))(props => <div className={props.classes.customText}>wow</div>);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={basicStylesTheme}>
        <Arwes>
          <Button>Click me</Button>
          <CustomText />
        </Arwes>
      </ThemeProvider>
    );
  }
}

export default App;
