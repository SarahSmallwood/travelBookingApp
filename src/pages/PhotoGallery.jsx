import React, { useState } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/upload', formData);
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleDownload = async () => {
    const key = 'your-file-key.jpg'; // Replace with the actual key

    try {
      const response = await axios.get(`http://localhost:5000/download/${key}`, {
        responseType: 'blob',
      });

      // Use the response data as needed (e.g., display/download the file)
      console.log('File downloaded successfully:', response.data);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
      <button onClick={handleDownload}>Download Image</button>
    </div>
  );
};


export default PhotoGallery;
