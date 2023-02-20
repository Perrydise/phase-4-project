import React, {useState} from "react";

function SignUp ({ setCurrentUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    
    function handleSubmit(e) {
      e.preventDefault()
      const user = {
        username,
        password
      }
      fetch("http://localhost:3000/users",{
        method: "POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(user)
      })      
      .then(res => {
        res.json()
        if(res.ok){
          res.json().then(setCurrentUser(user))
        } else {
          res.json().then( e => console.error(e))
        }
      }).then ((res) => console.log(res))
      console.log(user)
      setUsername("")
      setPassword("")
    }
  
    return (     
      <form onSubmit={handleSubmit}>
        <label for="username">Username: </label>
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
        <label for="password_confirmation">Confirm Password: </label>
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
export default SignUp