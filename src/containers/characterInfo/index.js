import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';

function CharacterInfo({ character, movieList, msg, isLoading }) {
  const classes = useStyles();

  console.log('character', character);
  console.log('movieListmovieList', movieList);

  if(!!msg) {
    return (
      <div>{msg}</div>
    );
  }

  // if(!peopleList || peopleList?.results?.length === 0) {
  //   return (
  //     <div>NO PEOPLE LIST FOUND.</div>
  //   );
  // }
  
  return (
    <div className={classes.content}>
      character
    </div>
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
  message: PropTypes.string,
  isLoading: PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    character: state.characterReducer.character,
    movieList: state.characterReducer.movieList,
    msg: state.peopleListReducer.msg,
    isLoading: state.peopleListReducer.isLoading,
  };
};


export default connect(mapStateToProps)(CharacterInfo);
