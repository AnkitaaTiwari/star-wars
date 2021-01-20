import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    heading: {
      padding: '2.5rem',
      [theme.breakpoints.down('sm')]: {
        padding: '1.5rem',
      },
    }
  });
})

export default useStyles;
