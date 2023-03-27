import React from "react"
// import {Redirect} from 'react-router-dom'

function Logout() {

    function handleLogout() {
        localStorage.clear()
        return (
        // 
        window.location = `/`
        )
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )

}

export default Logout