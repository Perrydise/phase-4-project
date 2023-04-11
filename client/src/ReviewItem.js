import React, {useState} from "react";

function ReviewItem({ key, id, body, username, handleDeleteReview, handleUpdateReview }) {

    const [formBody, setFormBody] = useState(body)
    const [showForm, setShowForm] = useState(true)

    function handleBody(event) {
        setFormBody(event.target.value)
    }

    function handlePatchSubmit(event) {
        setShowForm(true)
        console.log(
            JSON.stringify({
               body,
            })
        )
        
        fetch(`/reviews/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
               body,
            }),
        })
        .then((updatedReviews) => {
            console.log(updatedReviews)
            handleUpdateReview(updatedReviews)
        })
        .catch((error) => console.log(error))
    }


    const handleDeleteClick = () => {
        fetch(`/reviews/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => handleDeleteReview(id))
    }

    

    

    return (

        <div className="review-item-display">
        <ul className="review-list-display">
            <li className="review-author" key={id+"-username"}>User: {username}</li>
            <li className="review-item" key={id+"-body"}>
                <label for="body">Review: {body}</label>
                <input className="input-box" type="text" name="body" readOnly={showForm} value={formBody} onChange={handleBody} />
            </li>
        </ul>
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={() => {setShowForm(false)}} disabled={!showForm}>Edit</button>
        <button onClick={handlePatchSubmit} disabled={showForm} >Submit Change</button>
    </div>

    )
}
export default ReviewItem