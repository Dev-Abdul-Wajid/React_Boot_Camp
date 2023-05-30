import React from 'react';

function FifthComponent({ handleInputChange, handleAddUser, userInput }) {
  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter a name"
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default FifthComponent;

// Essentially, by passing these functions as props from the parent component to the child component, the child component can trigger these functions and communicate with the parent component. This allows the child component to notify the parent component about certain events (such as user input changes or button clicks) and pass relevant data to the parent for further processing.
