import React from 'react';

// Third class component to demonstrate two-way data flow
class ThirdComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Text Field</h1>
        <input type="text" value="Google" onChange={this.props.onMessageChange} />
      </div>
    );
  }
}

export default ThirdComponent;
