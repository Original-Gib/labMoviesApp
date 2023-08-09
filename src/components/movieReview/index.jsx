import React from "react";

const MovieReview = ({ review }) => {
    //return statement to display a movie review
    return (
        <>
            <p>Review By: {review.author} </p>
            <p>{review.content} </p>
        </>
    );
};
export default MovieReview
