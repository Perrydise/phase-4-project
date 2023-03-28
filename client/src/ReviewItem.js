import React from "react";

function ReviewItem(key, id, body, username, reviewSubmit) {

    function handleDeleteClick() {
        fetch(`/reviews/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => handleDeleteReview(id))
    }

    return (

        <div className="review-item-display">
        <ul className="review-list-display">
            <li key={id+"-username"}>User: {username}</li>
            <li key={id+"-body"}>Review: {body}</li>
        </ul>
        {/* <button onClick={handleDeleteClick}>Delete</button> */}
    </div>

    )
}
export default ReviewItem