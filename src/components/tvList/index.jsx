import React from "react";
import TvCard from "../tvCard";
import Grid from "@mui/material/Grid";

const TvShowList = (props) => {
    let tvCards = props.tvShows.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TvCard key={m.id} tvShow={m} />
        </Grid>
    ));
    return tvCards;
};

export default TvShowList;
