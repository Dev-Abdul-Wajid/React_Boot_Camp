import './App.css';
import React from 'react';
import ClassComponent from './components/ClassComponent';

// First class component
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClassComponent />
      </div>
    );
  }
}

export default App;
