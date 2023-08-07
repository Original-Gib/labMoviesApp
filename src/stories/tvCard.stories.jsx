import React from "react";
import TvShowCard from "../components/tvCard";
import SampleTvShow from "./sampleTvData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export default {
    title: "Tv Show/Tv Show Card",
    component: TvShowCard,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    ],
};

export const Basic = () => {
    return (
        <TvShowCard
            tvShow={SampleTvShow}
            action={(tvShow) => <AddToFavouritesIcon tvShow={tvShow} />}
            taging={(tvShow) => null}
        />
    );
};
Basic.storyName = "Default";

export const Exceptional = () => {
    const sampleNoPoster = { ...SampleTvShow, poster_path: undefined };
    return (
        <TvShowCard
            tvShow={sampleNoPoster}
            action={(tvShow) => <AddToFavouritesIcon tvShow={tvShow} />}
            taging={(tvShow) => null}
        />
    );
};
Exceptional.storyName = "exception";
