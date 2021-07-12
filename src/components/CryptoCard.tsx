import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import noPhoto from '../images/no-photo.png';
import React from 'react';
import GridItem from './GridItem';

const useStyles = makeStyles({
  media: {
    display: 'block',
    height: 100,
    margin: '0 auto',
    marginBottom: '1rem',
  },
  grid: {
    maxWidth: 300,
    margin: '0 auto',
    marginTop: '1rem',
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
      <CardContent>
        <img
          src={props.imageUrl || noPhoto}
          alt={props.fullName || 'N/A'}
          className={classes.media}
        />

        <Typography component='h2' variant='h5' align='center'>
          {props.fullName || 'N/A'}
        </Typography>

        <Typography variant='body2' align='center'>
          {props.fromSymbol}/{props.toSymbol}
        </Typography>

        <Grid container direction='column' spacing={2} className={classes.grid}>
          <GridItem title='Price ($)' value={props.price} />
          <GridItem title='Change ($)' value={props.changeDay} />
          <GridItem title='Change (%)' value={props.changePctDay} />
          <GridItem title='Market Cap ($)' value={props.marketCap} />
          <GridItem title='Volume (Day)' value={props.volumeDay} />
          <GridItem title='Volume (24Hr)' value={props.volume24Hour} />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
