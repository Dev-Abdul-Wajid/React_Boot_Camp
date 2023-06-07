import { useEffect, useState } from "react";

const Intro = () => {
  const [count, setCount] = useState(0);

  console.log('Outside useEffect')

  useEffect(()=>{
    // console.log('useEffect');

  })

  const addCounter = () =>{
    // console.log('event handler');
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <button onClick={addCounter}>Add Count</button>
        <h1>{count}</h1>
      </div>
    </>
  );
}

export default Intro;