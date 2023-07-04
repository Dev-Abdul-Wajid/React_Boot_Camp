import React from 'react';
import { useTheme } from "./ThemeProvider";

const Content = () => {
  const { theme, fontSize } = useTheme();

  return (
    <div className={`content ${theme}`} style={{fontSize}}>
      <p>Welcome to my app! This is the {theme} theme.</p>
    </div>
  );
};

export default Content;
