import React from 'react';
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
