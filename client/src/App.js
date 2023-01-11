// import Auth from './components/Auth'
import './App.css';
import { useState, useEffect } from 'react';
import LogIn from './LogIn';

function App() {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  if (!currentUser) return<LogIn setCurrentUser={setCurrentUser} />
  return (
    <LogIn />
  );
}

export default App;
