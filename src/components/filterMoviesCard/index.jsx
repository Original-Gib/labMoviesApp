import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

//Styles for the filter pop out
const styles = {
    root: {
        maxWidth: 345,
    },
    media: { height: 300 },

    formControl: {
        margin: 1,
        minWidth: 220,
        backgroundColor: "rgb(255, 255, 255)",
    },
};

export default function FilterMoviesCard(props) {
    //Use query function to call the getGenres function from the api file
    const { data, error, isLoading, isError } = useQuery("genres", getGenres);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    if (genres[0].name !== "All") {
        genres.unshift({ id: "0", name: "All" });
    }

    const handleUserInput = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
    };

    //Functions to handle changes to the form based on user inputs 
    const handleTextChange = (e, props) => {
        handleUserInput(e, "title", e.target.value);
    };

    const handleReleaseChange = (e, props) => {
        handleUserInput(e, "release_date", e.target.value);
    };

    const handleGenreChange = (e) => {
        handleUserInput(e, "genre", e.target.value);
    };

    //return statement to render the component 
    return (
        <>
            <Card sx={styles.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h1">
                        <FilterAltIcon fontSize="large" />
                        Filter the movies.
                    </Typography>
                    <TextField
                        sx={styles.formControl}
                        id="filled-search"
                        label="Search field"
                        type="search"
                        value={props.titleFilter}
                        variant="filled"
                        onChange={handleTextChange}
                    />
                    <TextField
                        sx={styles.formControl}
                        id="release-search"
                        label="YYYY-MM-DD"
                        type="search"
                        value={props.releaseFilter}
                        variant="filled"
                        onChange={handleReleaseChange}
                    />
                    <FormControl sx={styles.formControl}>
                        <InputLabel id="genre-label">Genre</InputLabel>
                        <Select
                            labelId="genre-label"
                            id="genre-select"
                            value={props.genreFilter}
                            onChange={handleGenreChange}
                        >
                            {genres.map((genre) => {
                                return (
                                    <MenuItem key={genre.id} value={genre.id}>
                                        {genre.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </CardContent>
            </Card>
            <Card sx={styles.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h1">
                        <SortIcon fontSize="large" />
                        Sort the movies.
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
