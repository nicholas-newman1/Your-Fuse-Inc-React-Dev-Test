import { Card, makeStyles } from '@material-ui/core';
import Spinner from './Spinner';

const useStyles = makeStyles({
  card: {
    height: '400px',
    display: 'grid',
    alignItems: 'center',
  },
});

const CryptoCardLoading = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Spinner />
    </Card>
  );
};

export default CryptoCardLoading;
