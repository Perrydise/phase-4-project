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
                // const singleMountainData = mountainRes.reviews.map((element, index) => {
                //     console.log(element)
                //     const id = element.id
                //     const body = element.body
                //     const username = element.username
                //     return (
                //         <ReviewItem key={index} id={id} body={body} username={username} handleDeleteReview={handleDeleteReview} />
                //     )
                // })
                setReviews(mountainRes.reviews)
                
                // console.log(singleMountainData)
                
                console.log(reviews, mountainRes.reviews)
                
            }
        })        
        .catch((error) => console.log(error))
    }, [])

    // useEffect(() => {
    //     fetch('/reviews')
    //     .then((r) => r.json())
    //     .then((reviews) => setReviews(reviews))
    //     .catch((error) => console.log(error))
    // }, [])  

    

    const handleDeleteReview = (deletedReviewId) => {
        console.log("Yes this is hitting", JSON.parse(JSON.stringify(reviews)), deletedReviewId, reviews)
        const updatedReviews = reviews.filter((review) => review.id !== deletedReviewId);
        setReviews(updatedReviews);
    }

    // function mapReturn(arrayReviews) {
    //     return arrayReviews.map((element) => {
    //         console.log(element)
    //         const id = element.id
    //         const body = element.body
    //         const username = element.username
    //         return (
    //             <ReviewItem key={id} id={id} body={body} username={username} handleDeleteReview={handleDeleteReview} />
    //         )
    //     })
    // }

    const renderedReviews = reviews.map((review) => (
        <ReviewItem key={review.id} id={review.id} body={review.body} username={review.username} handleDeleteReview={handleDeleteReview} />
      ))
    
    // const singleMountainData = mountain.reviews.map((element, index) => {
    //     console.log(mountain)
    //     const id = element.id
    //     const body = element.body
    //     const username = element.username
    //     return (
    //         <ReviewItem key={index} id={id} body={body} username={username} />
    //     )
    // }) 
    // console.log(mountain)

    return (
        <div>
            <div>
           <h1 className="single-mountain-name">Reviews for {mountain.name} {mountain.location}</h1>
           </div>
           <div>
            {renderedReviews}
           </div>
        </div>
    )
}

export default SingleMountainDisplay