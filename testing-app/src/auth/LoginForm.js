import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate the form
    if (!username || !password) {
      setFormErrors({ username: !username ? 'Username is required' : '', password: !password ? 'Password is required' : '' });
      return;
    }

    // Check the credentials
    if (username === 'admin' && password === 'password') {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
      setFormErrors({ login: 'Incorrect username or password' });
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setLoginStatus(false);
    setFormErrors({});
  };

  if (loginStatus) {
    return (
      <div>
        <h2>Welcome!</h2>
        <p>Abi to training shuru hui hai</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {formErrors.username && <p style={{ color: 'red' }}>{formErrors.username}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {formErrors.password && <p style={{ color: 'red' }}>{formErrors.password}</p>}
      </div>
      {formErrors.login && <p style={{ color: 'red' }}>{formErrors.login}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
