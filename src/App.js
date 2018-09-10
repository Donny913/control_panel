import React, { Component } from 'react';
import { ThemeProvider, withStyles, Arwes, Button } from 'arwes';
import basicStylesTheme from './theme';

const background = 'https://i.pinimg.com/originals/d7/8d/40/d78d4069da54ade6085b7d540cfde597.jpg';
// const background =

const CustomText = withStyles(theme => ({
  customText: { color: theme.customColors.main }
}))(props => <div className={props.classes.customText}>wow</div>);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={basicStylesTheme}>
        <Arwes background={background}>
          <Button>Click me</Button>
          <CustomText />
        </Arwes>
      </ThemeProvider>
    );
  }
}

export default App;
