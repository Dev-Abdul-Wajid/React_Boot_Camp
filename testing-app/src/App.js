import './App.css';

// import FirstComponent from './auth/FirstComponent';
// import LoginForm from './auth/LoginForm';

// import Intro from './useEffect/Intro';
// import Example1 from './useEffect/Example1';
// import Example2 from './useEffect/Example2';
// import Example3 from './useEffect/Example3';
// import Example4 from './useEffect/Example4';
// import Example5 from './useEffect/Example5'

// import Example6 from './memo/Example6';

import Example7 from './memo/Example7';
import { Intro } from './useCallback/Intro';
import Example8 from './useCallback/Example8';
import Example9 from './useCallback/Example9';
import Example10 from './useCallback/Example10';

function App() {
  return (
    <div className="App">
      {/* CONDITIONAL RENDERING */}
      {/* <FirstComponent />
      <LoginForm /> */}

      {/* USE EFFECT HOOK */}
      {/* <Intro />
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
      <Example5 /> */}

      {/* MEMO COMPONENT */}
      {/* <Example6 /> */}
      {/* <Example7 /> */}
      <Intro />
      {/* <Example8 /> */}
      {/* <Example9 /> */}
      {/* <Example10 /> */}
    </div>
  );
}

export default App;
