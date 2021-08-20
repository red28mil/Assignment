import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieCredits from "../components/movieCredits";
import { getMovieCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';


const MovieCreditsPage = (props) => {
  const { id } = props.match.params;
    const { data: movie, error, isLoading, isError } = useQuery(
      ["movie", { id: id }],
      getMovieCredits
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }

  return (
<>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieCredits movie={movie} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};


export default withRouter(MovieCreditsPage);