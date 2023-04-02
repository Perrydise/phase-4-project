import React, { useState, useEffect } from "react";
import ReviewItem from "./ReviewItem";
import { useParams } from "react-router-dom"

function SingleMountainDisplay(){
  const match = useParams()
  const mountainId = match.id
  const [mountain, setMountain] = useState([])
  const [mapReviews, setMapReviews] = useState([])

   useEffect(() => {
        fetch(`/mountains/${mountainId}`)
        .then((r) => r.json())
        .then((mountainRes) =>{
            setMountain(mountainRes)
            console.log(mountainRes, mountainRes.reviews)
            if(mountainRes && mountainRes.reviews){
                const singleMountainData = mountainRes.reviews.map((element, index) => {
                    console.log(element)
                    const id = element.id
                    const body = element.body
                    const username = element.username
                    return (
                        <ReviewItem key={index} id={id} body={body} username={username} />
                    )
                })
                console.log(singleMountainData)
                setMapReviews(singleMountainData)
            }
        })        
        .catch((error) => console.log(error))
    }, [])
    
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
            {mapReviews}
           </div>
        </div>
    )
}

export default SingleMountainDisplay