import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the movie by ID
  const movie = movies.find(m => m.id === parseInt(id));

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '2rem'
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
  };

  const backButtonStyle = {
    padding: '1rem 2rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '2rem',
    display: 'inline-block'
  };

  const movieHeaderStyle = {
    position: 'relative',
    height: '400px',
    overflow: 'hidden'
  };

  const backdropStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.5)'
  };

  const movieTitleStyle = {
    position: 'absolute',
    bottom: '2rem',
    left: '2rem',
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  };

  const movieInfoStyle = {
    padding: '2rem',
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    gap: '2rem'
  };

  const posterStyle = {
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  };

  const detailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const sectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '10px'
  };

  const sectionTitleStyle = {
    color: '#333',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    borderBottom: '2px solid #007bff',
    paddingBottom: '0.5rem',
    display: 'inline-block'
  };

  const descriptionStyle = {
    color: '#666',
    lineHeight: '1.8',
    fontSize: '1.1rem'
  };

  const infoGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  };

  const infoItemStyle = {
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const infoLabelStyle = {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '0.3rem'
  };

  const infoValueStyle = {
    color: '#333',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  };

  const trailerContainerStyle = {
    marginTop: '2rem',
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: 0,
    overflow: 'hidden',
    borderRadius: '10px'
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none'
  };

  const ratingBadgeStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  if (!movie) {
    return (
      <div style={containerStyle}>
        <button 
          style={backButtonStyle}
          onClick={() => navigate('/')}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          ← Back to Home
        </button>
        <div style={{...contentStyle, padding: '3rem', textAlign: 'center'}}>
          <h2>Movie not found!</h2>
          <p>The movie you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <button 
        style={backButtonStyle}
        onClick={() => navigate('/')}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        ← Back to Home
      </button>

      <div style={contentStyle}>
        <div style={movieHeaderStyle}>
          <img src={movie.posterURL} alt={movie.title} style={backdropStyle} />
          <h1 style={movieTitleStyle}>{movie.title}</h1>
        </div>

        <div style={movieInfoStyle}>
          <img src={movie.posterURL} alt={movie.title} style={posterStyle} />
          
          <div style={detailsStyle}>
            <div style={ratingBadgeStyle}>
              <span>⭐</span>
              <span>{movie.rating.toFixed(1)} / 5.0</span>
            </div>

            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Synopsis</h2>
              <p style={descriptionStyle}>{movie.description}</p>
            </div>

            <div style={infoGridStyle}>
              <div style={infoItemStyle}>
                <div style={infoLabelStyle}>Year</div>
                <div style={infoValueStyle}>{movie.year}</div>
              </div>
              <div style={infoItemStyle}>
                <div style={infoLabelStyle}>Director</div>
                <div style={infoValueStyle}>{movie.director}</div>
              </div>
              <div style={infoItemStyle}>
                <div style={infoLabelStyle}>Cast</div>
                <div style={infoValueStyle}>{movie.cast}</div>
              </div>
            </div>

            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Trailer</h2>
              <div style={trailerContainerStyle}>
                <iframe
                  src={movie.trailerLink}
                  title={`${movie.title} trailer`}
                  style={iframeStyle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
