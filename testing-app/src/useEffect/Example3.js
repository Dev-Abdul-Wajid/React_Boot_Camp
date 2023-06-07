import { useEffect, useState } from "react";

const Example3 = () => {

  //JS References  -> scalars vs references

  const handleClick = () => {
    console.log('1 === 1', 1 === 1);     //primitive values
    console.log('"a" === "a"', "a" === "a");   //primitive values
    console.log('{a: 1} === {a: 1}', {a: 1} === {a: 1});
    console.log('[1] === [1]', [1] === [1]);

    const obj = {a: 1};
    console.log('obj === obj', obj === obj);
  }

  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default Example3;