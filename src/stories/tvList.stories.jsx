import React from "react";
import TvShowList from "../components/tvList";
import SampleTvShow from "./sampleTvData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@mui/material/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
    title: "Tv Show/TV show list",
    component: TvShowList,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
};

export const Basic = () => {
    const tvShows = [
        { ...SampleTvShow, id: 1 },
        { ...SampleTvShow, id: 2 },
        { ...SampleTvShow, id: 3 },
        { ...SampleTvShow, id: 4 },
        { ...SampleTvShow, id: 5 },
    ];
    return (
        <Grid container spacing={5}>
            <TvShowList
                tvShows={tvShows}
                action={(tvShow) => <AddToFavouritesIcon tvShow={tvShow} />}
            />
        </Grid>
    );
};
Basic.storyName = "Default";