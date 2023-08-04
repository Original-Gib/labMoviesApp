import React, { useState, useEffect } from "react";
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
import ActorDetailsPage from "./pages/actorDetailsPage";
import MyMovieFormPage from "./pages/myMovieFormPage";
import MyMoviePage from "./pages/myMoviePage";
import FavouriteActorsPage from "./pages/favouriteActorsPage";
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
});

const supabase = createClient(`https://${import.meta.env.VITE_SUPABASE_ORG}.supabase.co`, `${import.meta.env.VITE_SUPABASE_KEY}`)


const App = () => {
    const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    if (!session) {
        return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
    }
    else {
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
                            <Route path="/actors/:id" element={<ActorDetailsPage />} />
                            <Route path="/actors/favourites" element={<FavouriteActorsPage />} />
                            <Route path="/myMovieForm" element={<MyMovieFormPage />} />
                            <Route path="/myMovie" element={<MyMoviePage />} />
                        </Routes>
                    </MoviesContextProvider>
                </BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        );
    }
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);

export default supabase;
