import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./LogIn"

function HomePage({setCurrentUser}) {
    const [isShown, setIsShown] = useState(false)

    const handleClick = event => {
        setIsShown(current => !current)
    }

    return(
        <div className="home-main-div">
            <body className="home-body">
            <h1 className="home-title">Mountain View</h1>
            <h2 className="home-second-title">Please create an account to continue</h2>
            <SignUp setCurrentUser={setCurrentUser}/>
            {isShown &&
                <Login setCurrentUser={setCurrentUser} />
            }
            <button onClick={handleClick}>Login</button>
            </body>
        </div>
    )
}
export default HomePage