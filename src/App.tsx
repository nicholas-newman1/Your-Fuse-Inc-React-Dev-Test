import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CryptoAccordion from './components/CryptoAccordion';
import CryptoAccordionLoading from './components/CryptoAccordionLoading';
import CryptoCard from './components/CryptoCard';
import CryptoCardLoading from './components/CryptoCardLoading';
import { useAppSelector } from './hooks/useAppSelector';
import {
  fetchCryptos,
  fetchMoreCryptos,
  nextPage,
  prevPage,
  toggleCardView,
} from './redux/cryptoSlice/actions';

const useStyles = makeStyles({
  root: {
    padding: '2rem 0',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
});

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { data, loading, error, cardView, viewLimit, viewPage } =
    useAppSelector((state) => state.cryptos);

  const onNextPage = () => {
    dispatch(nextPage());
    window.scrollTo(0, 0);
  };

  const onPrevPage = () => {
    dispatch(prevPage());
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && (viewPage + 1) * viewLimit > data.length)
      dispatch(fetchMoreCryptos());
  }, [loading, dispatch, data.length, viewLimit, viewPage]);

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Typography component='h1' variant='h3' gutterBottom align='center'>
        Your Fuse Inc React Dev Test
      </Typography>

      <Grid container direction='column' spacing={2}>
        <Grid item>
          <Button
            onClick={() => dispatch(toggleCardView())}
            variant='contained'
            style={{ margin: '0 auto', display: 'block' }}
          >
            {cardView ? 'List View' : 'Card View'}
          </Button>
        </Grid>

        <Grid item>
          <Grid container spacing={1} justifyContent='center'>
            <Grid item>
              <Button
                variant='contained'
                onClick={onPrevPage}
                disabled={viewPage === 0}
              >
                Prev Page
              </Button>
            </Grid>

            <Grid item>
              <Button variant='contained' onClick={onNextPage}>
                Next Page
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {loading ? (
          <Grid item style={{ paddingTop: '1.5rem' }}>
            <Grid container spacing={2}>
              {[1, 2, 3, 4].map((i) =>
                cardView ? (
                  <Grid key={i} item xs={12} md={6} lg={3}>
                    <CryptoCardLoading />
                  </Grid>
                ) : (
                  <Grid key={i} item xs={12}>
                    <CryptoAccordionLoading />
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        ) : error ? (
          <Typography variant='body2' color='error' align='center'>
            {error}
          </Typography>
        ) : (
          <Grid item>
            <ul className={classes.list}>
              <Grid container spacing={2}>
                {data.map(
                  (item, i) =>
                    i < (viewPage + 1) * viewLimit &&
                    i >= viewPage * viewLimit &&
                    (cardView ? (
                      <Grid key={item.CoinInfo.Id} item xs={12} md={6} lg={3}>
                        <li>
                          <CryptoCard
                            fullName={item.CoinInfo.FullName}
                            imageUrl={`https://www.cryptocompare.com/${item.CoinInfo.ImageUrl}`}
                            fromSymbol={item.RAW?.CAD.FROMSYMBOL}
                            toSymbol={item.RAW?.CAD.TOSYMBOL}
                            price={item.RAW?.CAD.PRICE}
                            changeDay={item.RAW?.CAD.CHANGEDAY}
                            changePctDay={item.RAW?.CAD.CHANGEPCTDAY}
                            marketCap={item.RAW?.CAD.MKTCAP}
                            volumeDay={item.RAW?.CAD.VOLUMEDAY}
                            volume24Hour={item.RAW?.CAD.VOLUME24HOUR}
                          />
                        </li>
                      </Grid>
                    ) : (
                      <Grid key={item.CoinInfo.Id} item xs={12}>
                        <li>
                          <CryptoAccordion
                            fullName={item.CoinInfo.FullName}
                            imageUrl={`https://www.cryptocompare.com/${item.CoinInfo.ImageUrl}`}
                            fromSymbol={item.RAW?.CAD.FROMSYMBOL}
                            toSymbol={item.RAW?.CAD.TOSYMBOL}
                            price={item.RAW?.CAD.PRICE}
                            changeDay={item.RAW?.CAD.CHANGEDAY}
                            changePctDay={item.RAW?.CAD.CHANGEPCTDAY}
                            marketCap={item.RAW?.CAD.MKTCAP}
                            volumeDay={item.RAW?.CAD.VOLUMEDAY}
                            volume24Hour={item.RAW?.CAD.VOLUME24HOUR}
                          />
                        </li>
                      </Grid>
                    ))
                )}
              </Grid>
            </ul>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default App;
