import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    container: {
      height: 'auto',
      width: 'auto',
    },

    header: {
      width: 'auto',
      height: '80px',
      display: 'flex',
      padding: '15px',
    },

    logo: {
      display : 'inline-block',
      width: '70px',
      height: '70px',
      marginLeft: '10px',
    },
    title: {
      display: 'inline-block',
      textAlign: 'center',
      width: '100%',
      height: '70px',
      padding: '10px',
    },

    showMenuButton: {
      right: '20px',
      padding: '10px',
      top: '20px',
      height: '70px',
    },

    hideMenu: {
      height: '55px',
    },

    closeMenu: {
      top: '8px',
      right: '10px',
      position: 'fixed',
    },

    mainContainer: {
      height: '100%',
      width: '100%',
      backgroundColor: '#eeeeee',
    },
  });
})

export default useStyles;
