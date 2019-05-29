import React from 'react';

const MovieContext = React.createContext({
  gen: null,
  movies: [],
  setMovies: () => {}
});

export const MovieProvider = MovieContext.Provider;
export const MovieConsumer = MovieContext.Consumer;
export default MovieContext;
