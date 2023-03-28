import React, { useState } from "react";
import ReviewItem from "./ReviewItem";
import { useParams } from "react-router-dom"

function SingleMountainDisplay(){
  const match = useParams()
  const mountainId = match.id
  const [reviews, setReviews] = useState([])

   useEffect(() => {
        fetch(`/reviews`)
        .then((r) => r.json())
        .then((reviews) =>setReviews(reviews))
        .catch((error) => console.log(error))
    }, [])
    

    

    return (
        <div>
            <p>page working</p>
            {mountainId}
        </div>
    )
}

export default SingleMountainDisplay