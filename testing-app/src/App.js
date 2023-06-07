import './App.css';
import React from 'react';
// import FirstComponent from './components/FirstComponent';
// import ThirdComponent from './components/ThirdComponent';
// import SecondComponent from './components/SecondComponent';
// import FourthComponent from './components/FourthComponent';
// import FifthComponent from './components/FifthComponent';
// import SixthComponent from './components/SixthComponent';
// import SeventhComponent from './components/SeventhComponent';
// import EighthComponent from './components/EighthComponent';
// import NinthComponent from './components/NinthComponent';
// import TenthComponent from './components/TenthComponent';
// import EleventhComponent from './components/EleventhComponent';
// import TwelfthComponent from './components/TwelfthComponent';

// import { getYourName } from './util/helper';

class App extends React.Component {
  // state = { showTwelfthComponent: false };

  // handleOnChange = () => {
  //   this.setState({ showTwelfthComponent: !this.state.showTwelfthComponent });
  // };

  render() {
    // const gender = 'Male';
    // const propsObj = {
    //   class: 'higher',
    //   grade: 'A+'
    // };

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
          {...propsObj}
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

        {/* componentDidMount
        <NinthComponent /> */}

        {/* shouldComponentUpdate
        <TenthComponent /> */}

        {/* componentDidUpdate
        <EleventhComponent /> */}

        {/* componentWillUnmount
        <input type='text' value="" onChange={this.handleOnChange} />
        {this.state.showTwelfthComponent && <TwelfthComponent />} */}
      </div>
    );
  }
}

export default App;
