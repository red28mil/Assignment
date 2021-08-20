import SiteHeader from './components/siteHeader';
import MovieReviewPage from "./pages/movieReviewPage";
import MovieCreditsPage from "./pages/movieCreditsPage";
import MoviesContextProvider from "./contexts/moviesContext";
import React from "react";
import ReactDOM from "react-dom";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; 
import TopRatedPage from "./pages/topRatedPage";
import PopularMoviePage from "./pages/popularMoviePage";
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import LatestMoviesPage from "./pages/latestMoviesPage";

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
    <SiteHeader/>
    <MoviesContextProvider>
      {" "}

      <Switch>
      <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
      <Route exact path="/reviews/form" component={AddMovieReviewPage} />
      <Route path="/reviews/:id" component={MovieReviewPage}/>
      <Route path="/credits/:id" component={MovieCreditsPage}/>
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage}/>
        <Route exact path="/movies/toprated" component={TopRatedPage}/>
        <Route exact path="/movies/popular" component={PopularMoviePage}/>
        <Route exact path="/movies/latest" component={LatestMoviesPage}/>
        <Route path="/movies/:id" component={MoviePage} />
        
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));