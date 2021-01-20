import { makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({ 
    content: {     
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
    },
    
    recipeSliderGrid: {
      height: '100%',
      margin: '25px',
      
    },

    gridContainer:{
      alignContent: 'center',
      maxWidth: '100%',
      overflow: 'hidden',
      wordWrap: 'break-word',
    },
    
    div:{
      display: 'flex',
      margin : '10px',
      padding: '10px',
      position: 'relative',
    },
    
  });
   
})

export default useStyles;
