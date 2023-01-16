import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./LogIn"

function HomePage() {
    const [isShown, setIsShown] = useState(false)

    const handleClick = event => {
        setIsShown(current => !current)
    }

    return(
        <div className="home-main-div">
            <h1 className="home-title">Mountain View</h1>
            <h2 className="home second title">Please create an account to continue</h2>
            <SignUp />
            {isShown &&
                <Login />
            }
            <button onClick={handleClick}>Login</button>
        </div>
    )
}
export default HomePage