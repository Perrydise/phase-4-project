import React, {useState} from "react";

function ReviewItem({ id, body, username, handleDeleteReview, handleUpdateReview }) {

    const [formBody, setFormBody] = useState(body)
    const [showForm, setShowForm] = useState(true)
    const [errors, setErrors] = useState("")

    function handleBody(event) {
        setFormBody(event.target.value)
        console.log(formBody)
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
               body: formBody,
            }),
        })
        .then((r) => {
          if (r.ok) {
            return r.json();
          } else {
            return r.json().then((err) => {
              throw err;
            });
          }
        })
        .then((updatedReviews) => {
            console.log(updatedReviews)
            handleUpdateReview(updatedReviews)
        })
        .catch((e) => {          
        console.error(e)
        setErrors(e.message)
        })
    }


    const handleDeleteClick = () => {
        fetch(`/reviews/${id}`, {
            method: "DELETE",
        })
        .then((r) => {
          if (r.ok) {
            return r.json();
          } else {
            return r.json().then((err) => {
              throw err;
            });
          }
        })
        .then(() => {
          handleDeleteReview(id)
        })
        .catch((e) => {
          console.error(e)
          setErrors(e.message)
        });
    }
    

    

    

    return (

        <div className="review-item-display">
          {errors && <div className="error-div">{errors}</div>}
        <ul className="review-list-display">
            <li className="review-author" key={id+"-username"}>User: {username}</li>
            <li className="review-item" key={id+"-body"}>
                <label for="body">Review: </label>
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




