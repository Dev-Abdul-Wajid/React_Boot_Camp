import React from 'react';

// Fourth class component to create state without using constructor hook...
class FourthComponent extends React.Component {
  state = { message: "Hardcoded value" };

  // stateTwo = { secondMessage: "Google is here and" };

  incrementCounter = (value) => {
    this.setState({ message: value });

    // console.log(this);
    // this.setStateTwo({ secondMessage: value });
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

export default FourthComponent;
