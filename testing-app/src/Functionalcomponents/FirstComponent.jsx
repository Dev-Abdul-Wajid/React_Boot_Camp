import React from 'react';

const SecondComponent = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

function FirstComponent(props) {
  const { value, onChange } = props;

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
}

export default FirstComponent;
