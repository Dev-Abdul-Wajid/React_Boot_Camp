import React, { useState, useEffect } from 'react';
// import FifthComponent from './FifthComponent';
// import SixthComponent from './SixthComponent';


function FourthComponent() {
  const [userInput, setUserInput] = useState('');
  const [users, setUsers] = useState([
    {
      name: 'Luffy',
      age: 19,
      title: 'King Of Pirates'
    },
    {
      name: 'Naruto',
      age: 34,
      title: 'Hokage'
    },
    {
      name: 'Lelouch',
      age: 20,
      title: 'Zero'
    }
  ]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleAddUser = () => {
    if (userInput.trim() !== '') {
      const newUser = {
        name: userInput,
        age: '',
        title: ''
      };
      setUsers([...users, newUser]);
      setUserInput('');
    }
  };

	useEffect(() => {
		console.log("maddy")
	})
  return (
      <FifthComponent
        handleInputChange={handleInputChange}
        handleAddUser={handleAddUser}
        userInput={userInput}
      />
      <SixthComponent users={users} />
  );
}

export default FourthComponent;
