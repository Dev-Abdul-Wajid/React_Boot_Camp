import React from 'react';

function SixthComponent({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <p style={{ fontSize: '25px' }}>{user.name}</p>
          <p style={{ fontSize: '16px' }}>{user.title}</p>
        </div>
      ))}
    </div>
  );
}

export default SixthComponent;
