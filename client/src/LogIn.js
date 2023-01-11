import React, {useState} from "react";

function LogIn () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      const user = {
        username,
        password
      }
      fetch('/login',{
        method: "POST",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(user)
      })
      .then((r) => r.json())
      .then((user) => onLogin(user))
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password_confirmation">Confirm Password: </label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="submit">Sign up</button>
      </form>
    );
}
export default LogIn