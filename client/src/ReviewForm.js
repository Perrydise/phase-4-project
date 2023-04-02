import React, {useState} from "react";

function ReviewForm({ mountainData, onReviewFormSubmit }) {
    const [body, setBody] = useState("")
    const [username, setUsername] = useState("")
    const [mountainId, setMountainId] = useState("")

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
        setMountainId(event.target.value)
    }

    function handleReviewSubmit(event) {
        event.preventDefault()
        const newReview = {
            body: body,
            mountainId: mountainId
        }
        fetch('/reviews', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then((r) => console.log(r))
        .catch((error) => console.log(error))
        onReviewFormSubmit(newReview)
        setBody("")
        setMountainId("")
    }

    return (
        <form className="review-form" onSubmit={handleReviewSubmit}>
            <div className="review-form-div">
                <label for="body">Leave a review! </label>
                <input className="review-box" type="text" name="body" value={body} onChange={handleBody}/>
            </div>
            <div className="review-mountain-div">
                <label for="mountainId">What mountain was it? </label>
                <select name="mountainId" id="mountainId" onChange={handleMountainClick}>
                    {mountainOptions}
                </select>
            </div>
            <input type="submit" value="Add Review"/>
        </form>
    )
}

export default ReviewForm