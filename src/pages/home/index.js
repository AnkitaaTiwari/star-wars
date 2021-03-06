import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { Box, Select, MenuItem, Typography, CircularProgress, useMediaQuery  } from '@material-ui/core';

import CharacterInfo from '../../containers/characterInfo';
import { fetchCharacterAction } from '../../actions/characterActions';
import { fetchPeopleListAction } from '../../actions/peopleListActions';

function Home({ fetchPeopleList, fetchCharacter, peopleList, errorMessage, isLoading }) {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [ currentCharacter, setCurrentCharacter ] = useState('')
  useEffect(() => {
    fetchPeopleList();
  }, [ fetchPeopleList ]);

  function handleChange(e) {
    setCurrentCharacter(e?.target?.value);
    fetchCharacter(e?.target?.value);
  }

  if(!!errorMessage) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography color="error" align="center">{errorMessage}</Typography>
      </Box>
    );
  }

  if(!peopleList || peopleList?.results?.length === 0) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography color="error" align="center">People list not found.</Typography>
      </Box>
    );
  }

  if(isLoading) {
    return (
      <Box mt={10} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }
  
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Box mx={matches ? 25 : 5}  display="flex" flexDirection="column">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentCharacter}
          onChange={handleChange}
        >
          {peopleList?.results?.map((option, key) => (
            <MenuItem key={key} value={option?.url}>{option?.name}</MenuItem>
          ))}
        </Select>
      </Box>
      <CharacterInfo />
    </Box>
  )
}

Home.propTypes = {
  peopleList: PropTypes.shape({
    results: PropTypes.array,
  }),
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  fetchPeopleList: PropTypes.func,
  fetchCharacter: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    peopleList: state.peopleListReducer.peopleList,
    errorMessage: state.peopleListReducer.msg,
    isLoading: state.peopleListReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPeopleList: fetchPeopleListAction,
    fetchCharacter: fetchCharacterAction,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
