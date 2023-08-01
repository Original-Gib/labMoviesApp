import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavouriteActors from "../components/cardIcons/removeFromFavouriteActors";


const FavouriteActorsPage = (props) => {
    const { favouriteActors: actorIds } = useContext(MoviesContext);

    // Create an array of queries and run them in parallel.
    const favouriteActorQueries = useQueries(
        actorIds.map((actorId) => {
            return {
                queryKey: ["actor", { id: actorId }],
                queryFn: getActor,
            };
        })
    );
    // Check if any of the parallel queries is still loading.
    const isLoading = favouriteActorQueries.find((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }

    const actor = favouriteActorQueries.map((q) => q.data);


    return (
        <PageTemplate
            title="Favourite Actors"
            actors={actor}
            action={(actor) => {
                return (
                    <>
                        <RemoveFromFavouriteActors actor={actor} />
                    </>
                );
            }}
        />
    );
};

export default FavouriteActorsPage;
