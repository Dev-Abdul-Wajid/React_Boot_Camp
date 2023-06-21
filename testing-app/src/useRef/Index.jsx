import { useState, useRef } from 'react';

const Index = () => {
  // Declaring refs with initial value...
  const clickedRef = useRef(0);

  // Declaring state with initial value...
  const [clicked, setClicked] = useState(0);


  // INTRO...

  // // Get refs...
  // console.log(clickedRef);

  // // Update refs value...
  // clickedRef.current = 2;

  // // Get refs value...
  // console.log(clickedRef.current);


  // EXAMPLE...
  const handleClick = () => {
  //   clickedRef.current = clickedRef.current + 1;
  //   alert('You clicked ' + clickedRef.current + ' times!');


  //   setClicked(clicked + 1);
  //   alert('You clicked ' + clicked + ' times!');
  };

  // console.log('RERENDERING')

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
};

export default Index;
