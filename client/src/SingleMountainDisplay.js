import React, { useState, useEffect } from "react";
import ReviewItem from "./ReviewItem";
import { useParams } from "react-router-dom"

function SingleMountainDisplay(){
  const match = useParams()
  const mountainId = match.id
  const [mountain, setMountain] = useState([])
  const [reviews, setReviews] = useState([])

   useEffect(() => {
        fetch(`/mountains/${mountainId}`)
        .then((r) => r.json())
        .then((mountainRes) =>{
            setMountain(mountainRes)
            console.log(mountainRes, mountainRes.reviews)
            if(mountainRes && mountainRes.reviews){               
                setReviews(mountainRes.reviews)                
                console.log(reviews, mountainRes.reviews)                
            }
        })        
        .catch((error) => console.log(error))
    }, [])

   
    

    const handleDeleteReview = (deletedReviewId) => {
        console.log("Yes this is hitting", JSON.parse(JSON.stringify(reviews)), deletedReviewId, reviews)
        const updatedReviews = reviews.filter((review) => review.id !== deletedReviewId);
        setReviews(updatedReviews);
    }

    function handleUpdateReview(updatedReviewId){
        const updatedReviewList = reviews.filter((review) => {
            return updatedReviewId !== review.id
        }) 
        setReviews(updatedReviewList)
    }

   

    const renderedReviews = reviews.map((review) => (
        <ReviewItem key={review.id} id={review.id} body={review.body} username={review.username} handleDeleteReview={handleDeleteReview} handleUpdateReview={handleUpdateReview} />
      ))
    
   

    return (
        <div>
            <body className="mountain-body">
            <div>
           <h1 className="single-mountain-name">Reviews for {mountain.name} {mountain.location}</h1>
           </div>
           <div>
            {renderedReviews}
           </div>
           </body>
        </div>
    )
}

export default SingleMountainDisplay