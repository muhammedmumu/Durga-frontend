import React from 'react';
import './MovieCard.css';

// Import images from assets folder
import spiderManImg from '../assests/Spider-man-no-way-home.jpg';
import rrrImg from '../assests/RRR.jpg';
import batmanImg from '../assests/The-batman.jpg';
import kgfImg from '../assests/Kgf-2.jpg';

const MovieCard = ({ movie, onClick }) => {
    // Create image mapping
    const imageMap = {
        1: spiderManImg,  // Spider-Man
        2: rrrImg,        // RRR
        3: batmanImg,     // Batman
        4: kgfImg         // KGF
    };

    return (
        <div
            className="movie-card"
            onClick={() => onClick && onClick(movie.id)}
        >
            {/* Movie Poster */}
            <div className="movie-poster-container">
                <img
                    src={imageMap[movie.id] || movie.poster || "https://via.placeholder.com/300x450"}
                    alt={movie.title}
                    className="movie-poster"
                />
                {/* Rating Badge */}
                <div className="rating-badge">
                    ⭐ {movie.rating || "8.5"}
                </div>
            </div>

            {/* Movie Info */}
            <div className="movie-info">
                <h3 className="movie-title">
                    {movie.title}
                </h3>

                <div className="movie-details">
                    <p className="movie-language-duration">
                        {movie.language || "English"} • {movie.duration || "2h 30m"}
                    </p>
                    <p className="movie-genre">
                        {movie.genre || "Action, Drama"}
                    </p>
                </div>

                {/* Book Button */}
                <button className="book-button">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default MovieCard;