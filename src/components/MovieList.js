import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  const listContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
    padding: '1rem',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const noMoviesStyle = {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    gridColumn: '1 / -1',
    color: '#666'
  };

  if (movies.length === 0) {
    return (
      <div style={noMoviesStyle}>
        <h3>No movies found</h3>
        <p>Try adjusting your filters or add a new movie!</p>
      </div>
    );
  }

  return (
    <div style={listContainerStyle}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
