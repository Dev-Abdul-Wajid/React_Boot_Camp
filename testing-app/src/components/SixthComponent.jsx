import React from 'react';

// Sixth class component constructor hook
class SixthComponent extends React.Component {
  // Constructor receives props as a parameters. You can rename this parameter to anything...
  constructor(props) {
    super(props);             // If we don't do it then this.props will be undeined in constructor hook...

    this.state = { counter: 0 };

    console.log(props);

    // We will discuss event binding after functional components...
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(propsObj, stateObj) {
    console.log(propsObj, stateObj);

    // if (props.initialCounter !== state.counter) {
    //   return { counter: props.initialCounter };
    // }

    return null;
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="App">
        <h1>Sixth Component</h1>
      </div>
    );
  }
}

export default SixthComponent;
