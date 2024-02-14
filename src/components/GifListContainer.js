import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=ruHZeLUajtcODXaoZgCUooG3PilJmsWw&rating=g
        `);
        const { data } = await response.json();
        setGifs(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching gifs:', error);
      }
    };
  
    fetchGifs();
  }, [searchTerm]);

  const handleSubmit = (query) => {
    setSearchTerm(query);
  };

  return (
    <div>
      <GifSearch handleSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
