import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './Routing/Home';
import NotFound from './Routing/NotFound';
import Users from './Routing/Users';
import User from './Routing/User';
import QueryParams from './Routing/QueryParams';

import ThemeProvider from './contextApi/ThemeProvider';
import Header from './contextApi/Header';
import Content from './contextApi/Content';
import Prop from './contextApi/Prop';


// CONDITIONAL RENDERING...
// import LoginForm from './auth/LoginForm';
// import FirstComponent from './auth/FirstComponent';

// USE EFFECT HOOK...
// import Intro from './useEffect/Intro';
// import Example1 from './useEffect/Example1';
// import Example2 from './useEffect/Example2';
// import Example3 from './useEffect/Example3';
// import Example4 from './useEffect/Example4';
// import Example5 from './useEffect/Example5';

// MEMO COMPONENT...
// import Example6 from './memo/Example6';

// USEMEMO HOOK...
// import Example7 from './memo/Example7';

// USECALLBACK HOOK...
// import Intro from './useCallback/Intro';
// import Example8 from './useCallback/Example8';
// import Example9 from './useCallback/Example9';
// import Example10 from './useCallback/Example10';


// USEREF HOOK...
// import Index from './useRef/Index';
// import FocusTextInput from './useRef/FoxusTextInput';
// import PlayPauseVideo from './useRef/PlayPauseVideo';

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

      {/* USEMEMO HOOK */}
      {/* <Example7 /> */}

      {/* USECALLBACK HOOK */}
      {/* <Intro /> */}
      {/* <Example8 /> */}
      {/* <Example9 /> */}
      {/* <Example10 /> */}

      {/* USEREF HOOK */}
      {/* <Index /> */}
      {/* <FocusTextInput /> */}
      {/* <PlayPauseVideo /> */}
      {/* <Home />
      <NotFound /> */}

      {/* Routing and navigation */}
      {/* <Users /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/params" element={<QueryParams />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
      <ThemeProvider>
        <Header />
        <Content />
      </ThemeProvider>
      {/* <Prop /> */}
    </div>
  );
}

export default App;
