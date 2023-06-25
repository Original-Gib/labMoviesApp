import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardHeader } from "@mui/material";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 1.5,
    },
    favouriteAvatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
    nonFavouriteAvatar: {
        backgroundColor: "rgb(220, 220, 220)",
    },
};

const MovieHeader = (props) => {
    const movie = props.movie;
    const favouriteMovies = JSON.parse(localStorage.getItem("favourites"));
    let favouriteIcon = null;
    if (favouriteMovies.length > 0) {
        favouriteMovies.forEach(element => {
            if (movie.id == element.id && element.favourite == true) {
                favouriteIcon = <Avatar sx={styles.favouriteAvatar}>
                    <FavoriteIcon />
                </Avatar>
            } else {
                favouriteIcon = <Avatar sx={styles.nonFavouriteAvatar}>
                    <FavoriteIcon />
                </Avatar>
            }
        })
    } else {
        favouriteIcon = <Avatar sx={styles.nonFavouriteAvatar}>
            <FavoriteIcon />
        </Avatar>
    };






    return (
        <Paper component="div" sx={styles.root}>
            <IconButton aria-label="go back">
                <ArrowBackIcon color="primary" fontSize="large" />
            </IconButton>

            {favouriteIcon}

            <Typography variant="h4" component="h3">
                {movie.title}{"   "}
                <a href={movie.homepage}>
                    <HomeIcon color="primary" fontSize="='large" />
                </a>
                <br />
                <span>{`${movie.tagline}`} </span>
            </Typography>
            <IconButton aria-label="go forward">
                <ArrowForwardIcon color="primary" fontSize="large" />
            </IconButton>
        </Paper>
    );
};

export default MovieHeader;
