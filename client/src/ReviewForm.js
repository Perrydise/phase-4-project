import React, {useState} from "react";

function ReviewForm({ mountainData, onReviewFormSubmit }) {
    const [body, setBody] = useState("")
    const [username, setUsername] = useState("")
    const [mountain, setMountain] = useState("")

    const mountainOptions = mountainData.map((element) => {
        const id = element.id
        const name = element.name
        const location = element.location
        return (
            <option value={id} key={id}>Name: {name} Location: {location}</option>
        )
    })

    function handleBody(event) {
        setBody(event.target.value)
    }

    function handleMountainClick(event) {
        console.log(event.target.value)
        setMountain(event.target.value)
    }

    function handleReviewSubmit(event) {
        event.preventDefault()
        const newReview = {
            body: body,
            mountain: mountain
        }
        fetch('/reviews', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newCar)
        })
        .then((r) => console.log(r))
        .catch((error) => console.log(error))
        onReviewFormSubmit(newReview)
        setBody("")
        setMountain("")
    }

    return (
        <form className="review-form" onSubmit={handleReviewSubmit}>
            <div className="review-form-div">
                <label for="review">Leave a review! </label>
                <input className="review-box" type="text" name="Review" value={body} onChange={handleBody}/>
            </div>
            <div className="review-mountain-div">
                <label for="mountain">What mountain was it? </label>
                <select name="mountains" id="mountains" onChange={handleMountainClick}>
                    {mountainOptions}
                </select>
            </div>
        </form>
    )
}