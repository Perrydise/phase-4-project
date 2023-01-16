import React, { useState } from "react";

function LogIn ({setCurrentUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
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
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)} />
        <label htmlFor="password">Password</label>
      </form>
    )
        
}