import { useRef } from 'react';

const FocusTextInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    console.log(inputRef.current);

    inputRef.current.focus();
  }

  const handleBlur = () => {
    console.log(inputRef);

    inputRef.current.blur();
  };

  return (
    <>
      <h1>Focus/Blur Text input</h1>

      <br />
      <br />

      {/* <input ref={inputRef} placeholder='Please enter any value...'/> */}

      <br />
      <br />
      <br />

      <button onClick={handleFocus}>Focus the input</button>
      <button onClick={handleBlur}>Blur the input</button>
    </>
  );
};

export default FocusTextInput;
