import React, { useCallback, useState, useEffect, useMemo } from 'react';

const Intro = () => {
  const [count, setCount] = useState(0);



  // const setCountt = () => {
  //   setCount(count + 1)
  // }

  const handleClick = useCallback(() => {
    console.log("checking")
    setCount(prevCount => prevCount + 1);
  }, []);


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Intro;
