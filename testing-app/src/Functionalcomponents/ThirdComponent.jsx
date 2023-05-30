import React, { useState } from 'react';
  
const ThirdComponent = () => {
  const [name, setName] = useState("Muddasir Zafar");
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(true);

  console.log('checl')

  return (
    <div>
      <p>{count} Name: {name}</p>
      <button onClick={()=>{setCount(count+2);}}>Add </button>
      <button onClick={()=>{setName('Maddy');}}>Change name </button>
      <button onClick={() => setChange(!change)}>
        Click Here!
      </button>
      {change ? <h2>Use State</h2> :<h2>Genuity</h2>}
    </div>
  );
}
export default ThirdComponent;
