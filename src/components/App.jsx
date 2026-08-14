import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from './LoginForm.jsx';

const App = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = ()=>{
    if(username && password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter username and password');
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Lift State Demo</h1>
        <LoginForm
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
    </div>
  )
}

export default App
