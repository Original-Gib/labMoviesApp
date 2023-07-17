import React from "react";
import TvCard from "../components/tvCard";
import SampleTvShow from "./sampleTvData";

export default {
    title: "Tv Show/TV card",
    component: TvCard,
};

export const Basic = () => {
    return (
        <TvCard
            tvShow={SampleTvShow}
        />
    );
};
Basic.storyName = "TvShow";

export const Exceptional = () => {
    const sampleNoPoster = { ...SampleTvShow, poster_path: undefined };
    return (
        <TvCard
            tvShow={sampleNoPoster}
        />
    );
};
Exceptional.storyName = "exception";
