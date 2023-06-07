import React from 'react';

// Eighth class component render hook
class EighthComponent extends React.Component {
  render() {
    const name = 'John Doe';
    const message = 'Hello, World!';

    return (
      <div>
        <h1>{message}</h1>
        <p>Welcome, {name}!</p>
      </div>
    );
  }
}

export default EighthComponent;
