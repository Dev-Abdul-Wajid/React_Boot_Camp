import './App.css';
import React from 'react';
// import FirstComponent from './components/FirstComponent';
// import ThirdComponent from './components/Third Component';
// import SecondComponent from './components/SecondComponent';
// import FourthComponent from './components/FourthComponen';
// import FifthComponent from './components/FifthComponent';
// import SixthComponent from './components/SixthComponent';
// import SeventhComponent from './components/SeventhComponent';
// import EighthComponent from './components/EighthComponent';

// import { getYourName } from './util/helper';

class App extends React.Component {
  render() {
    // const gender = 'Male';

    return (
      <div className="App">
        <h1>REACT BOOT CAMP SESSION 1</h1>


        {/* Create your first react component
        <FirstComponent /> */}

        {/* Passing props to component
        <SecondComponent
          age={25}
          name="John"
          gender={gender}
          secondName={getYourName()}
        /> */}

        {/* TWO-WAY binding in react
        <ThirdComponent onMessageChange={() => console.log('On message change')}/> */}

        {/* Create your first state in a component without using hook
        <FourthComponent /> */}

        {/* Create your first state in a component with using hook
        <FifthComponent /> */}


        {/* HOOKS */}

        {/* CONSTRUCTOR
        <SixthComponent value={5} /> */}

        {/* getDerivedStateFromProps
        <SeventhComponent value={5} /> */}

        {/* render
        <EighthComponent /> */}
      </div>
    );
  }
}

export default App;
