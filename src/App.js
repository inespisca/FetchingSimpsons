import React, { Component } from 'react';
import './App.css';
import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        randomQuote: {}
      };
  }

  getQuote = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          randomQuote: data[0],
        });
      });
  }

  render() {
    return (
      <>
      <GenerateQuote selectQuote={this.getQuote} />
      <DisplayQuote randomQuote={this.state.randomQuote} />
      </>
    )
  }
};

export default App;