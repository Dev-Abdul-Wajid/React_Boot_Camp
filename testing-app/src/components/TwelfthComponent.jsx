import React from 'react';

// Twelfth class component componentWillUnmount hook
class TwelfthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
    this.timerId = null;
  }

  componentDidMount() {
    console.log('componentDidMount RUN');

    // Start the timer
    this.timerId = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount RUN');
    // Clear the timer before the component unmounts
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <div>
        <h1>Timer: {time} seconds</h1>
      </div>
    );
  }
}

export default TwelfthComponent;
