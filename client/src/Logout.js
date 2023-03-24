import React from "react"

function Logout() {

    function handleLogout() {
        localStorage.clear()
        return <Redirect to="/home" />
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )

}

export default Logout