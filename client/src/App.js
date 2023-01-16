// import Auth from './components/Auth'
import './App.css';
import { useState, useEffect } from 'react';
import LogIn from './SignUp';
import SignUp from './SignUp';
import HomePage from './HomePage';

function App() {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(()=>{
    fetch("http://localhost:3000/auth")
    .then(res => {
        res.json().then(user => setCurrentUser(user))
      }
    )
    .catch((e) => console.error(e))
  },[])

  if (!currentUser) return<HomePage setCurrentUser={currentUser} />
  return (
    <HomePage setCurrentUser={setCurrentUser}/>
  );
}

export default App;
