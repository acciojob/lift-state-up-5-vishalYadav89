import React from 'react'

function LoginForm({isLoggedIn , handleLogin}) {
    const handleSubmit =(event) =>{
        event.preventDefault();
        onLogin();
    }

    if(isLoggedIn){
        return <h2>Login Successful ! Welcome.</h2>
    }
  return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor ="username">Username : </label>
                <input 
                    id="username"
                    type="text"
                    placeholder = "enter user name : "
                    required
                />
            </div>

            <div>
                <label htmlFor="password"> password </label>
                <input 
                    id="password"
                    type="password"
                    placeholder="enter your password : "
                    required
                />
            </div>

            <button type = "submit">Login</button>

        </form>


  )
}

export default LoginForm
