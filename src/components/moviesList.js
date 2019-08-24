import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './movie';

class MoviesList extends PureComponent {
  state = {
    movies: []
  };
  async componentDidMount() {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=ba7b64fc2b445d14cef2f5598f9e3f1f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      );
      const movies = await response.json();
      this.setState({ movies: movies.results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}
const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;

export default MoviesList;
