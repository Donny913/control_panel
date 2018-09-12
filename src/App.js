import React, { Component } from 'react';
import { Arwes, Button, Frame, Loading, Heading } from 'arwes';

const background = 'https://i.pinimg.com/originals/d7/8d/40/d78d4069da54ade6085b7d540cfde597.jpg';

const AutomaticUI = () => <div className="automatic-ui-wrapper center"><Loading /></div>;


const ManualUI = () => (
  <div className="center btns-panel">
    <Button animate className="button">
    &#8592;
    </Button>
    <div className="center vertical">
      <Button animate className="button center">
      &#8593;
      </Button>
      <Button animate className="button">
      &#8595;
      </Button>
    </div>
    <Button animate className="button">
    &#8594;
    </Button>
  </div>
);
class App extends Component {
  state = {
    mode: 'manual'
  };

  setMode = mode => this.setState({ mode });

  setAutomatic = () => this.setMode('automatic');

  setManual = () => this.setMode('manual');

  getBtnsProps = type => this.state.mode === type ? { disabled: true } : { disabled: false }

  render() {
    const { mode } = this.state;
    return (
      <Arwes background={background}>
        <div className="center btns-checker">
          <div className="btns-checker__header">
            <Heading node="h4">
              mode:
              {' '}
              {mode}
            </Heading>
          </div>
          <Button {...this.getBtnsProps('automatic')} onClick={this.setAutomatic}>
            Automatic
          </Button>
          <Button {...this.getBtnsProps('manual')} style={{ width: '110px' }} onClick={this.setManual}>
            Manual
          </Button>
        </div>
        {mode === 'automatic' ? <AutomaticUI /> : <ManualUI />}
        {/* <Frame
          show={show}
          animate
          level={3}
          corners={4}
          layer="primary"
        >
          <div style={{ padding: '20px 40px', fontSize: '32px' }}>
            Cyberpunk
          </div>
        </Frame> */}
      </Arwes>
    );
  }
}

export default App;
