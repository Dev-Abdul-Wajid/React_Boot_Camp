
import './App.css';
import React, { useState } from 'react';

import Abc from './Functionalcomponents/Demo';
import FirstComponent from './Functionalcomponents/FirstComponent';
// import SecondComponent from './Functionalcomponents/SecondComponent';
// import UseState from './Functionalcomponents/ThirdComponent';
// import UseEffect from './Functionalcomponents/UseEffect';
// import FourthComponent from './Functionalcomponents/FourthComponent';


function App() {
  let value = '';
  // const [value, setValue] = React.useState('');

  const handleChange = (newValue) => {
    value = newValue;
    // setValue(newValue)
    console.log('Value updated:', value);
  };
  console.log('Value');
  return (
    <div className="App">
      <h1>REACT BOOT CAMP SESSION 2</h1>
        <Abc />
        {/* <FirstComponent name="Muddasir"/> */}
        <FirstComponent value={value} onChange={handleChange} name="Muddasir Zafar"/>
        <p>Value from Child Component: {value}</p>
        {/* <SecondComponent /> */}
        {/* <UseState /> */}
        {/* <FourthComponent/> */}
        {/* {/* <UseEffect /> */}
    </div>
  );
}

export default App;
