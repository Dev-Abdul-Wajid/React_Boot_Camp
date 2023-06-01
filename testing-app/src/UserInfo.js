import React, { useState } from 'react';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <h3>User info</h3>
      <div>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
    </div>
  );
};

export default UserInfo;
