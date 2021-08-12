import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getCredits } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

import AddToWatchIcon from "../components/cardIcons/addToWatch";


const MovieCreditsPage = (props) => {
  // useQuery used to cache upcoming movies page data
  const { data, error, isLoading, isError } = useQuery('cast', getCredits)

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
      title='Cast'
      movies={movies}
      action={(movie) => {
        return <>
            
            <AddToWatchIcon movie={movie} />
            
            </>
      }}
    />
  );
};
export default MovieCreditsPage;