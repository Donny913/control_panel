import React, { Component } from 'react';
import { Arwes, Button, Frame } from 'arwes';

import './styles.css';

const background = 'https://i.pinimg.com/originals/d7/8d/40/d78d4069da54ade6085b7d540cfde597.jpg';

class Launcher extends Component {
  state = {
    show: true
  };

  render() {
    const { show } = this.state;
    return (
      <Arwes background={background}>
        <div className="center btns-panel">
          <Button animate className="button">
            &#8592;
          </Button>
          <div className="center vertical">
            <Button animate className="button">
              &#8593;
            </Button>
            <Button animate className="button">
              &#8595;
            </Button>
          </div>
          <Button animate className="button">&#8594;</Button>
        </div>
        <Frame
          show={show}
          animate
          level={3}
          corners={4}
          layer="primary"
        >
          <div style={{ padding: '20px 40px', fontSize: '32px' }}>
            Cyberpunk
          </div>
        </Frame>
      </Arwes>
    );
  }
}

export default Launcher;
