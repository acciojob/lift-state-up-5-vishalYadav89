import React from 'react';

const LoginForm = ({ isLoggedIn, onLogin, onLogout, username, password, setUsername, setPassword }) => {
  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <p>You are logged out</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={onLogin}>Login</button>
        </div>
      ) : (
        <div>
          <p>Welcome {username}! You are logged in!</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
