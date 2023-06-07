import React from 'react';

// Second class component to demonstrate one-way data flow
class SecondComponent extends React.Component {
  render() {
    console.log(this);
    console.log(this.props);

    return (
      <div className="App">
        <h1>Second Component</h1>
        <h2>User Details</h2>

        <p>Age: {this.props.age}</p>
        <p>Name: {this.props.name}</p>
        <p>Gender : {this.props.gender}</p>
        <p>Second Name: {this.props.secondName}</p>
      </div>
    );
  }
}

export default SecondComponent;
