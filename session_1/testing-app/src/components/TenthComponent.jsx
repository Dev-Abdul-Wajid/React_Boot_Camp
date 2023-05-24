import React from 'react';

// Tenth class component shouldComponentUpdate hook
class TenthComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log('constructor RUN');
    this.state = { count: 0, };
  }

  static getDerivedStateFromProps(propsObj, stateObj) {
    console.log('getDerivedStateFromProps RUN');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount RUN');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    if (nextState.count !== this.state.count) {
      return true;
    }
    return false;
  }

  handleClick = () => {
    // this.setState({ count: this.state.count + 1 });

    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    console.log('render RUN');
    const { count } = this.state;

    return (
      <div className="App">
        <h1>My Component</h1>
        <p>Count: {count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default TenthComponent;
