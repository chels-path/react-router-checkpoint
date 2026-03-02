import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import MovieDescription from './components/MovieDescription';

function App() {
  // Initial movies data with trailers
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 4.8,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
      year: 2010,
      director: "Christopher Nolan",
      cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page"
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 4.9,
      trailerLink: "https://www.youtube.com/embed/EXeTwQWrcwY",
      year: 2008,
      director: "Christopher Nolan",
      cast: "Christian Bale, Heath Ledger, Aaron Eckhart"
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 4.7,
      trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
      year: 2014,
      director: "Christopher Nolan",
      cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain"
    },
    {
      id: 4,
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 4.6,
      trailerLink: "https://www.youtube.com/embed/s7EdQ4FqbhY",
      year: 1994,
      director: "Quentin Tarantino",
      cast: "John Travolta, Uma Thurman, Samuel L. Jackson"
    }
  ]);

  const [filters, setFilters] = useState({
    title: '',
    rating: ''
  });

  // Filter movies based on title and rating
  const getFilteredMovies = () => {
    return movies.filter(movie => {
      const titleMatch = movie.title.toLowerCase().includes(filters.title.toLowerCase());
      const ratingMatch = filters.rating === '' || movie.rating >= parseFloat(filters.rating);
      return titleMatch && ratingMatch;
    });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleAddMovie = (newMovie) => {
    // Generate a new ID
    const newId = movies.length > 0 ? Math.max(...movies.map(m => m.id)) + 1 : 1;
    setMovies([...movies, { ...newMovie, id: newId }]);
  };

  const filteredMovies = getFilteredMovies();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <header className="app-header">
                <h1>🎬 Movie App</h1>
                <p>Discover and share your favorite movies</p>
              </header>
              <AddMovieForm onAddMovie={handleAddMovie} />
              <Filter onFilterChange={handleFilterChange} />
              <MovieList movies={filteredMovies} />
            </>
          } />
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
