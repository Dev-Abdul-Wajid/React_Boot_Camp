import React, { useState } from 'react';
import FirstComponent from './FirstComponent';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('logged out');
  const [formErrors, setFormErrors] = useState([]);

  const handleLogin = () => {
    const errors = validateForm();
    if (errors.length > 0) {
      setFormErrors(errors);
    } else {
      if (username === 'admin' && password === 'password') {
        setLoginStatus('logged in');
        setFormErrors([]);
      } else {
        setFormErrors(['Wrong credentials']);
      }
    }
  };

  const handleLogout = () => {
    setLoginStatus('logged out');
    setUsername('');
    setPassword('');
    setFormErrors([]);
  };

  const validateForm = () => {
    let errors = [];
    if (username.trim() === '') {
      errors.push('Username is required');
    }
    if (password.trim() === '') {
      errors.push('Password is required');
    }
    return errors;
  };

  return (
    <div className='mt-5'>
      {loginStatus === 'logged out' && (
        <>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className='btn btn-success' onClick={handleLogin}>Login</button>
          {formErrors.length > 0 &&
            formErrors.map((error, index) => (
              <p key={index} style={{ color: 'red' }}>
                {error}
              </p>
            ))}
        </>
      )}
      {loginStatus === 'logged in' && (
        <div>
          <FirstComponent />
          <button className='btn btn-dark mt-4' onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Login;