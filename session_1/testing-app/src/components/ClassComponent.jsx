import React from 'react';

// First class component
class ClassComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Child Component</h1>
        <p>Inner component</p>
      </div>
    );
  }
}

export default ClassComponent;
