import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import HomePage from './HomePage';
import Navbar from './NavBar';
import { Routes, Route, useNavigate } from "react-router-dom"
import MountainDisplay from './MountainDisplay';
import LeaveReviewPage from './LeaveReviewPage';
import SingleMountainDisplay from './SingleMountainDisplay';


export const UserContext = createContext(null);

function App() {
  const [currentUser, setCurrentUser] = useState('')
  const navigate = useNavigate();

  
  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
      })
    .catch((e) => console.error(e))
  }, []) 
 


  if(!currentUser) return (<HomePage setCurrentUser={currentUser} />)
  
  return (
    <UserContext.Provider value={currentUser}>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <HomePage setCurrentUser={setCurrentUser}/>} />    
        <Route exact path="/mountains" element={<MountainDisplay />}  />
        <Route exact path="/leaveAReview" element={<LeaveReviewPage />} />
        <Route exact path="/mountain/:id" element={<SingleMountainDisplay />} />   
      </Routes>     
    </div>
    </UserContext.Provider>
  );
}

export default App;

