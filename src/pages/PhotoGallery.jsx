import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [photoUrls, setPhotoUrls] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/photos');
        setPhotoUrls(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h2>Photo Viewer</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photoUrls.map((url, index) => (
          <img key={index} src={url} alt={`Photo ${index + 1}`} style={{ margin: '10px', width: '200px', height: '200px' }} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
