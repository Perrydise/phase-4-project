import React from "react"


function Navbar () {

  function handleLogout() {
    localStorage.clear()
    return (
    // 
    window.location = `/`
    )
}

    return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="/">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/mountains">Mountains</a>
      <a class="nav-item nav-link" href="/leaveAReview">Leave a review</a>
      <a class="nav-item nav-link" onClick={handleLogout} href="/">Logout</a>
    </div>
  </div>
</nav>

    )
}

export default Navbar