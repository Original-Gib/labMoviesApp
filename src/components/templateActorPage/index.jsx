import React from "react";
import ActorHeader from "../headerActor";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getActorImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

//styles for the actor details page
const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridList: {
        width: 450,
        height: '100vh',
    },
};

//getting the actor data from the prop passed in and also the getActorImages function from the api file
const TemplateActorPage = ({ actor, children }) => {
    const { data, error, isLoading, isError } = useQuery(
        ["images", { id: actor.id }],
        getActorImages
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    //assigning the images based on the profiles data returned from the getActorImages call
    const images = data.profiles

    //return statement to render the page
    return (
        <>
            <ActorHeader actor={actor} />

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div sx={styles.gridListRoot}>
                        <ImageList cols={1}>
                            {images.map((image) => (
                                <ImageListItem
                                    key={image.file_path}
                                    sx={styles.gridListTile}
                                    cols={1}
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                        alt={image.poster_path}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Grid>

                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateActorPage;
