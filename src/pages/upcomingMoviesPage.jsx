import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 1.5,
    },
};

const UpcomingPage = (props) => {
    const [pageNumber, setPageNumber] = useState(1);
    const { data, error, isLoading, isError } = useQuery(["upcoming", pageNumber], () => getUpcomingMovies(pageNumber));

    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    };

    const previousPage = () => {
        setPageNumber(pageNumber - 1)
    }

    const movies = data ? data.results : [];
    return (
        <>
            <PageTemplate
                title='Upcoming Movies'
                movies={movies}
                action={(movie) => {
                    return <AddToPlaylistIcon movie={movie} />
                }}
            />
            <Paper component="div" sx={styles.root}>
                <IconButton
                    aria-label="go back"
                    onClick={previousPage}
                    disabled={pageNumber === 1}
                >
                    <ArrowBackIcon color="primary" fontSize="large" />
                </IconButton>



                <IconButton
                    aria-label="go forward"
                    onClick={nextPage}
                >
                    <ArrowForwardIcon color="primary" fontSize="large" />
                </IconButton>
            </Paper>

        </>
    );
};
export default UpcomingPage;