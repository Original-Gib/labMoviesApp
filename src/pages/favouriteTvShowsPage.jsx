import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavouriteTvShowsIcon from "../components/cardIcons/removeFromFavouriteTvShows";

const FavouriteTvShowsPage = (props) => {
    const { favouriteTvShows: tvShowIds } = useContext(MoviesContext);

    // Create an array of queries and run them in parallel.
    const favouriteTvShowQueries = useQueries(
        tvShowIds.map((tvShowId) => {
            return {
                queryKey: ["tvShow", { id: tvShowId }],
                queryFn: getTvShow,
            };
        })
    );
    // Check if any of the parallel queries is still loading.
    const isLoading = favouriteTvShowQueries.find((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }

    const tvShow = favouriteTvShowQueries.map((q) => q.data);


    return (
        <PageTemplate
            title="Favourite Tv Shows"
            tvShows={tvShow}
            action={(tvShow) => {
                return (
                    <>
                        <RemoveFromFavouriteTvShowsIcon tvShow={tvShow} />
                    </>
                );
            }}
        />
    );
};

export default FavouriteTvShowsPage;
