import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import TopRatedPage from "./pages/topRatedMovies";
import TvShowPage from "./pages/tvShows";
import TvShowDetailsPage from "./pages/tvShowDetailsPage";
import SiteHeader from './components/siteHeader';
import UpcomingPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import ActorPage from "./pages/actors";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
});



const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SiteHeader />      {/* New Header  */}
                <MoviesContextProvider>
                    <Routes>
                        <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                        <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                        <Route path="/movies/:id" element={<MoviePage />} />
                        <Route path="/movies/upcoming" element={<UpcomingPage />} />
                        <Route path="/movies/top_rated" element={<TopRatedPage />} />
                        <Route path="/tvShows" element={<TvShowPage />} />
                        <Route path="/tvShows/:id" element={<TvShowDetailsPage />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                        <Route path="/reviews/:id" element={<MovieReviewPage />} />
                        <Route path="/actors" element={<ActorPage />} />
                    </Routes>
                </MoviesContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
