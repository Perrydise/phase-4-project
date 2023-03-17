import React, {useEffect, useState} from "react";

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

    useEffect(() => {
        fetch(`/reviews`)
        .then((r) => r.json())
        .then((reviews) =>setReviews(reviews))
        .catch((error) => console.log(error))
    }, [])

    function onMountainFormSubmit(newCar) {
        setCars([...cars, newCar])
    }

    function onReviewFormSubmit(newDealer) {
        setDealers([...dealers, newDealer])
    }

    return(
        <div className="search_div">
        <h1 className="search-header">Sell your car!</h1>
        <h2 className="search-second-header">Please fill out our form to add your car to our database!</h2>
        <CarForm carArray={cars} onCarFormSubmit={onCarFormSubmit}  dealers={dealers} />
        {isShown && 
            <DealerForm onDealerFormSubmit={onDealerFormSubmit} />
        }
        <button onClick={handleClick}>Show Dealer Form</button>
    </div>
    )
}

export default LeaveReviewPage