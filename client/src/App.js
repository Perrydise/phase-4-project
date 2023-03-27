// import Auth from './components/Auth'
import './App.css';
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import Navbar from './NavBar';
import { Routes, Route } from "react-router-dom"
import MountainDisplay from './MountainDisplay';
import LeaveReviewPage from './LeaveReviewPage';

function App() {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
      })
    .catch((e) => console.error(e))
  },[])

  if (!currentUser) return<HomePage setCurrentUser={currentUser} />
  return (
    <div>
      <Navbar />
      <Routes>
      <Route exact path="/" element={ <HomePage setCurrentUser={setCurrentUser}/>} />
      <Route exact path="/mountains" element={ <MountainDisplay /> } />
      <Route exact path="/leaveAReview" element={ <LeaveReviewPage /> } />
      </Routes>
      
    
    </div>
  );
}

export default App;
