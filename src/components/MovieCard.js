import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const cardStyle = {
    width: '300px',
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '1rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  };

  const titleStyle = {
    margin: '0 0 0.5rem 0',
    color: '#333',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  };

  const descriptionStyle = {
    color: '#666',
    fontSize: '0.9rem',
    lineHeight: '1.4',
    marginBottom: '1rem',
    flex: 1,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: 'auto'
  };

  const starsStyle = {
    color: '#ffc107',
    fontSize: '1.1rem'
  };

  const ratingValueStyle = {
    color: '#666',
    fontWeight: 'bold'
  };

  // Generate star rating
  const renderStars = () => {
    const stars = [];
    const rating = Math.round(movie.rating * 2) / 2; // Round to nearest 0.5
    
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} style={starsStyle}>★</span>);
      } else if (i - 0.5 === rating) {
        stars.push(<span key={i} style={starsStyle}>½</span>);
      } else {
        stars.push(<span key={i} style={{...starsStyle, opacity: 0.3}}>★</span>);
      }
    }
    return stars;
  };

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div 
      style={cardStyle}
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      }}
    >
      <img src={movie.posterURL} alt={movie.title} style={imageStyle} />
      <div style={contentStyle}>
        <h3 style={titleStyle}>{movie.title}</h3>
        <p style={descriptionStyle}>{movie.description}</p>
        <div style={ratingStyle}>
          <div style={{ display: 'flex', gap: '2px' }}>
            {renderStars()}
          </div>
          <span style={ratingValueStyle}>({movie.rating.toFixed(1)})</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
