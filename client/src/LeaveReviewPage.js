import React, {useEffect, useState} from "react";
import NewMountainForm from "./NewMountainForm";
import ReviewForm from "./ReviewForm";

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

    

    function onMountainFormSubmit(newMountain) {
        setMountains([...mountains, newMountain])
    }

    function onReviewFormSubmit(newReview) {
        setReviews([...reviews, newReview])
    }

    return(
        <div className="search_div">
        <body className="leave-review-page">
        <h1 className="search-header">Leave a review</h1>
        <h2 className="search-second-header">Please fill out our form to add your review to the page!</h2>
        <ReviewForm mountainData={mountains} onReviewFormSubmit={onReviewFormSubmit} />
        {isShown && 
            <NewMountainForm onMountainFormSubmit={onMountainFormSubmit} />
        }
        <button onClick={handleClick}>Didn't see your mountain?</button>
        </body>
    </div>
    )
}

export default LeaveReviewPage