import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    content: {
      height: 'auto',
      width: 'auto',
      margin: theme.spacing(0, 1, 1),
    },
    gridContainer:{
      justifyContent: 'center',
    }
  });
})

export default useStyles;
