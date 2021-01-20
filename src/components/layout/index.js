import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { IconButton } from '@material-ui/core';
// import { MenuOpen as MenuOpenIcon } from '@material-ui/icons';
import useStyles from './styles';
// import Menu from '../menu/index';
// import Footer from '../footer/index';
// import Logo from '../../images/logo.svg';
// import Title from '../../images/title.svg';


function Layout({ children }) {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <header className={classes.header}>
          <div className={classes.logo}>
            <Link to='/'>
              Logo
            </Link>
          </div>
          <div className={classes.title}>
            <Link to='/'>
              title
            </Link>
          </div>
        </header>
      </div>
      <div className={classes.mainContainer}>
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
