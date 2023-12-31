import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFavouriteTvShowsIcon = ({ tvShow }) => {
    const context = useContext(MoviesContext);

    const onUserRequest = (e) => {
        e.preventDefault();
        context.removeFromFavouriteTvShows(tvShow);
    };

    return (
        <IconButton
            aria-label="remove from favorites"
            onClick={onUserRequest}
        >
            <DeleteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default RemoveFromFavouriteTvShowsIcon;