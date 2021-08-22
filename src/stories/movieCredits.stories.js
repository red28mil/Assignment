import React from "react";
import MovieCredits from "../components/movieCredits";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Movie Credits Page/MovieCredits",
  component: MovieCredits,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <MovieCredits movie={SampleMovie} />;

Basic.storyName = "Default";
