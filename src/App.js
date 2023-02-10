import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'click me'
    };
  }

  //handler goes here
  handleButtonClick = () => {
    this.setState(prevState => ({
      buttonText: prevState.buttonText === 'click me' ? 'thanks' : 'click me'
    }));
  };
  
  render() {
    return (
      <div>
        <p>Greetings!</p>
        <button onClick={this.handleButtonClick}>{this.state.buttonText}</button>
      </div>
    );
  }
}
