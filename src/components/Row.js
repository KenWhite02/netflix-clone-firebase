import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { motion } from 'framer-motion';
import {
  animationTitle,
  transitionTitle,
  animationPosters,
  transitionPosters,
} from '../animations/row';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '350',
    width: '740',
    playerVars: {
      autoplay: 2,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.original_name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className='row'>
      <motion.h2
        initial='out'
        animate='in'
        variants={animationTitle}
        transition={transitionTitle}
      >
        {title}
      </motion.h2>

      <motion.div
        initial='out'
        animate='in'
        variants={animationPosters}
        transition={transitionPosters}
        className='row_posters'
      >
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={`${movie.title} || ${movie.original_name}`}
            />
          );
        })}
      </motion.div>

      <div className='trailer'>
        {trailerUrl && (
          <YouTube
            videoId={trailerUrl}
            opts={opts}
            className='youtube_trailer'
          />
        )}
      </div>
    </div>
  );
}

export default Row;
