import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const ActorPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("actors", getActors);

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const actors = data ? data.results : [];



    return (
        <PageTemplate
            title="Actors"
            actors={actors}
            action={(actor) => {
                return <AddToFavouritesIcon movie={actor} />
            }}
        />
    );
};
export default ActorPage;
