import React from 'react';

// Seventh class component getDerivedStateFromProps hook
class SeventhComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 2 };
  }

  static getDerivedStateFromProps(propsObj, stateObj) {
    console.log(propsObj, stateObj);

    if (propsObj.value !== stateObj.counter) {
      return { counter: stateObj.counter + 3, secondCounter: 2 };
    }

    return null;
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <h1>Seventh Component</h1>
      </div>
    );
  }
}

export default SeventhComponent;
