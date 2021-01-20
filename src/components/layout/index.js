import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

function Layout({ children }) {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Typography variant="h4" align="center">
          <Link to='/'>
            Star Wars
          </Link>
      </Typography>
      <Box mt={8}>
        {children}
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
