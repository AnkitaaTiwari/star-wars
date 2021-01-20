import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography, Grid, Box } from '@material-ui/core';

function CharacterInfo({ character, movieList, errorMessage, isLoading }) {

  console.log('character', character);
  console.log('movieListmovieList', movieList);

  if(!!errorMessage) {
    return (
      <Typography color="error" align="center">{errorMessage}</Typography>
    );
  }

  if(Object.keys(character).length === 0 && character.constructor === Object) {
    return (
      <Typography color="primary" align="center">Please select a character</Typography>
    );
  }

  const lastMovie = movieList?.[movieList.length - 1]?.data;
  
  return (
    <Box my={5} display="flex" flexDirection="column">
      <Box mb={3} display="flex">
        <Typography variant="body1">
          The last time {character.name} was in a movie was in {lastMovie.title} in the year {lastMovie.release_date.substring(0, 4)}
        </Typography>
      </Box>
      <Grid container>
        {movieList.map(movie => (
          <Grid item sm={6}>
            {movie?.data?.title}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

CharacterInfo.propTypes = {
  peopleList: PropTypes.shape({
    results: PropTypes.array,
  }),
  movieList: PropTypes.shape({
    release_date: PropTypes.string,
    title: PropTypes.string,
  }),
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    character: state.characterReducer.character,
    movieList: state.characterReducer.movieList,
    errorMessage: state.peopleListReducer.msg,
    isLoading: state.peopleListReducer.isLoading,
  };
};


export default connect(mapStateToProps)(CharacterInfo);
