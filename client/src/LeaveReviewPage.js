import React, {useEffect, useState} from "react";
import NewMountainForm from "./NewMountainForm";

function LeaveReviewPage() {
    const [mountains, setMountains] = useState([])
    const [reviews, setReviews] = useState([])
    const [isShown, setIsShown] = useState(false)

    const handleClick = event => {
        setIsShown(current => !current)
    }

    useEffect(() => {
        fetch(`/mountains`)
        .then((r) => r.json())
        .then((mountains) => setMountains(mountains))
        .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        fetch(`/reviews`)
        .then((r) => r.json())
        .then((reviews) =>setReviews(reviews))
        .catch((error) => console.log(error))
    }, [])

    function onMountainFormSubmit(newCar) {
        setCars([...cars, newCar])
    }

    function onReviewFormSubmit(newDealer) {
        setDealers([...dealers, newDealer])
    }

    return(
        <div className="search_div">
        <h1 className="search-header">Leave a review</h1>
        <h2 className="search-second-header">Please fill out our form to add your review to the page!</h2>
        <ReviewForm mountainData={mountains} onReviewFormSubmit={onReviewFormSubmit} />
        {isShown && 
            <NewMountainForm onMountainFormSubmit={onMountainFormSubmit} />
        }
        <button onClick={handleClick}>Didn't see your mountain?</button>
    </div>
    )
}

export default LeaveReviewPage