import React, { useState } from "react";


//creating the MoviesContext
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    //Defining the data and states for the data in the context
    const [myReviews, setMyReviews] = useState({})
    const [favourites, setFavourites] = useState([]);
    const [mustWatch, setMustWatch] = useState([]);
    const [myMovie, setMyMovie] = useState({});
    const [favouriteActors, setFavouriteActors] = useState([]);
    const [favouriteTvShows, setFavouriteTvShows] = useState([]);

    //function to add a movie review
    const addReview = (movie, review) => {
        setMyReviews({ ...myReviews, [movie.id]: review })
    };

    //function to add myMovie
    const addMyMovie = (myMovie) => {
        setMyMovie({ myMovie });
        console.log(myMovie);
    };

    //function to add an actor to favourites
    const addToFavouriteActors = (actor) => {
        let updatedFavouriteActors = [...favouriteActors];
        if (!favouriteActors.includes(actor.id)) {
            updatedFavouriteActors.push(actor.id);
        }
        setFavouriteActors(updatedFavouriteActors);
        console.log(favouriteActors)
    };

    //function to favourite a tv show
    const addToFavouriteTvShows = (tvShow) => {
        let updatedFavouriteTvShows = [...favouriteTvShows];
        if (!favouriteTvShows.includes(tvShow.id)) {
            updatedFavouriteTvShows.push(tvShow.id);
        }
        setFavouriteTvShows(updatedFavouriteTvShows);
        console.log(favouriteTvShows);
    };

    //function to favourite a movie
    const addToFavourites = (movie) => {
        let updatedFavourites = [...favourites];
        if (!favourites.includes(movie.id)) {
            updatedFavourites.push(movie.id);
        }
        setFavourites(updatedFavourites);
    };

    // function to add a movie to the must watch list
    const addToMustWatch = (movie) => {
        let updatedMustWatch = [...mustWatch];
        if (!mustWatch.includes(movie.id)) {
            updatedMustWatch.push(movie.id);
        }
        setMustWatch(updatedMustWatch);
        console.log(mustWatch);
    }

    //function to remove a movie from favourites
    const removeFromFavourites = (movie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    //function to remove and actor from favourites 
    const removeFromFavouriteActors = (actor) => {
        setFavouriteActors(favouriteActors.filter((aId) => aId !== actor.id));
    };

    //function to remove a tv show from favourites 
    const removeFromFavouriteTvShows = (tvShow) => {
        setFavouriteTvShows(favouriteTvShows.filter((tvId) => tvId !== tvShow.id));
    };

    //reutrn statement to make the data available from the context
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
                favouriteActors,
                removeFromFavouriteActors,
                addToFavouriteTvShows,
                favouriteTvShows,
                removeFromFavouriteTvShows
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
