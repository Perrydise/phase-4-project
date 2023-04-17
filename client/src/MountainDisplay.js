import React, { useEffect, useState} from "react";
import MountainItem from "./MountainItem";

function MountainDisplay(){
    const [mountains, setMountains] = useState([])
    // const [reviews, setReview] = useState([])

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

    // function onReviewFormSubmit(newReview) {
    //     setReviews([...reviews, newReview])
    // }

    const mountainData = Array.from(mountains)

    const mountainDataDisplay = mountainData.map((element, index) => {
        console.log(mountains)
        const id = element.id
        const name = element.name
        const location = element.location
        return (
            <MountainItem key={index} id={id} name={name} location={location} handleDeleteMountain={handleDeleteMountain}/>
        )
    })

    // const reviewData = Array.from(reviews)

    // const reviewDataDisplay = reviewData.map((element, index) => {
    //     console.log(reviews)
    //     const id = element.id
    //     const body = element.body
    //     const username = element.username
    //     return (
    //         <ReviewItem key={index} id={id} body={body} username={username} reviewSubmit={onReviewFormSubmit} />
    //     )
    // })

    

    return (
        <div className="mountain-display-div">
            <h3 className="display-header">Leave a review on a mountain you have been to!</h3>
            {mountainDataDisplay}
        </div>
    )
}

export default MountainDisplay