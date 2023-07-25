import React from "react";
import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";

import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
    fab: {
        position: "fixed",
        top: 50,
        right: 2,
    },
};

const MyMovie = () => {

    const myMovieContext = useContext(MoviesContext);

    const myMovie = myMovieContext.myMovie.myMovie;

    if (myMovie != null) {
        return (
            <>
                <Typography variant="h3" component="h3">
                    {myMovie.title}
                </Typography>

                <Typography variant="h5" component="h3">
                    Overview
                </Typography>

                <Typography variant="h6" component="p">
                    {myMovie.overview}
                </Typography>

                <Paper component="ul" sx={styles.chipSet}>
                    <li>
                        <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                    </li>
                    <li>
                        <Chip label={myMovie.genre} />
                    </li>


                </Paper>
                <Paper component="ul" sx={styles.chipSet}>
                    <Chip icon={<AccessTimeIcon />} label={`${myMovieContext.myMovie.myMovie.runtime} min.`} />


                    <Chip label={`Released: ${myMovie.releaseDate.$d}`} />
                </Paper>
                <Paper component="ul" sx={styles.chipSet}>
                    <Chip label={`Producer: ${myMovie.productionCompany}`} />
                </Paper>
                <Fab
                    color="secondary"
                    variant="extended"
                    onClick={() => setDrawerOpen(true)}
                    sx={styles.fab}
                >
                    <NavigationIcon />
                    Reviews
                </Fab>
            </>
        );
    }
    else {
        return (
            <Typography variant="h5" component="h3">
                You have not created a movie yet, head <Link to='/myMovieForm'>here</Link> to create one
            </Typography>
        )
    }
};

export default MyMovie;