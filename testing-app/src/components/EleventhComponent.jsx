import React from 'react';

// Eleventh class component componentDidUpdate hook
class EleventhComponent extends React.Component {
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

  // Use to fetch data base on new props, state value by comparing them with old values...
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot);
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

export default EleventhComponent;
