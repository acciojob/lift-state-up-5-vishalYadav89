import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from './LoginForm.jsx';

const App = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  
  const handleLogin = ()=>{
    setIsLoggedIn(true);
  };
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Lift State Demo</h1>
        <LoginForm
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
        />
    </div>
  )
}

export default App
