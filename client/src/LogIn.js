function LogIn () {


  
    return (
        function handleSubmit(e) {
            e.preventDefault()
            const user = {
              username,
              password
            }
            fetch('/users',{
              method: "POST",
              headers:{'Content-type':'application/json'},
              body:JSON.stringify(user)
            })
            .then((r) => r.json())
            .then((user) => setCurrentUser(user))
          }
    )
}