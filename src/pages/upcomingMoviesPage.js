import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

import AddToWatchIcon from "../components/cardIcons/addToWatch";


const UpcomingMoviesPage = (props) => {
  // useQuery used to cache upcoming movies page data
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title='Upcoming all good  Movies'
      movies={movies}
      action={(movie) => {
        return <>
            
            <AddToWatchIcon movie={movie} />
            
            </>
      }}
    />
  );
};
export default UpcomingMoviesPage;