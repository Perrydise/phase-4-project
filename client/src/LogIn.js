import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

function LogIn ({setCurrentUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()


  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
        navigate("/mountains")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    setUsername("")
    setPassword("")
  }

//   function handleSubmit(e) {
//     e.preventDefault()
//     const user = {
//       username,
//       password
//     }
//     fetch('/users',{
//       method: "POST",
//       headers:{'Content-type':'application/json'},
//       body:JSON.stringify(user)
//     })
//     .then((r) => r.json())
//     .then((user) => setCurrentUser(user))
//   }
// )
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="login-box1">
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="login-box2">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    )
        
}
export default LogIn