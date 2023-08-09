import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieList from "../movieList";

//styles for the template page for movie lists
const styles = {
    root: {
        padding: "20px",
    },
    fab: {
        marginTop: 8,
        position: "fixed",
        top: 2,
        right: 2,
    },
};

function MovieListPageTemplate({ movies, title, action, release_date }) {
    //setting the filters available on the page
    const [titleFilter, setTitleFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const [releaseFilter, setReleaseFitler] = useState("");
    const [drawerOpen, setDrawerOpen] = useState(false);


    const genreId = Number(genreFilter);

    //displaying the movies based on the filters applied 
    let displayedMovies = movies
        .filter((m) => {
            return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
        })
        .filter((m) => {
            return m.release_date.search(releaseFilter) !== -1;
        })
        .filter((m) => {
            return genreId > 0 ? m.genre_ids.includes(genreId) : true;
        });

    const handleChange = (type, value) => {
        if (type === "title") setTitleFilter(value);
        else if (type === "release_date") setReleaseFitler(value);
        else setGenreFilter(value);
    };

    //return statement ot render the page
    return (
        <>
            <Grid container sx={styles.root}>
                <Grid item xs={12}>
                    <Header title={title} />
                </Grid>
                <Grid item container spacing={5}>
                    <MovieList action={action} movies={displayedMovies} />
                </Grid>
            </Grid>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                Filter
            </Fab>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <FilterCard
                    onUserInput={handleChange}
                    titleFilter={titleFilter}
                    genreFilter={genreFilter}
                />
            </Drawer>
        </>
    );
}
export default MovieListPageTemplate;
