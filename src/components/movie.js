import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from 'styled-components';
import Overdrive from 'react-overdrive';

const IMAGE_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => {
  return (
    <Link to={`/${movie.id}`}>
      <Overdrive id={movie.id}>
        <Poster src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
      </Overdrive>
    </Link>
  );
};

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired
  }),
  overview: PropTypes.string
};

Movie.defaultProps = {
  overview: 'Description not available'
};

export const Poster = style.img`
  box-shadow:0 0 30px black;
`;
