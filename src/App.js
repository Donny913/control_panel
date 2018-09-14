import React, { Component } from 'react';
import { Arwes, Button, Heading } from 'arwes';
import ManualUI from './ManualUI';
import AutomaticUI from './AutomaticUI';

const background = 'https://i.pinimg.com/originals/d7/8d/40/d78d4069da54ade6085b7d540cfde597.jpg';

const commands = ['Привет, мир', 'Ура пионерам'];
const grammar = `#JSGF V1.0; grammar commands; public <command> = ${commands.join(
  ' | '
)} ;`;
class App extends Component {
  state = {
    mode: 'manual'
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.mode !== 'automatic' && this.state.mode === 'automatic') {
      this.listenToSpeech();
    }
  }

  listenToSpeech = () => {
    const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
    const SpeechGrammarListConstructor = window.SpeechGrammarList || window.webkitSpeechGrammarList;
    const recognition = new SpeechRecognitionConstructor();
    const speechRecognitionList = new SpeechGrammarListConstructor();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.lang = 'ru-RU';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (e) => {
      console.log(e.results);
      const command = e.results[e.results.length - 1][0].transcript;
      console.log(command);
    };
    recognition.onspeechend = () => {
      console.log('end recognition');
      recognition.stop();
    };
    recognition.onnomatch = () => {
      console.log(
        'didnt recognise'
      );
    };
    recognition.onerror = (event) => {
      console.log(
        event.error
      );
    };
    console.log('start recognition');
    recognition.start();
  };

  setMode = mode => this.setState({ mode });

  setAutomatic = () => this.setMode('automatic');

  setManual = () => this.setMode('manual');

  getBtnsProps = type => this.state.mode === type ? { layer: 'success' } : { disabled: false };


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
          <Button
            {...this.getBtnsProps('automatic')}
            onClick={this.setAutomatic}
          >
            Automatic
          </Button>
          <Button
            {...this.getBtnsProps('manual')}
            style={{ width: '110px' }}
            onClick={this.setManual}
          >
            Manual
          </Button>
        </div>
        {mode === 'automatic' ? <AutomaticUI /> : <ManualUI />}
      </Arwes>
    );
  }
}

export default App;
