import React from "react";
import MyMovieHeader from "../headerMyMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Spinner from '../spinner'
import MyMovieForm from "../myMovieForm";

//styles for the mymovie page
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



const TemplateMyMoviePage = ({ children }) => {
    //return statment to render the page
    return (
        <>
            <MyMovieHeader />

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <ImageList cols={1}>

                        <ImageListItem

                            sx={styles.gridListTile}
                            cols={1}
                        >
                            <img src="../../src/images/film-poster-placeholder.png" />
                        </ImageListItem>

                    </ImageList>

                </Grid>

                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateMyMoviePage;
