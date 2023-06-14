import React, { useState, useCallback, useMemo } from "react";
import List from './List'
import Child from "./Child";


const Example8 = () => {
	const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const incrementCount = useCallback(() => {
		console.log("incrementCount")
    setCount1(prevCount1 => prevCount1 + 1);
  }, [count]);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count1}</p>
      <Child onIncrement={incrementCount}/>
    </div>
  );

	// const MemoizedComponent = useCallback(() => {
  //   // Your functional component logic here
  //   return <div>My MemoizedComponent</div>;
  // }, []);

  // return (
  //   <div>
  //     <h1>Parent Component</h1>
  //     <MemoizedComponent />
  //   </div>
  // );

}

export default Example8;


