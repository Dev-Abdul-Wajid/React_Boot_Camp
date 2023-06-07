import React, { useState, useEffect } from "react";

const Example5 = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    // console.log('1');

    const interval = setInterval(() => {
      // console.log('2');
      setTimer(timer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Timer: {timer}</p>
    </div>
  );
};

export default Example5;
