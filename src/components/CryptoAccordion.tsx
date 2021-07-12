import React from 'react';
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridItem from './GridItem';
import noPhoto from '../images/no-photo.png';

const useStyles = makeStyles({
  media: {
    display: 'block',
    height: 50,
  },
  grid: {
    maxWidth: 500,
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

const CryptoAccordion: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Grid>
          <img
            src={props.imageUrl || noPhoto}
            alt={props.fullName || 'N/A'}
            className={classes.media}
          />

          <Typography component='h2' variant='h5'>
            {props.fullName || 'N/A'}
          </Typography>

          <Typography variant='body2'>
            {props.fromSymbol}/{props.toSymbol}
          </Typography>
        </Grid>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container direction='column' spacing={2} className={classes.grid}>
          <GridItem title='Price ($)' value={props.price} />
          <GridItem title='Change ($)' value={props.changeDay} />
          <GridItem title='Change (%)' value={props.changePctDay} />
          <GridItem title='Market Cap ($)' value={props.marketCap} />
          <GridItem title='Volume (Day)' value={props.volumeDay} />
          <GridItem title='Volume (24Hr)' value={props.volume24Hour} />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default CryptoAccordion;
