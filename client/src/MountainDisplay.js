import React, { useEffect, useState} from "react";

function MountainDisplay(){
    const [mountains, setMountains] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/mountains")
        .then((r) => r.json())
        .then((mountains) => setMountains(mountains))
        .catch((error) => console.log(error))
    }, [])

    return (

    )
}