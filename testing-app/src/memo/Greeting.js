import { memo, useState } from 'react';

const Greeting = ({ name }) => {
  const [greeting, setGreeting] = useState('Hello');

  console.log("Greeting was rendered at", new Date().toLocaleTimeString());

  return (
    <>
      <h3>{greeting}{name && ', '}{name}!</h3>

      <label>
        <input
          type="radio"
          checked={greeting === 'Hello'}
          onChange={e => setGreeting('Hello')}
        />
        Regular greeting
      </label>
      <label>
        <input
          type="radio"
          checked={greeting === 'Hello and welcome'}
          onChange={e => setGreeting('Hello and welcome')}
        />
        Enthusiastic greeting
      </label>
    </>
  );
};

export default memo(Greeting);

// Class component shouldComponentUpdate(nextProps)

// const arePropsEqual = (oldProps, newProps) => {
//   console.log(oldProps, newProps);

  // return true;
  // return oldProps?.name === newProps?.name;
// };

// export default memo(Greeting, arePropsEqual);
