import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import StarIcon from '@mui/icons-material/Star';

const AddToFavouriteActorsIcon = ({ actor }) => {
    //Accessing the MoviesContext file
    const context = useContext(MoviesContext);

    //Method to call the addToFavouriteActors function from the context if the user selects the icon
    const onUserSelect = (e) => {
        e.preventDefault();
        context.addToFavouriteActors(actor);
    };

    //Return statment for the icon
    return (
        <IconButton aria-label="add to favorites" onClick={onUserSelect}>
            <StarIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToFavouriteActorsIcon;
