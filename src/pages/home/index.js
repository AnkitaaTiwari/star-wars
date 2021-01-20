import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';

import CharacterInfo from '../../containers/characterInfo';
import { fetchCharacterAction } from '../../actions/characterActions';
import { fetchPeopleListAction } from '../../actions/peopleListActions';
import useStyles from './styles';

function Home({ fetchPeopleList, fetchCharacter, peopleList, msg }) {
  const classes = useStyles();

  useEffect(() => {
    fetchPeopleList();
  }, [ fetchPeopleList ]);

  function handleChange(e) {
    fetchCharacter(e?.target?.value?.url);
  }

  if(!!msg) {
    return (
      <div>{msg}</div>
    );
  }

  if(!peopleList || peopleList?.results?.length === 0) {
    return (
      <div>NO PEOPLE LIST FOUND.</div>
    );
  }
  
  return (
    <div className={classes.content}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} sm={4}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={''}
            onChange={handleChange}
          >
            {peopleList?.results?.map((option, key) => (
              <MenuItem key={key} value={option}>{option?.name}</MenuItem>
            ))}
          </Select>
          <CharacterInfo />
        </Grid>
      </Grid>
    </div>
  )
}

Home.propTypes = {
  peopleList: PropTypes.shape({
    results: PropTypes.array,
  }),
  message: PropTypes.string,
  isLoading: PropTypes.bool,
  fetchPeopleList: PropTypes.func,
  fetchCharacter: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    peopleList: state.peopleListReducer.peopleList,
    msg: state.peopleListReducer.msg,
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
