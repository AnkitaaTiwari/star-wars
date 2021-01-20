import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography, Grid, Box, CircularProgress } from '@material-ui/core';

function CharacterInfo({ character, movieList, errorMessage, isLoading }) {

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

  if(isLoading) {
    return (
      <Box mt={10} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  const lastMovie = movieList?.[movieList.length - 1]?.data;
  
  return (
    <Box my={5} display="flex" flexDirection="column">
      <Box mb={3} display="flex" justifyContent="center">
        <Typography variant="body1">
          The last time {character.name} was in a movie was in {lastMovie.title} in the year {lastMovie.release_date.substring(0, 4)}
        </Typography>
      </Box>
      <Box mb={1} display="flex" justifyContent="center">
        <Typography variant="h5">
          List of Movies
        </Typography>
      </Box>
      <Grid container>
        {movieList.map(movie => (
          <Grid item sm={6}>
            <Box mb={1} display="flex" justifyContent="center">
              {movie?.data?.title}
            </Box>
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
    errorMessage: state.characterReducer.msg,
    isLoading: state.characterReducer.isLoading,
  };
};


export default connect(mapStateToProps)(CharacterInfo);
