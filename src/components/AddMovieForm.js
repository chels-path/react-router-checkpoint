import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
    trailerLink: '',
    year: '',
    director: '',
    cast: ''
  });

  const formContainerStyle = {
    marginBottom: '2rem'
  };

  const toggleButtonStyle = {
    padding: '1rem 2rem',
    backgroundColor: isFormVisible ? '#dc3545' : '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '1rem'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    display: isFormVisible ? 'block' : 'none',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const formGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem'
  };

  const formGroupStyle = {
    marginBottom: '1rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#555',
    fontWeight: 'bold'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e0e0e0',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    outline: 'none'
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '100px',
    gridColumn: 'span 2'
  };

  const submitButtonStyle = {
    padding: '1rem 2rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    gridColumn: 'span 2'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.title || !formData.description || !formData.posterURL || !formData.rating || !formData.trailerLink) {
      alert('Please fill in all required fields (Title, Description, Poster URL, Rating, and Trailer Link)');
      return;
    }

    // Convert numeric values
    const newMovie = {
      ...formData,
      rating: parseFloat(formData.rating),
      year: parseInt(formData.year) || new Date().getFullYear()
    };

    onAddMovie(newMovie);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
      trailerLink: '',
      year: '',
      director: '',
      cast: ''
    });
    
    setIsFormVisible(false);
  };

  return (
    <div style={formContainerStyle}>
      <button
        style={toggleButtonStyle}
        onClick={() => setIsFormVisible(!isFormVisible)}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = isFormVisible ? '#c82333' : '#218838';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = isFormVisible ? '#dc3545' : '#28a745';
        }}
      >
        {isFormVisible ? 'Cancel' : 'Add New Movie'}
      </button>

      <div style={formStyle}>
        <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Add New Movie</h2>
        <form onSubmit={handleSubmit}>
          <div style={formGridStyle}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter movie title"
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Release year"
                min="1900"
                max={new Date().getFullYear() + 5}
              />
            </div>

            <div style={{...formGroupStyle, gridColumn: 'span 2'}}>
              <label style={labelStyle}>Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={textareaStyle}
                placeholder="Enter movie description"
                rows="4"
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Poster URL *</label>
              <input
                type="url"
                name="posterURL"
                value={formData.posterURL}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter poster URL"
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Trailer Link *</label>
              <input
                type="url"
                name="trailerLink"
                value={formData.trailerLink}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter YouTube embed URL"
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Rating (0-5) *</label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                min="0"
                max="5"
                step="0.1"
                style={inputStyle}
                placeholder="Enter rating"
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Director</label>
              <input
                type="text"
                name="director"
                value={formData.director}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter director name"
              />
            </div>

            <div style={{...formGroupStyle, gridColumn: 'span 2'}}>
              <label style={labelStyle}>Cast (comma-separated)</label>
              <input
                type="text"
                name="cast"
                value={formData.cast}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter cast members (separated by commas)"
              />
            </div>

            <button type="submit" style={submitButtonStyle}>
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;
