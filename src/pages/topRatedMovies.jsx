import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getTopMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";


const TopRatedPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("top_rated", getTopMovies);

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data ? data.results : [];
    return (
        <PageTemplate
            title='Top Rated Movies'
            movies={movies}
            action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />
            }}
        />
    );
};
export default TopRatedPage;