import React, {useEffect, useState} from "react";

function NewMountainForm({ onMountainFormSubmit }) {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")

    function handleName(event){
        setName(event.target.value)
    }

    function handleLocation(event){
        setLocation(event.target.value)
    }

    function handleMountainSubmit(event) {
        event.preventDefault()
        const newMountain = {
            name,
            location
        }
        fetch('/mountains', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newMountain)
        })
        onMountainFormSubmit(newMountain)
        setName("")
        setLocation("")
    }

    return (
        <form className="mountain-form" onSubmit={handleMountainSubmit}>
            <div className="mountain-div">
                <label for="mountain name">Mountain Name:</label>
                <input className="name-box" type="text" name="Mountain-name" value={name} onChange={handleName}/>
                <label for="mountain location">Mountain Location:</label>
                <input className="location-box" type="text" name="Mountain-location" value={location} onChange={handleLocation}/>
            </div>
            <input type="submit" value="Add mountain"/>
        </form>
    )
}
export default NewMountainForm