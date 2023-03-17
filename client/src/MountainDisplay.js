import React, { useEffect, useState} from "react";
import MountainItem from "./MountainItem";

function MountainDisplay(){
    const [mountains, setMountains] = useState([])

    useEffect(() => {
        fetch('/mountains')
        .then((r) => r.json())
        .then((mountains) => setMountains(mountains))
        .catch((error) => console.log(error))
    }, [])

    function handleDeleteMountain() {
        fetch(`/mountains/${mountains.id}`,{
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok){
                console.log(res)
            } else {
                res.json().then(console.log)
            }
        })
    }

    function onMountainFormSubmit(newMountain) {
        setMountains([...mountains, newMountain])
    }

    const data = Array.from(mountains)

    const dataDisplay = data.map((element, index) => {
        console.log(mountains)
        const id = element.id
        const name = element.name
        const location = element.location
        return (
            <MountainItem key={index} id={id} name={name} location={location} handleDeleteMountain={handleDeleteMountain}/>
        )
    })

    

    return (
        <div className="mountain-display-div">
            <h3 className="display-header">Leave a review on a mountain you have been to!</h3>
            {dataDisplay}
        </div>
    )
}

export default MountainDisplay