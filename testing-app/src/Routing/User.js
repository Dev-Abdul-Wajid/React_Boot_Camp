import React, { useEffect, useState } from 'react';

const User = () => {
  const [user, setUser] = useState({name: '', age: '', gender: '', nationality: ''});

  useEffect(() => {
    const id = window.location.pathname.split("/").slice(-1);
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
  }, [])

  return (
    <div className='mt-5'>
      <h3>User info</h3>

      <ul>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
        <li>Gender: {user.gender}</li>
        <li>Nationality: {user.nationality}</li>
      </ul>
    </div>
  );
};

export default User;
