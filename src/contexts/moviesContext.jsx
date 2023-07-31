import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState({})
    const [favourites, setFavourites] = useState([]);
    const [mustWatch, setMustWatch] = useState([]);
    const [myMovie, setMyMovie] = useState({});
    const [favouriteActors, setFavouriteActors] = useState([]);

    const addReview = (movie, review) => {   // NEW
        setMyReviews({ ...myReviews, [movie.id]: review })
    };

    const addMyMovie = (myMovie) => {
        setMyMovie({ myMovie });
        console.log(myMovie);
    };

    const addToFavouriteActors = (actor) => {
        let updatedFavouriteActors = [...favouriteActors];
        if (!favouriteActors.includes(actor.id)) {
            updatedFavouriteActors.push(actor.id);
        }
        setFavouriteActors(updatedFavouriteActors);
        console.log(favouriteActors)
    };

    const addToFavourites = (movie) => {
        let updatedFavourites = [...favourites];
        if (!favourites.includes(movie.id)) {
            updatedFavourites.push(movie.id);
        }
        setFavourites(updatedFavourites);
    };

    const addToMustWatch = (movie) => {
        let updatedMustWatch = [...mustWatch];
        if (!mustWatch.includes(movie.id)) {
            updatedMustWatch.push(movie.id);
        }
        setMustWatch(updatedMustWatch);
        console.log(mustWatch);
    }

    // We will use this function in a later section
    const removeFromFavourites = (movie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,    // NEW
                addToMustWatch,
                addMyMovie,
                myMovie,
                addToFavouriteActors,
                favouriteActors
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
