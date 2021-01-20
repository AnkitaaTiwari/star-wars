import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';

function Layout({ children }) {
  const classes = useStyles();

  return (
    <Box mt={2} display="flex" flexDirection="column" justifyContent="center">
      <Typography className={classes.heading} variant="h4" align="center">
          <Link to='/'>
            Star Wars
          </Link>
      </Typography>
      <Box mt={8} mx={5}>
        {children}
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
