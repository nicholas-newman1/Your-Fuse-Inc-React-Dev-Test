import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import noPhoto from '../images/no-photo.png';
import React from 'react';

const useStyles = makeStyles({
  media: {
    display: 'block',
    height: 100,
    margin: '0 auto',
  },
  grid: {
    maxWidth: 300,
    margin: '0 auto',
  },
});

interface Props {
  fullName?: string;
  imageUrl?: string;
  fromSymbol?: string;
  toSymbol?: string;
  price?: number;
  changeDay?: number;
  changePctDay?: number;
  marketCap?: number;
  volumeDay?: number;
  volume24Hour?: number;
}

const CryptoCard: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Card>
      <img
        src={props.imageUrl || noPhoto}
        alt={props.fullName || 'N/A'}
        className={classes.media}
      />

      <CardContent>
        <Typography component='h2' variant='h5' align='center'>
          {props.fullName || 'N/A'}
        </Typography>

        <Typography variant='body2' align='center'>
          {props.fromSymbol}/{props.toSymbol}
        </Typography>

        <Grid container direction='column' spacing={2} className={classes.grid}>
          {GridItem('Price ($)', props.price)}
          {GridItem('Change ($)', props.changeDay)}
          {GridItem('Change (%)', props.changePctDay)}
          {GridItem('Market Cap ($)', props.marketCap)}
          {GridItem('Volume (Day)', props.volumeDay)}
          {GridItem('Volume (24Hr)', props.volume24Hour)}
        </Grid>
      </CardContent>
    </Card>
  );
};

const GridItem = (title: string, value?: number) => (
  <Grid item>
    <Grid container justify='space-between'>
      <Grid item>
        <Typography variant='body2' align='center'>
          <strong>{title}</strong>
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant='body2' align='center'>
          {value
            ? value.toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            : 'N/A'}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default CryptoCard;
