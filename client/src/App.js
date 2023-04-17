// import Auth from './components/Auth'
import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import HomePage from './HomePage';
import Navbar from './NavBar';
import { Routes, Route, Navigate } from "react-router-dom"
import MountainDisplay from './MountainDisplay';
import LeaveReviewPage from './LeaveReviewPage';
import SingleMountainDisplay from './SingleMountainDisplay';

const UserContext = React.createContext(null);



function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const ProtectedRoute = ({ element }) => {
    const currentUser = useContext(UserContext);
  
    if (!currentUser) {
      // Redirect to home page if user is not logged in
      return <Navigate to="/" />;
    }
    return element;
  };
  
  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
      })
    .catch((e) => console.error(e))
  }, []) 
 
  if (currentUser === null) return <HomePage setCurrentUser={setCurrentUser} />

  if (!currentUser) return<HomePage setCurrentUser={currentUser} />
  return (
    <UserContext.Provider value={currentUser}>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <HomePage setCurrentUser={setCurrentUser}/>} />    
        <Route exact path="/mountains" element={<ProtectedRoute element={<MountainDisplay />} />} />
        <Route exact path="/leaveAReview" element={<ProtectedRoute element={<LeaveReviewPage />} />} />
        <Route exact path="/mountain/:id" element={<ProtectedRoute element={<SingleMountainDisplay />} />} />   
      </Routes>     
    </div>
    </UserContext.Provider>
  );
}

export default App;

// import './App.css';
// import React, { useState, useEffect, useContext } from 'react';
// import HomePage from './HomePage';
// import Navbar from './NavBar';
// import { Routes, Route, useHistory } from "react-router-dom"
// import MountainDisplay from './MountainDisplay';
// import LeaveReviewPage from './LeaveReviewPage';
// import SingleMountainDisplay from './SingleMountainDisplay';

// // Create a context to hold the user object
// const UserContext = React.createContext(null);

// function App() {
//   const [currentUser, setCurrentUser] = useState('');
//   const history = useHistory();

//   useEffect(() => {
//     fetch('/auth')
//       .then(res => {
//         if (res.ok) {
//           res.json().then(user => setCurrentUser(user));
//         }
//       })
//       .catch((e) => console.error(e));
//   }, []);

//   function isAuthenticated() {
//     return !!currentUser;
//   }

//   function AuthWrapper({ children }) {
//     if (!isAuthenticated()) {
//       history.push('/');
//     }

//     return children;
//   }

//   if (!currentUser) return <HomePage setCurrentUser={setCurrentUser} />
//   return (
//     <UserContext.Provider value={currentUser}>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<HomePage setCurrentUser={setCurrentUser} />} />
//           <Route path="/"
//             element={
//               <AuthWrapper>
//                 <Route exact path="/mountains" element={<MountainDisplay />} />
//                 <Route exact path="/leaveAReview" element={<LeaveReviewPage />} />
//                 <Route exact path="/mountain/:id" element={<SingleMountainDisplay />} />
//               </AuthWrapper>
//             }
//           />
//         </Routes>
//       </div>
//     </UserContext.Provider>
//   );
// }

// export default App;
