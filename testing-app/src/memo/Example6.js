import Greeting from './Greeting';

import { useState } from 'react';

const Example6 = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <>
      <div style={{ marginBottom: 40 }}>
        <label>Name :</label>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div style={{ marginBottom: 40 }}>
        <label>Address :</label>
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </div>

      <Greeting name={name} />
    </>
  );
};

export default Example6;
