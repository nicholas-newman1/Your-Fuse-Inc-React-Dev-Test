import { Grid, Typography } from '@material-ui/core';
import React from 'react';

interface Props {
  title: string;
  value?: number;
}

const GridItem: React.FC<Props> = (props) => {
  return (
    <Grid item>
      <Grid container justifyContent='space-between'>
        <Grid item>
          <Typography component='h3' variant='body2' align='center'>
            <strong>{props.title}</strong>
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant='body2' align='center'>
            {props.value
              ? props.value.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })
              : 'N/A'}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GridItem;
