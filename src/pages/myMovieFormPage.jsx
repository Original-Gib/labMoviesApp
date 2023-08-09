import React from "react";
import PageTemplate from "../components/templateMyMoviePage";
import MyMovieForm from "../components/myMovieForm";

const MyMovieFormPage = () => {

    //accessing the components to display on the my movie form page
    return (
        <PageTemplate >
            <MyMovieForm />
        </PageTemplate>
    );
};

export default MyMovieFormPage;
