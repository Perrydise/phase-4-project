// import Auth from './components/Auth'
import './App.css';
import { useState, useEffect } from 'react';
import LogIn from './SignUp';
import SignUp from './SignUp';

function App() {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(()=>{
    fetch('/auth')
    .then(res => {
        res.json().then(user => setCurrentUser(user))
      }
    )
    .catch((e) => console.error(e))
  },[])

  if (!currentUser) return<SignUp setCurrentUser={currentUser} />
  return (
    <SignUp setCurrentUser={setCurrentUser}/>
  );
}

export default App;
