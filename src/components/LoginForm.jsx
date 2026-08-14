import React from 'react';

const LoginForm = ({ isLoggedIn, onLogin }) => {
  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <p>You are logged out</p>
          <button onClick={onLogin}>Login</button>
        </div>
      ) : (
        <div>
          <p>You are logged in!</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
