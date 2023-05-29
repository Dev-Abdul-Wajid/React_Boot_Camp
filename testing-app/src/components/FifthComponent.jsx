import React from 'react';

// Fifth class component to create state using constructor hook...
class FifthComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hardcoded value 1"
    };

    // this.stateTwo = {
    //   messageTwo: "Hardcoded value 2"
    // }
  }

  incrementCounter = (value) => {
    this.setState({ message: value });

    console.log(this.stateTwo);
  };

  render() {
    return (
      <div className="App">
        <h1>Text Field</h1>
        <input type="text" value={this.state.message} onChange={this.incrementCounter} />
      </div>
    );
  }
}

export default FifthComponent;
