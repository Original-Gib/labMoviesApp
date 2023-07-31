import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import StarIcon from '@mui/icons-material/Star';

const AddToFavouriteActorsIcon = ({ actor }) => {
    const context = useContext(MoviesContext);

    const onUserSelect = (e) => {
        e.preventDefault();
        context.addToFavouriteActors(actor);
    };
    return (
        <IconButton aria-label="add to favorites" onClick={onUserSelect}>
            <StarIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToFavouriteActorsIcon;
