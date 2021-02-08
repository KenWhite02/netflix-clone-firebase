import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import './Banner.css';
import { motion } from 'framer-motion';
import {
  animationOne,
  transitionOne,
  animationTwo,
  transitionTwo,
  animationBanner,
  transitionBanner,
  animationButton,
  transitionButton,
} from '../animations/banner';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <motion.header
      initial='out'
      animate='in'
      variants={animationBanner}
      transition={transitionBanner}
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(
          'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
          )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner_contents'>
        <motion.h1
          initial='out'
          animate='in'
          variants={animationOne}
          transition={transitionOne}
          className='banner_title'
        >
          {movie?.title || movie?.name || movie?.original_name}{' '}
        </motion.h1>

        <motion.div
          initial='out'
          animate='in'
          variants={animationButton}
          transition={transitionButton}
          className='banner_buttons'
        >
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </motion.div>

        <motion.h1
          initial='out'
          animate='in'
          variants={animationTwo}
          transition={transitionTwo}
          className='banner_description'
        >
          {truncate(movie?.overview, 150)}{' '}
        </motion.h1>
      </div>
      <div className='banner_fadeBottom' />
    </motion.header>
  );
}

export default Banner;
