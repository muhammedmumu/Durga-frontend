import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './MovieCard.css';
import SpiderMan from '../assests/Spider-man-no-way-home.jpg';
import Batman from '../assests/The-batman.jpg';
import KGF2 from '../assests/Kgf-2.jpg';  
import RRR from '../assests/RRR.jpg';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  // Mock movie data
  const mockMovies = [
    {
      id: 1,
      title: "Spider-Man: No Way Home",
      poster: SpiderMan,
      language: "English",
      duration: "2h 28m",
      genre: "Action, Adventure",
      rating: "8.4"
    },
    {
      id: 2,
      title: "RRR",
      poster: RRR,
      language: "Telugu",
      duration: "3h 7m",
      genre: "Action, Drama",
      rating: "8.8"
    },
    {
      id: 3,
      title: "The Batman",
      poster: Batman,
      language: "English",
      duration: "2h 56m",
      genre: "Action, Crime",
      rating: "7.8"
    },
    {
      id: 4,
      title: "KGF Chapter 2",
      poster: KGF2,
      language: "Kannada",
      duration: "2h 48m",
      genre: "Action, Drama",
      rating: "8.3"
    }
  ];

  useEffect(() => {
    // Simulate API call with loading delay
    setTimeout(() => {
      setMovies(mockMovies);
    }, 500);
  }, []);

  const handleMovieClick = (movieId) => {
    alert(`Movie clicked! ID: ${movieId}`);
  };

  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">
        Now Showing Movies
      </h1>
      
      {movies.length === 0 ? (
        <div className="loading">
          Loading movies...
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onClick={handleMovieClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;