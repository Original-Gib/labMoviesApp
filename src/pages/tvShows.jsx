import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { getTvShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const TvShowPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("tvShows", getTvShows);

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const tvShows = data ? data.results : [];



    return (
        <PageTemplate
            title="Tv Shows"
            tvShows={tvShows}
            action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />
            }}
        />
    );
};
export default TvShowPage;
