import React, {useState} from "react";

function MountainItem({ key, id, name, location, handleDeleteMountain }) {

    // const [formName, setFormName] = useState(name)
    // const [formLocation, setFormLocation] = useState(location)

    // function handleName(event) {
    //     setFormName(e.target.value)
    // }

    // function handleLocation(event) {
    //     setFormLocation(e.target.value)
    // }

    function handleDeleteClick() {
        fetch(`http://localhost:3000/mountain/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => handleDeleteMountain(id))
    }

    return (
    <div className="mountain-item-display">
        <ul className="list-display">
            <li key={id+"-name"}>{name}</li>
            <li key={id+"-location"}>{location}</li>
        </ul>
        <button onClick={handleDeleteClick}>Delete</button>
    </div>
        )
}

export default MountainItem