import React, { PureComponent } from 'react';
import { Poster } from './movie';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const IMAGE_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends PureComponent {
  state = {
    movie: []
  };
  async componentDidMount() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=ba7b64fc2b445d14cef2f5598f9e3f1f&language=en-US`
      );
      const movie = await response.json();
      this.setState({ movie });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      title,
      overview,
      release_date,
      poster_path,
      backdrop_path,
      original_title,
      id
    } = this.state.movie;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={id}>
            <Poster src={`${IMAGE_PATH}${poster_path}`} alt={original_title} />
          </Overdrive>
          <div>
            <h1>{title}</h1>
            <p>{overview}</p>
            <h3>{release_date}</h3>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
