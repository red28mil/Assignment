import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getTopRated } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';



const TopRatedPage = (props) => {
  // useQuery used to cache upcoming movies page data
  const { data, error, isLoading, isError } = useQuery('toprated', getTopRated)

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
      title='Best'
      movies={movies}
      action={(movie) => {
        return <>
            
            
            </>
      }}
    />
  );
};
export default TopRatedPage;