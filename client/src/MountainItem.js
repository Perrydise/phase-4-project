import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

function MountainItem({ key, id, name, location, handleDeleteMountain }) {
    const navigate = useNavigate()

    // const [formName, setFormName] = useState(name)
    // const [formLocation, setFormLocation] = useState(location)

    // function handleName(event) {
    //     setFormName(e.target.value)
    // }

    // function handleLocation(event) {
    //     setFormLocation(e.target.value)
    // }

    function handleDeleteClick() {
        fetch(`/mountains/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => handleDeleteMountain(id))
    }

    function handleMountainNav(){
        navigate("/mountain/"+id)
    }



    return (
    <div className="mountain-item-display">
        <ul className="list-display">            
            <li key={id+"-name"}>Mountain name: {name}</li>
            <li key={id+"-location"}>Location: {location}</li>
        </ul>
        <button onClick={handleMountainNav}>Leave a review!</button>
    </div>
        )
}

export default MountainItem